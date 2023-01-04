export function sliceIntoChunks(arr: any[]) {
	const res = [];
	for (let i = 0; i < arr.length; i += 6) {
		const chunk = arr.slice(i, i + 6);
		res.push(chunk);
	}
	return res;
}
