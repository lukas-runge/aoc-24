export function isSafeReport(report: number[]): boolean {
	let isIncreasing = false;
	let isDecreasing = false;
	let isSame = false;
	let isMoreThanThreeApart = false;

	for (let i = 0; i < report.length - 1; i++) {
		if (report[i] < report[i + 1]) {
			isIncreasing = true;
		} else if (report[i] > report[i + 1]) {
			isDecreasing = true;
		} else {
			isSame = true;
		}

		if (Math.abs(report[i] - report[i + 1]) > 3) {
			isMoreThanThreeApart = true;
		}
	}

	const isIncreasingOrDecreasing = (isIncreasing && !isDecreasing) ||
		(isDecreasing && !isIncreasing);
	const isBetweenOneAndThreeApart = !isSame && !isMoreThanThreeApart;

	return isIncreasingOrDecreasing && isBetweenOneAndThreeApart;
}
