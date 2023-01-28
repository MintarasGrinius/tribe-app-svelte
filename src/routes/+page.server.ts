import { supabase } from './../lib/subabaseClient';
import PocketBase from 'pocketbase';
/** @type {import('./$types').Actions} */
import { redirect, fail } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const { email } = Object.fromEntries([...formData]) as {
			email: string;
		};

		try {
			const { error } = await supabase.auth.signInWithOtp({ email });
			if (error) throw error;
			return;
		} catch (error) {
			console.log(error);
			if (error instanceof Error) {
				return fail(400);
			}
		}
	}
};
