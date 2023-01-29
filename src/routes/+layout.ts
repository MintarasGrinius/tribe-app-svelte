import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { page } from '$app/stores';

export const load: LayoutLoad = async (event) => {
	const { session } = await getSupabase(event);

	return { session: session, avatar_url: event.data.avatar_url };
};
