export function level1(leftList: number[], rightList: number[]) {
	// Sort the lists in ascending order
	leftList.sort((a, b) => a - b);
	rightList.sort((a, b) => a - b);

	// Calculate the absolute difference between each pair of numbers
	const diffList = [];
	for (let i = 0; i < leftList.length; i++) {
		const diff = Math.abs(leftList[i] - rightList[i]);
		diffList.push(diff);
	}

	// Return the sum of the differences
	return diffList.reduce((acc, diff) => acc + diff, 0);
}
