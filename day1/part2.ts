export function level2(leftList: number[], rightList: number[]) {
	const scoreList = [];

	for (const id of leftList) {
		const countInRightList = rightList.filter((x) => x === id).length;
		scoreList.push(id * countInRightList);
	}

	return scoreList.reduce((acc, score) => acc + score, 0);
}
