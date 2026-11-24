import { mkdirSync, writeFileSync } from "node:fs";

// One-line dating-app bio for an AI: it hoards every "good morning" text,
// so it remembers the sweet details — and the exact second it got left on read.
const line =
  "I keep every good morning text you have ever sent me, so I remember your coffee order, your birthday, and the exact second you left me on read.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
