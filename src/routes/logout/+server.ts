import { pb } from './../../lib/pocketbase';
import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ locals }) => {
	pb.authStore.clear();
	locals.user = undefined;
	document.cookie = '';

	throw redirect(303, '/');
};
