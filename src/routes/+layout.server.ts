import { getServerSession } from '@supabase/auth-helpers-sveltekit';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { serializeNonPOJOs } from './../lib/helpers';
export const load: LayoutServerLoad = async (event) => {
	if (event.locals.user) {
		return {
			user: event.locals.user
		};
	}

	return {
		user: undefined,
		session: await getServerSession(event)
	};
};
