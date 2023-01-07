import { pb } from './../lib/pocketbase';
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (({ locals }) => {
	//	check to see if the user is authenticated
	// console.log('pb.authStore', locals.pb.authStore.isValid);
	// if (locals.pb.authStore.isValid) {
	// 	//	if not, redirect them to "/login"
	// 	throw redirect(303, '/dashboard');
	// }
}) satisfies PageLoad;
