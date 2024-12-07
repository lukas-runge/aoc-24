import { fetchInputForDay } from "../helper.ts";
import { level1 } from "./part1.ts";
import { level2 } from "./part2.ts";

const input = await fetchInputForDay(4);

const puzzle: string[][] = [];

for (const line of input.trim().split("\n")) {
	puzzle.push(line.split(""));
}

console.log("--- PART 1 ---");
let xmasAmount = level1(puzzle);
console.log(`XMAS occurs ${xmasAmount} times`);
// console.log(await submitAnswer(4, 1, safeReportsAmount.toString()))
console.log();

console.log("--- PART 2 ---");
xmasAmount = level2(puzzle);
console.log(`XMAS occurs ${xmasAmount} times`);
// console.log(await submitAnswer(4, 2, safeReportsAmount.toString()))
console.log();
