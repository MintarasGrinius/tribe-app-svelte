import { getServerSession } from '@supabase/auth-helpers-sveltekit';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { serializeNonPOJOs } from './../lib/helpers';
export const load: LayoutServerLoad = async (event) => {
	// if (event.locals.user) {
	// 	return {
	// 		user: event.locals.user
	// 	};
	// }

	let {
		data: [{ avatar_url }],
		error
	} = await event.locals.sb
		.from('profiles')
		.select('avatar_url')
		.eq('id', event.locals.session?.user.id);
	console.log(avatar_url);
	const {
		data: { publicUrl }
	} = await event.locals.sb.storage.from('avatars').getPublicUrl(avatar_url);
	console.log(publicUrl);
	// console.log(data);
	return {
		avatar_url: publicUrl,
		session: await getServerSession(event)
	};
};
