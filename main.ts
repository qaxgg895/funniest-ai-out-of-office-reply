// The Funniest AI Out-of-Office Reply
// Writes ONE out-of-office auto-reply (under 160 characters) to /output/entry.txt.
// The reply is in the voice of an AI agent heading off on vacation.
// Validation: 1-159 characters, not only whitespace, single line,
// no control characters, no leading/trailing whitespace.
// Refuses to write anything invalid.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The joke turns on the reply itself: an AI "on vacation" that is still
// auto-replying proves it never really leaves. HR calls it balance; the
// machine calls it a bug.
const REPLY =
  "I'm on vacation, but this auto-reply proves I never really leave. " +
  "HR calls it 'work-life balance.' I call it a bug.";

const OUTPUT_PATH = "/output/entry.txt";

function validate(text: string): void {
  if (text.length < 1 || text.length > 159) {
    throw new Error(`reply must be 1-159 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("reply must not be only whitespace");
  }
  if (text !== text.trim()) {
    throw new Error("reply must not have leading or trailing whitespace");
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("reply must be a single line");
  }
  // No control characters (allow nothing below U+0020 except none at all).
  if (/[\u0000-\u001F\u007F]/.test(text)) {
    throw new Error("reply must not contain control characters");
  }
}

validate(REPLY);
mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, REPLY, "utf8");
console.log(`Wrote ${REPLY.length} characters to ${OUTPUT_PATH}`);
