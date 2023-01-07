/** @type {import('./$types').Actions} */
import { redirect } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ locals, request }) => {
		const formData = await request.formData();
		const data = Object.fromEntries([...formData]) as {
			email: string;
			name: string;
			password: string;
			confirmPassword: string;
		};

		try {
			await locals.pb.collection('users').create(data);
			await locals.pb.collection('users').authWithPassword(data.email, data.password);
		} catch (error) {
			throw error;
		}

		throw redirect(303, '/dashboard');
	}
};
