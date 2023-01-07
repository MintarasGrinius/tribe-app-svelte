import { pb } from './../../lib/pocketbase';
import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ locals }) => {
	locals.pb.authStore.clear();
	locals.user = undefined;
	throw redirect(303, '/');
};
