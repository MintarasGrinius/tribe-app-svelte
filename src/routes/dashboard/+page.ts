import type { PageLoad } from './$types';

export const load = (({ params }) => {
	return {
		events: new Array(9).fill('')
	};
}) satisfies PageLoad;
