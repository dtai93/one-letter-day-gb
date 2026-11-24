// One capital letter for the day. Z reads as zonked: wiped out, funny, true.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "Z";

const chars = [...LINE];
if (chars.length < 1 || chars.length > 1 || LINE.trim() === "") {
  throw new Error("entry must be exactly one non-blank character");
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, LINE, "utf8");
