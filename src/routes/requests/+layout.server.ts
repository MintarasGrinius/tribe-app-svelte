import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	let { data: requests, error } = await locals.sb
		.from('requests')
		.select('user (full_name, avatar_url), event (title)');
	console.log(requests, error);

	return {
		requests: requests.map(async (request: Object) => {
			const {
				data: { signedUrl }
			} = await locals.sb.storage.from('avatars').createSignedUrl(request.user.avatar_url, 600);
			return {
				...request,
				avatar: signedUrl
			};
		})
	};
};
