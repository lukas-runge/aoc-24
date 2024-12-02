import { assertEquals } from "jsr:@std/assert";
import { level2 } from "./part2.ts";

Deno.test("level2", () => {
	const leftList = [3, 4, 2, 1, 3, 3];
	const rightList = [4, 3, 5, 3, 9, 3];
	const score = level2(leftList, rightList);
	assertEquals(score, 31);
});
