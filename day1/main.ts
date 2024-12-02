import { fetchInputForDay } from "../helper.ts";
import { level1 } from "./part1.ts";
import { level2 } from "./part2.ts";

const input = await fetchInputForDay(1);

const leftList = [];
const rightList = [];

for (const line of input.trim().split("\n")) {
	const pair = line.split("   ").map(Number);

	leftList.push(pair[0]);
	rightList.push(pair[1]);
}

console.log("--- PART 1 ---");
const sum = level1(leftList, rightList);
console.log(`Sum of differences: ${sum}`);
// console.log(await submitAnswer(1, 1, sum.toString()))
console.log();

console.log("--- PART 2 ---");
const score = level2(leftList, rightList);
console.log(`Similarity Score: ${score}`);
// console.log(await submitAnswer(1, 2, score.toString()));
console.log();
