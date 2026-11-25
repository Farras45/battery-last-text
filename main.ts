// The Battery's Last Text to Its Charger
// Writes one original line — the phone battery's final text to the
// charger it waited for all day — to /output/entry.txt.
//
// The gate requires UTF-8 text of 1 to 200 characters, not only
// whitespace, so the file holds exactly the line, with no trailing
// newline and no extra text. The length is checked before writing,
// so a bad line fails loudly here instead of failing the gate.

import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_PATH = "/output/entry.txt";

const LINE =
  "I waited all day at 1% for you, so my last text is a one-star review: great at hiding, terrible at charging — and I would not die for you again.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(
    `Entry line must be 1-200 non-blank characters, got ${LINE.length}.`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");
