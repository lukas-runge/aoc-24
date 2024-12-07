import { assertEquals } from "jsr:@std/assert";
import { level2 } from "./part2.ts";

Deno.test("level2", () => {
	const string = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`;
	const result = level2(string);
	assertEquals(result, 48);
});
