/** @type {import('./$types').Actions} */
import { redirect, fail } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	like: async ({ locals, request }) => {
		const data = await request.formData();
		locals.user && data.set('user', locals?.user.id);

		try {
			await locals.pb.collection('likes').create(data);
		} catch {
			return fail(400);
		}
	}
};
