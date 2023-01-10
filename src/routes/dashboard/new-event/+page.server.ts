import { fail, redirect } from '@sveltejs/kit';
/** @type {import('./$types').Actions} */
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ locals, request }) => {
		const data = await request.formData();
		const title = data.get('title');
		const description = data.get('description');
		const location = data.get('location');
		const date = data.get('date');
		const type = data.get('type');
		const theme = data.get('theme');
		const user = data.get('user');

		try {
			const record = await locals.pb.collection('events').create({
				title,
				description,
				location,
				date,
				type,
				theme,
				user
			});
		} catch (error: any) {
			const { data } = error.data;
			return fail(400, {
				title: { message: data?.email?.message, value: data.title },
				description: { message: data?.email?.message, value: data.description },
				location: { message: data?.email?.message, value: data.location },
				date: { message: data?.email?.message, value: data.date },
				type: { message: data?.email?.message, value: data.type },
				theme: { message: data?.email?.message, value: data.theme },
				user: { message: data?.email?.message, value: data.user }
			});
		}

		throw redirect(303, '/dashboard');
	}
};
