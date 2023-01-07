import { redirect } from '@sveltejs/kit';
import { pb, currentUser } from './../../lib/pocketbase';
import type { PageLoad } from './$types';

export const load = (({ params }) => {
	console.log('localslocalslocalslocalslocals', currentUser);
	//	check to see if the user is authenticated
	// if (!pb.authStore.isValid) {
	// 	//	if not, redirect them to "/login"
	// 	throw redirect(303, '/');
	// }
	return {
		events: new Array(9).fill('')
	};
}) satisfies PageLoad;
