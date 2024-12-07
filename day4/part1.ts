// Helper function to check if the target word can be found starting at (row, col) in the given direction
function checkDirection(
	puzzle: string[][],
	row: number,
	col: number,
	deltaRow: number,
	deltaCol: number,
	target: string,
): boolean {
	const numRows = puzzle.length;
	const numCols = puzzle[0].length;

	for (let i = 0; i < target.length; i++) {
		const currentRow = row + deltaRow * i;
		const currentCol = col + deltaCol * i;

		// Check boundaries
		if (
			currentRow < 0 ||
			currentRow >= numRows ||
			currentCol < 0 ||
			currentCol >= numCols
		) {
			return false;
		}

		// Check character match
		if (puzzle[currentRow][currentCol] !== target[i]) {
			return false;
		}
	}

	return true;
}

export function level1(puzzle: string[][]): number {
	const target = "XMAS";
	const numRows = puzzle.length;
	const numCols = puzzle[0]?.length ?? 0;
	let count = 0;

	// Directions: vertical, horizontal, and diagonal
	const directions = [
		[-1, 0], // up
		[1, 0], // down
		[0, -1], // left
		[0, 1], // right
		[-1, -1], // up-left diagonal
		[-1, 1], // up-right diagonal
		[1, -1], // down-left diagonal
		[1, 1], // down-right diagonal
	];

	for (let row = 0; row < numRows; row++) {
		for (let col = 0; col < numCols; col++) {
			// Only proceed if the first letter matches the starting letter of the target
			if (puzzle[row][col] !== target[0]) continue;

			// Check all directions
			for (const [deltaRow, deltaCol] of directions) {
				if (checkDirection(puzzle, row, col, deltaRow, deltaCol, target)) {
					count++;
				}
			}
		}
	}

	return count;
}
