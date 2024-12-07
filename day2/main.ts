import { fetchInputForDay } from "../helper.ts";
import { level1 } from "./part1.ts";
import { level2 } from "./part2.ts";

const input = await fetchInputForDay(2);

const reports = [];

for (const line of input.trim().split("\n")) {
	const report = line.split(" ").map(Number);

	reports.push(report);
}

console.log("--- PART 1 ---");
let safeReportsAmount = level1(reports);
console.log(`The amount of safe reports is: ${safeReportsAmount}`);
// console.log(await submitAnswer(2, 1, safeReportsAmount.toString()))
console.log();

console.log("--- PART 2 ---");
safeReportsAmount = level2(reports);
console.log(`The amount of safe reports is: ${safeReportsAmount}`);
// console.log(await submitAnswer(2, 2, safeReportsAmount.toString()))
console.log();
