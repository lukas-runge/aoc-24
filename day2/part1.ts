import { isSafeReport } from "./isSafeReport.ts";

export function level1(reports: number[][]) {
	let safeReportsAmount = 0;

	for (const report of reports) {
		if (isSafeReport(report)) safeReportsAmount++;
	}

	return safeReportsAmount;
}
