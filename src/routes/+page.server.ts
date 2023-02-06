import { supabase } from './../lib/subabaseClient';
/** @type {import('./$types').Actions} */
import { fail } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';
import { AuthApiError } from '@supabase/supabase-js';

export const actions: Actions = {
	login: async ({ locals, request }) => {
		const formData = await request.formData();
		const { email } = Object.fromEntries([...formData]) as {
			email: string;
		};
		const { error: err } = await locals.sb.auth.signInWithOtp({ email });

		if (err) {
			if (err instanceof AuthApiError) {
				return fail(400, {
					error: err.message
				});
			}
			return fail(500, {
				error: 'Something went wrong. Please try again later.'
			});
		}
	},
	like: async ({ locals, request }) => {
		const formData = await request.formData();
		const { event } = Object.fromEntries([...formData]);

		const { error } = await locals.sb
			.from('likes')
			.insert([{ user: locals.session?.user.id, event: event }]);

		return { success: !error };
	},
	attend: async ({ locals, request }) => {
		const formData = await request.formData();
		const { event } = Object.fromEntries([...formData]);

		const { error } = await locals.sb
			.from('requests')
			.insert([{ user: locals.session?.user.id, event: event }]);

		return { success: !error };
	}
};
