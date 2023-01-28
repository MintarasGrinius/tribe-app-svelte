import { supabase } from './../lib/subabaseClient';
/** @type {import('./$types').Actions} */
import { fail } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';
import { AuthApiError } from '@supabase/supabase-js';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const { email } = Object.fromEntries([...formData]) as {
			email: string;
		};
		const { error: err } = await supabase.auth.signInWithOtp({ email });

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
	}
};
