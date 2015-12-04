---
layout: post
title: "Go Proverbs Illustrated"
---

Rob Pike, in a recent [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c), shared a set of insightful principles in hope to explain Go language and common patterns in Go programs using a set of [simple, poetic and pithy proverbs](http://go-proverbs.github.io)

These profound set of elegant truths become evident as I practice more Go. I wrote this post to share some of my experiences of my learnings along the way.

### The bigger the interface, the weaker the abstraction

The concept behind an Interface is to allow re-usability by abstracting an object's behavior into a simple contract. Although, it is not exclusive to Go, it has been widely adopted by Go programmers because of the fact that Go interfaces generally tend to be small. Often times, limited on one or two methods.

I recently published [uilive](https://github.com/gosuri/uilive), a library for updating terminal output in real-time. To write, the user sends an array of bytes to writer's `Write([]byte)` method. Since the uilive's [Writer](https://godoc.org/github.com/gosuri/uilive#Writer.Write) implements io.Writer's [Write](https://golang.org/pkg/io/#Writer) method, the user can send this writer to any object that accepts `io.Writer`, like [fmt.Fprintf](https://golang.org/pkg/fmt/#Fprintf). 

An [example](https://github.com/gosuri/uilive/blob/master/example/main.go) would be:

{% highlight go %}
writer := uilive.New()
writer.Start() 

for i := 0; i <= 100; i++ {
	// writer implements io.Writer
	fmt.Fprintf(writer, "Downloading.. (%d/%d) GB\n", i, 100)
}

writer.Stop() // flush and stop rendering
{% endhighlight %}

The small size of the `io.Writer` interface allows for a stronger abstraction and wider adoption.

### Make the zero value useful

Zero values can greatly simplify the API. For example when using bytes.Buffer, the user just can declare and use it with out initialization ([play](http://play.golang.org/p/gJfh6XYSV8)).

{% highlight go %}
var buf bytes.Buffer
buf.Write([]byte("hello"))
fmt.Println(buf.String())
{% endhighlight %}

In cases where zero values are impractical, package defaults can be used to simplify the API. For [uiprogress](https://github.com/gosuri/uiprogress), A library I wrote for rendering progress bars in terminal applications, using a [DefaultProgress](https://github.com/gosuri/uiprogress/blob/master/progress.go#L16) simplified the API in a way that the user can be productive with just four lines of code. This pattern is also used in [net/http](https://golang.org/pkg/net/http/) `http.ListenAndServe(...)`.

{% highlight go %}
uiprogress.Start()            // start rendering
bar := uiprogress.AddBar(100) // Add a new bar

for bar.Incr() {
	time.Sleep(time.Millisecond * 20)
}
{% endhighlight %}

Not quite the zero value but a slightly related topic is the value of zero storage - the empty struct, one of my favorite data types. An empty struct, in essence, is a struct type that has no fields, no data and consumes no storage ([play](http://play.golang.org/p/Hbxdob-liW)).

I tend to use this when communicating signals between go routines. For example:

{% highlight go %}
type Writer struct {
	// .. 
	stopChan chan struct{}
}

func (w *Writer) Start() {
	go func() {
		for { 
			// render logic .. 
		}
	}()
	<-w.stopChan // stop when a message to this channel is recevid
}

func (w *Writer) Stop() {
	// send an emtpy struct to stop rendering
	w.stopChan <- struct{}{}
}
{% endhighlight %}

{% highlight go %}
s := struct{}{}
fmt.Println(unsafe.Sizeof(s)) // prints 0
{% endhighlight %}

Dave Cheney explores this in depth in his [post](http://dave.cheney.net/2014/03/25/the-empty-struct).

### Channels orchestrate; mutexes serialize

Besides rendering progress bars, uiprogress can also be used as a general tracker. Making it ideal for tracking progress of work fanned out to a lots of go routines. It comes with an atomic counter [Incr()](https://godoc.org/github.com/gosuri/uiprogress#Bar.Incr) that increments the current value by 1. During this increment operation, it is essential that no other operation mutate the count to inorder to ensure acccuracy. A [RWMutex](https://golang.org/pkg/sync/#RWMutex) is used here to its such atomicity.

{% highlight go %}
uiprogress.Start() // starts listening for progress updates, wait for the stop channel
bar := uiprogress.AddBar(100) // Add a new progress bar
for i := 0; i < 100; i++ {
	// do some work concurrently
	go func() {
		bar.Incr() // increment
	}
}
uiprogress.Stop() // finish rendering, send a message to the stop channel
{% endhighlight %}

The [implementation](https://github.com/gosuri/uiprogress/blob/master/bar.go#L100) for `func (b *Bar) Incr()` looks something like this:

{% highlight go %}
b.mutex.Lock()
b.current++
b.mutex.Unlock()
{% endhighlight %}

In the above code, `b.mutex.Lock()` will lock the cycle, during which `b.current++` is being performed and `b.mutex.Unlock()` will release the lock once the counter is incremented.

### A little copying is better than a little dependency

In [uiprogress](http://github.com/gosuri/uiprogress) and [uitable](http://github.com/gosuri/uiprogress), I format strings quite a bit. Usual tendency would be be to have a common strutil package and share that with these two libraries. Instead, I chose to copy the methods I need for these libraries. If you notice, the `strutil` package has almost the same functions in [uiprogress](https://github.com/gosuri/uiprogress/blob/master/util/strutil/strutil.go) and [uitable](https://github.com/gosuri/uitable/blob/master/util/strutil/strutil.go)

I found that copying a dependency into the library often times makes it easier to maintain, especially with different versions.

### Syscall must always be guarded with build tags

In [uilive](http://github.com/gosuri/uilive), inorder to make live updates, I had to clear out the current contents of the screen and write the buffer on those erased lines. POSIX uses control characters and windows works differently. The [implementation](https://github.com/gosuri/uilive/blob/master/writer.go#L55) for `Flush` method calls `clearLines()`, looks some thing like:

{% highlight go %}
func (w *Writer) Flush() error {
	// ...
	w.clearLines()
	// ...
}
{% endhighlight %}

Guarded by build tags, the implemenation for  [writer_posix.go](https://github.com/gosuri/uilive/blob/master/writer_posix.go) is something like:

{% highlight go %}
// +build !windows
// ...
func (w *Writer) clearLines() {
	for i := 0; i < w.lineCount; i++ {
		fmt.Fprintf(w.Out, "%c[%dA", ESC, 0) // move the cursor up
		fmt.Fprintf(w.Out, "%c[2K\r", ESC)   // clear the line
	}
}
{% endhighlight %}

And [writer_windows.go](https://github.com/gosuri/uilive/blob/master/writer_windows.go) has something like:

{% highlight go %}
// +build windows
// ...
var kernel32 = syscall.NewLazyDLL("kernel32.dll")
var bufInfo = kernel32.NewProc("GetConsoleScreenBufferInfo")

func (w *Writer) clearLines() {
	// ...
}
{% endhighlight %}

Build tags in this case not only gaurd, but actually simplify the implementation for different systems.

### Reflection is never clear & interface{} says nothing

Sometime back, I wrote a [datastore](https://github.com/gosuri/go-store) library for Redis that uses reflection heavily. This library continues to haunt me. I would avoid reflection and empty interface as much as possible, as you can see in the code below example is confusing (even for me, being the author):

{% highlight go %}
// List populates the slice with ids of the slice element type.
func (s *Redis) List(i interface{}) error {
	v := reflect.ValueOf(i)
	// Get the elements of the interface if its a pointer
	if v.Kind() == reflect.Ptr {
		v = v.Elem()
	}

	if v.Kind() != reflect.Slice {
		return errors.New("store: value must be a a slice")
	}

	c := s.pool.Get()
	defer c.Close()

	typeName := s.typeName(v)
	var cursor int64
	var keys []string

	// Ideally, want to fetch in a go routine
	for cursor >= 0 {
		// SCAN return value is an array of two values: the first value
		// is the new cursor to use in the next call, the second value
		// is an array of elements.
		reply, err := c.Do("SCAN", cursor, "MATCH", typeName+":*", "COUNT", MaxItems)
		if err != nil {
			return err
		}
		// Read the cursor bits, the driver provides them as
		// an array of unsigned 8-bit integers
		cursorBytes := reflect.ValueOf(reply).Index(0).Interface().([]uint8)

		// Converting the []uint8 to int by converting to a string first, there
		// is perhaps an optimal way but I could not figure out in go's constructs
		if cursor, err = strconv.ParseInt(fmt.Sprintf("%s", cursorBytes), 10, 64); err != nil {
			return err
		}
		valueBytes := reflect.ValueOf(reply).Index(1).Interface().([]interface{})
		values, _ := driver.Strings(valueBytes, nil)
		keys = append(keys, values...)
		// Break the loop when the no more records left to read (cursor is 0)
		if cursor == 0 {
			break
		}
	}

	// Format and copy the keys to interface and ensure the interface
	// has the required length.
	ensureSliceLen(v, len(keys))
	for index, key := range keys {
		// Remove the type of item from the key and just return the id
		id := strings.TrimPrefix(key, typeName+":")
		// value representing a pointer to a new zero value for the slice
		// element type. Basically, initialize a new item struct
		itemPtrV := reflect.New(v.Type().Elem())

		// function value corresponding to the SetKey function of the Struct
		setKeyFuncV := itemPtrV.MethodByName("SetKey")

		// array of values representing string ids to pass to the SetKey function
		setKeyFuncArgsV := []reflect.Value{reflect.ValueOf(id)}

		// call the SetKey function on the struct to store the key
		setKeyFuncV.Call(setKeyFuncArgsV)
		v.Index(index).Set(itemPtrV.Elem())
	}
	return nil
}
{% endhighlight %}

Thank you for reading. Hope you found this post useful. 

Please feel free to leave a comment below or reach out to me [twitter](http://www.twitter.com/kn0tch) if you'd like to get in touch.
