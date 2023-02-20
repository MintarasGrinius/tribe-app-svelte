import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	let { data: requests, error } = await locals.sb
		.from('requests')
		.select(
			'user (full_name, avatar_url, instagram, date_of_birth, facebook, description), event (title, id)'
		);

	return { requests };
};
