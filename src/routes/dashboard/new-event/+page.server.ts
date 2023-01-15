/** @type {import('./$types').Actions} */
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ locals, request }) => {
		const data = await request.formData();
		data.set('owner', locals?.user ? locals?.user.id : '');
		const { title, description, location, date, type, theme, photo } = Object.fromEntries([
			...data
		]) as {
			title: string;
			description: string;
			location: string;
			date: string;
			type: string;
			theme: string;
			photo: any;
		};

		try {
			await locals.pb.collection('events').create(data);
		} catch (error: any) {
			const { data } = error.data;
			return fail(400, {
				title: { message: data?.email?.message, value: title },
				description: { message: data?.email?.message, value: description },
				location: { message: data?.email?.message, value: location },
				date: { message: data?.email?.message, value: date },
				type: { message: data?.email?.message, value: type },
				theme: { message: data?.email?.message, value: theme },
				photo: { message: data?.email?.message }
			});
		}

		throw redirect(303, '/dashboard');
	}
};
