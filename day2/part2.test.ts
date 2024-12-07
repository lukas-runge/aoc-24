import { assertEquals } from "jsr:@std/assert";
import { level2 } from "./part2.ts";

Deno.test("level2", () => {
	const reports = [[7, 6, 4, 2, 1], [1, 2, 7, 8, 9], [9, 7, 6, 2, 1], [1, 3, 2, 4, 5], [
		8,
		6,
		4,
		4,
		1,
	], [1, 3, 6, 7, 9]];
	const safeReportsAmount = level2(reports);
	assertEquals(safeReportsAmount, 4);
});
