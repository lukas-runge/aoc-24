import { assertEquals } from "jsr:@std/assert";
import { level1 } from "./part1.ts";

Deno.test("level1", () => {
	const string = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;
	const result = level1(string);
	assertEquals(result, 161);
});
