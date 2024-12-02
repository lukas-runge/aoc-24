export async function fetchInputForDay(day: number) {
	const inputResponse = await fetch(
		`https://adventofcode.com/2024/day/${day}/input`,
		{
			method: "GET",
			headers: {
				cookie: `session=${Deno.env.get("SESSION_COOKIE")}`,
			},
		},
	);

	if (!inputResponse.ok) {
		throw new Error(`${inputResponse.status} ${inputResponse.statusText}`);
	}

	return await inputResponse.text();
}

export async function submitAnswer(day: number, level: number, answer: string) {
	console.log(`Sending Answer for Day ${day}: ${answer}`);
	const answerResponse = await fetch(
		`https://adventofcode.com/2024/day/${day}/answer`,
		{
			method: "POST",
			headers: {
				cookie: `session=${Deno.env.get("SESSION_COOKIE")}`,
				"content-type": "application/x-www-form-urlencoded",
			},
			body: new URLSearchParams({ level: level.toString(), answer }).toString(),
		},
	);

	if (!answerResponse.ok) {
		throw new Error(`${answerResponse.status} ${answerResponse.statusText}`);
	}

	const response = await answerResponse.text();

	if (response.includes("You don't seem to be solving the right level.")) {
		return "Already solved!";
	}

	return response;
}
