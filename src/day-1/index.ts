import { readFile } from "node:fs/promises";
import { join } from "node:path";

const path = join(import.meta.dir, "./input.txt");
const input = await readFile(path, { encoding: "utf-8" });

console.log(input);
