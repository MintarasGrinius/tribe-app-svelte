import type { PageLoad } from './$types';

export const load = (({ params }) => {
	//	check to see if the user is authenticated
	// if (!pb.authStore.isValid) {
	// 	//	if not, redirect them to "/login"
	// 	throw redirect(303, '/');
	// }
	// var a = new Array(60).fill('test');
	// var arrays = [],
	// 	size = 6;
	// for (let i = 0; i < a.length; i += size) arrays.push(a.slice(i, i + size));
	// console.log(arrays);
	// return {
	// 	events: arrays
	// };
}) satisfies PageLoad;
