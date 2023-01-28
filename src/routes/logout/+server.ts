import { error, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ locals }) => {
	const { error: err } = await locals.sb.auth.signOut();

	if (err) {
		throw error(500, 'An error occurred while trying to sign out. Please try again.');
	}

	throw redirect(303, '/');
};
