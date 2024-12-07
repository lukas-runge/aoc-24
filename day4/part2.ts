function isMASOrSAM(diagonal: string[]): boolean {
	// Check if the diagonal forms 'MAS' or 'SAM'
	const word = diagonal.join("");
	return word === "MAS" || word === "SAM";
}

export function level2(puzzle: string[][]): number {
	let xmasCount = 0;

	const rows = puzzle.length;
	const cols = puzzle[0].length;

	// Iterate through the puzzle grid, excluding borders
	for (let i = 1; i < rows - 1; i++) {
		for (let j = 1; j < cols - 1; j++) {
			// Check if the current cell is 'A'
			if (puzzle[i][j] !== "A") continue;

			// Get the characters from the four diagonal neighbors
			const topLeft = puzzle[i - 1][j - 1];
			const topRight = puzzle[i - 1][j + 1];
			const bottomLeft = puzzle[i + 1][j - 1];
			const bottomRight = puzzle[i + 1][j + 1];

			// Form the two diagonals with 'A' in the center
			const diagonal1 = [topLeft, "A", bottomRight];
			const diagonal2 = [topRight, "A", bottomLeft];

			// Check if both diagonals form 'MAS' or 'SAM'
			if (isMASOrSAM(diagonal1) && isMASOrSAM(diagonal2)) xmasCount++;
		}
	}

	return xmasCount;
}
