import { getServerSession } from '@supabase/auth-helpers-sveltekit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	const session = await getServerSession(event);
	if (event.locals.session?.user.id) {
		try {
			let {
				data: [{ avatar_url }]
			} = await event.locals.sb
				.from('profiles')
				.select('avatar_url')
				.eq('id', event.locals.session?.user.id);

			const {
				data: { publicUrl }
			} = await event.locals.sb.storage.from('avatars').getPublicUrl(avatar_url);

			let { data: events } = await event.locals.sb
				.from('events')
				.select(
					'date,description,id,location,owner,profiles (avatar_url,username),photos,theme,title,type'
				);

			const { data: signedUrls } = await event.locals.sb.storage
				.from('event-photos')
				.createSignedUrls(
					events.map(({ photos }: { photos: string }) => photos),
					60
				);

			return {
				avatar_url: publicUrl,
				session: session,
				events: events.map((a: Object, index: number) => {
					return {
						...a,
						photos: signedUrls[index].signedUrl
					};
				})
			};
		} catch (error) {
			return {
				events: [],
				avatar_url: null,
				session: session
			};
		}
	} else {
		return {
			events: [],
			avatar_url: null,
			session: session
		};
	}
};
