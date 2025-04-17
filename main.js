import { config } from "dotenv";
import { processText } from "./pipeline/processText.js";
import { readFileSync, writeFileSync } from "fs";

config();

(async () => {
  const input = readFileSync("data/input.txt", "utf-8");
  const output = await processText(input);
  writeFileSync("data/output.txt", output);
  console.log("✅ Output saved to data/output.txt");
})();
