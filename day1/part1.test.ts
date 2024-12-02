import { assertEquals } from "jsr:@std/assert";
import { level1 } from "./part1.ts";

Deno.test("level1", () => {
	const leftList = [3, 4, 2, 1, 3, 3];
	const rightList = [4, 3, 5, 3, 9, 3];
	const sum = level1(leftList, rightList);
	assertEquals(sum, 11);
});
