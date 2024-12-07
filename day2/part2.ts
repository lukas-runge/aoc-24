import { isSafeReport } from "./isSafeReport.ts";

export function level2(reports: number[][]) {
	let safeReportsAmount = 0;

	for (const report of reports) {
		for (let i = 0; i < report.length; i++) {
			const newReport = [...report];
			newReport.splice(i, 1);
			if (isSafeReport(newReport)) {
				safeReportsAmount++;
				break;
			}
		}
	}

	return safeReportsAmount;
}
