import type { PageLoad } from './$types';

export const load = (({ params }) => {
	return {
		events: []
	};
}) satisfies PageLoad;
