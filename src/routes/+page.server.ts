import PocketBase from 'pocketbase';
/** @type {import('./$types').Actions} */
import { redirect, fail } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ locals, request }) => {
		const formData = await request.formData();
		const { email, password } = Object.fromEntries([...formData]) as {
			email: string;
			password: string;
		};

		if (!email || !password) return fail(400, { email, missing: true });

		try {
			await locals.pb.collection('users').authWithPassword(email, password);
		} catch {
			return fail(400, { email, incorrect: true });
		}
		throw redirect(303, '/dashboard');
	}
};
