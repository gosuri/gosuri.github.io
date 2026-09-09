import unittest
import os
import export_blog as eb

FIXTURE = """# Predictions & Notable Claims — Greg Osuri

_4 extracted statements from 3 videos and podcasts. Each quote links to the exact moment on YouTube or the podcast player._

## Local Compute

### 2018-11-10 — Devices will outnumber humans
_CoinBundle interview (CoinBundle)_ · [video page](videos/Don1slbJlMQ.md)

> "We're moving to a more decentralized infrastructure."
> — [00:25:36](https://www.youtube.com/watch?v=Don1slbJlMQ&t=1536s)

**Context:** Closing argument on decentralization.

### 2019-08-06 — Home hardware made almost free
_Techpost interview (Techpost)_ · [video page](videos/WKvrKWdc9OA.md)

> "This device sits in your house."
> "It becomes part of the Akash network."
> — [00:10:22](https://www.youtube.com/watch?v=WKvrKWdc9OA&t=622s)

## Energy & AI

### 2023-05-01 — Podcasts count as sources too
_"Sample Podcast Episode" (Sample Show)_ · [video page](videos/pod-sample-episode.md)

> "This is a podcast quote, not a YouTube video."
> — [00:12:34](https://www.buzzsprout.com/12345/67890-sample-episode)

### 2024-03-01 — Energy is the bottleneck
_Some pod (SomeChannel)_ · [video page](videos/abc123.md)

> "Energy, not chips, is the constraint."
> — [01:00:00](https://www.youtube.com/watch?v=abc123&t=3600s)
"""


class TestSlugify(unittest.TestCase):
    def test_ampersand_and_spaces(self):
        self.assertEqual(eb.slugify("Energy & AI"), "energy-ai")
        self.assertEqual(eb.slugify("Crypto & DePIN"), "crypto-depin")
        self.assertEqual(eb.slugify("Local Compute"), "local-compute")


class TestParse(unittest.TestCase):
    def test_parses_all_entries(self):
        meta, entries = eb.parse_predictions(FIXTURE)
        self.assertEqual(meta["declared"], 4)
        self.assertEqual(len(entries), 4)
        e = entries[0]
        self.assertEqual(e["theme"], "Local Compute")
        self.assertEqual(e["date"], "2018-11-10")
        self.assertEqual(e["title"], "Devices will outnumber humans")
        self.assertEqual(e["source"], "_CoinBundle interview (CoinBundle)_")
        self.assertEqual(e["stamp"][0], "00:25:36")
        self.assertIn("t=1536s", e["stamp"][1])
        self.assertTrue(e["context"].startswith("**Context:**"))
        self.assertIsNone(entries[1]["context"])
        self.assertEqual(len(entries[1]["quote"]), 3)  # 2 quote lines + stamp line
        self.assertEqual(entries[2]["theme"], "Energy & AI")

    def test_podcast_entry_parses(self):
        _, entries = eb.parse_predictions(FIXTURE)
        e = entries[2]
        self.assertEqual(e["theme"], "Energy & AI")
        self.assertEqual(e["title"], "Podcasts count as sources too")
        self.assertEqual(e["stamp"][0], "00:12:34")
        self.assertIn("buzzsprout.com", e["stamp"][1])
        self.assertEqual(e["vid"], "pod-sample-episode")

    def test_count_mismatch_raises(self):
        bad = FIXTURE.replace("_4 extracted", "_5 extracted")
        with self.assertRaises(ValueError):
            eb.parse_predictions(bad)

    def test_missing_stamp_raises(self):
        bad = FIXTURE.replace(
            "> — [01:00:00](https://www.youtube.com/watch?v=abc123&t=3600s)\n", ""
        )
        with self.assertRaises(ValueError):
            eb.parse_predictions(bad)


class TestRender(unittest.TestCase):
    def test_theme_page(self):
        _, entries = eb.parse_predictions(FIXTURE)
        local = [e for e in entries if e["theme"] == "Local Compute"]
        page = eb.render_theme_page("Local Compute", local, "/predictions/local-compute/")
        self.assertIn('layout: "predictions"', page)
        self.assertIn('permalink: "/predictions/local-compute/"', page)
        self.assertIn('theme: "Local Compute"', page)
        # date order preserved, no h1 in body
        self.assertLess(page.index("2018-11-10"), page.index("2019-08-06"))
        self.assertNotIn("\n# ", page)

    def test_index_page(self):
        meta, entries = eb.parse_predictions(FIXTURE)
        page = eb.render_index(meta, entries)
        self.assertIn('permalink: "/predictions/"', page)
        self.assertIn("nav: true", page)
        self.assertIn('class="theme-grid"', page)
        self.assertIn("local-compute", page)
        self.assertIn("2 statements", page)  # Local Compute count
        self.assertIn("2018–2024", page)  # derived min/max year range
        self.assertNotIn("present", page)
        # 4 statements, 4 distinct video/podcast sources (comma formatting
        # is a no-op below 1,000 but exercises the `:,` format spec)
        self.assertIn("4 statements from 4 videos and podcasts", page)

    def test_index_thousands_separator(self):
        # Synthetic large entry set — exercises the `:,` format spec, which
        # the small fixture (4 entries) can't demonstrate on its own.
        entries = [
            {
                "theme": "Test Theme",
                "date": "2020-01-01",
                "title": f"Statement {i}",
                "stamp": ("00:00:00", f"https://www.youtube.com/watch?v=vid{i}"),
                "vid": f"vid{i}",
            }
            for i in range(1234)
        ]
        page = eb.render_index({"declared": 1234}, entries)
        self.assertIn("1,234 statements", page)

    def test_split_by_year(self):
        _, entries = eb.parse_predictions(FIXTURE)
        local = [e for e in entries if e["theme"] == "Local Compute"]
        pages = eb.theme_pages("Local Compute", local, split_bytes=10)
        # tiny threshold forces split: index + one page per year
        paths = sorted(pages)
        self.assertIn("local-compute.md", paths)
        self.assertIn(os.path.join("local-compute", "2018.md"), paths)
        self.assertIn(os.path.join("local-compute", "2019.md"), paths)


if __name__ == "__main__":
    unittest.main()
