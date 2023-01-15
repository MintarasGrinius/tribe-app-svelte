import type { Record } from 'pocketbase';

export const serializeNonPOJOs = (obj: Object) => {
	return JSON.parse(JSON.stringify(obj));
};

export const sliceToChunks = (arr: Record[], chunkSize: number) => {
	const chunks = [];
	for (let i = 0; i < arr.length; i += chunkSize) chunks.push(arr.slice(i, i + chunkSize));
	return chunks;
};
