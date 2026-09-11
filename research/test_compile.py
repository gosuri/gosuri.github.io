import tempfile
import unittest
from pathlib import Path

import compile as compiler
import export_blog


VIDEO = """---
id: sample
title: Sample interview
channel: Sample channel
date: 2024-01-02
duration_min: 10
url: https://www.youtube.com/watch?v=sample
type: interview
greg_speaks: yes
oneliner: A sample interview.
---

## Predictions & Notable Claims

### [local-compute] A claim
> "Exact quote."
> — [00:00:05](https://www.youtube.com/watch?v=sample&t=5s)

**Context:** Exact context.
"""


def prediction_source(quote="Exact quote.", speaker="Sunny Aggarwal",
                      status="attributed"):
    return f"""# Predictions & Notable Claims — Greg Osuri

_1 extracted statements from 1 videos. Each quote links to the exact moment on YouTube. The archive includes other speakers and labels uncertain attribution as Unknown._

Themes: [Local Compute](#local-compute)

## Local Compute

### 2024-01-02 — A claim
_Sample interview (Sample channel)_ · [video page](videos/sample.md)

**Speaker:** {speaker}
**Attribution:** {status}

> \"{quote}\"
> — [00:00:05](https://www.youtube.com/watch?v=sample&t=5s)

**Context:** Exact context.
"""


class TestCompile(unittest.TestCase):
    def test_carries_forward_exact_authoritative_attribution(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            (root / "videos").mkdir()
            (root / "videos" / "sample.md").write_text(VIDEO)
            original_predictions = prediction_source()
            (root / "PREDICTIONS.md").write_text(original_predictions)
            (root / "CATALOG.md").write_text("old catalog\n")

            compiler.compile_repository(root)

            output = (root / "PREDICTIONS.md").read_text()
            self.assertIn("**Speaker:** Sunny Aggarwal", output)
            self.assertIn("**Attribution:** attributed", output)
            self.assertEqual(output, original_predictions)
            _, entries = export_blog.parse_predictions(output)
            self.assertEqual(entries[0]["speaker"], "Sunny Aggarwal")
            self.assertNotEqual((root / "CATALOG.md").read_text(), "old catalog\n")

    def test_changed_legacy_record_is_rejected_before_either_output_changes(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            (root / "videos").mkdir()
            changed = VIDEO.replace('> "Exact quote."', '> "Changed quote."')
            (root / "videos" / "sample.md").write_text(changed)
            original_predictions = prediction_source()
            (root / "PREDICTIONS.md").write_text(original_predictions)
            (root / "CATALOG.md").write_text("old catalog\n")

            with self.assertRaisesRegex(
                    ValueError, "missing explicit speaker attribution"):
                compiler.compile_repository(root)

            self.assertEqual((root / "PREDICTIONS.md").read_text(),
                             original_predictions)
            self.assertEqual((root / "CATALOG.md").read_text(), "old catalog\n")

    def test_new_record_with_explicit_attribution_compiles(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            (root / "videos").mkdir()
            explicit = VIDEO.replace(
                "### [local-compute] A claim\n",
                "### [local-compute] A claim\n"
                "**Speaker:** Greg Osuri\n"
                "**Attribution:** attributed\n\n",
            )
            (root / "videos" / "sample.md").write_text(explicit)

            compiler.compile_repository(root)

            output = (root / "PREDICTIONS.md").read_text()
            _, entries = export_blog.parse_predictions(output)
            self.assertEqual(
                (entries[0]["speaker"], entries[0]["speaker_status"]),
                ("Greg Osuri", "attributed"),
            )
            self.assertTrue((root / "CATALOG.md").exists())

    def test_invalid_explicit_attribution_is_rejected_before_writes(self):
        with tempfile.TemporaryDirectory() as tmp:
            root = Path(tmp)
            (root / "videos").mkdir()
            invalid = VIDEO.replace(
                "### [local-compute] A claim\n",
                "### [local-compute] A claim\n"
                "**Speaker:** Unknown\n"
                "**Attribution:** attributed\n\n",
            )
            (root / "videos" / "sample.md").write_text(invalid)
            original_predictions = prediction_source()
            (root / "PREDICTIONS.md").write_text(original_predictions)
            (root / "CATALOG.md").write_text("old catalog\n")

            with self.assertRaisesRegex(
                    ValueError, "Unknown speaker must be uncertain"):
                compiler.compile_repository(root)

            self.assertEqual((root / "PREDICTIONS.md").read_text(),
                             original_predictions)
            self.assertEqual((root / "CATALOG.md").read_text(), "old catalog\n")


if __name__ == "__main__":
    unittest.main()
