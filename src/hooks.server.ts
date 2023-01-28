import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { env } from '$env/dynamic/public';
import { serializeNonPOJOs } from './lib/helpers';
import { createClient } from '@supabase/supabase-js';
import './lib/subabaseClient';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = (async ({ event, resolve }) => {
	const supabase = createClient(env.PUBLIC_SUPABASE_URL, env.PUBLIC_SUPABASE_ANON_KEY);
	const { session, supabaseClient } = await getSupabase(event);

	event.locals.sb = supabaseClient;
	event.locals.session = session;

	return resolve(event);
}) satisfies Handle;
