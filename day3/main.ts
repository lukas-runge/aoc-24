import { fetchInputForDay } from "../helper.ts";
import { level1 } from "./part1.ts";
import { level2 } from "./part2.ts";

const input = await fetchInputForDay(3);

const string = input.trim();

console.log("--- PART 1 ---");
let result = level1(string);
console.log(`The result is: ${result}`);
// console.log(await submitAnswer(3, 1, safeReportsAmount.toString()))
console.log();

console.log("--- PART 2 ---");
result = level2(string);
console.log(`The result is: ${result}`);
// console.log(await submitAnswer(3, 2, safeReportsAmount.toString()))
console.log();
