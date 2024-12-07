export function level1(string: string) {
	const regex = /mul\((\d{1,3}),(\d{1,3})\)/g;

	const matches = string.matchAll(regex);

	let sum = 0;
	for (const match of matches) {
		const x = parseInt(match[1]);
		const y = parseInt(match[2]);
		sum += x * y;
	}

	return sum;
}