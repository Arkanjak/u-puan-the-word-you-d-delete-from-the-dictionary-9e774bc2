// The Word You'd Delete from the Dictionary
// Entry: one word, written to /output/entry.txt (gate: 1-77 UTF-8 chars).
// The word: "Monday" — the one day of the week nobody has ever looked
// forward to. Delete it and every week starts on Tuesday, no alarm
// dread, no case of the Mondays ever again.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Monday";

// Gate guard: a single word, 1-77 chars, no whitespace padding.
if (!/^[^\s]+$/.test(WORD) || WORD.length < 1 || WORD.length > 77) {
  throw new Error("entry word fails the gate");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
console.log(`Wrote entry (${WORD.length} chars): ${WORD}`);
