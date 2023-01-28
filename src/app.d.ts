import { supabase } from './lib/subabaseClient';
import { PocketBase } from 'pocketbase';
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global {
	declare namespace App {
		// interface Error {}
		interface Locals {
			sb: import('@supabase/auth-helpers-sveltekit/dist/types').SupabaseClient;
			session: import('@supabase/supabase-js').Session | null;
		}
		interface PageData {
			session: import('@supabase/supabase-js').Session | null;
		}
		// interface Platform {}
	}
}
