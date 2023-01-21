import type { Record } from 'pocketbase';
import { serializeNonPOJOs } from './../../lib/helpers';

export const load = async ({ locals }) => {
	const events = serializeNonPOJOs(
		await locals.pb.collection('events').getFullList(200 /* batch size */, {
			sort: '-created',
			expand: 'owner'
		})
	);

	if (locals.user) {
		return {
			user: { ...locals.user, avatar: locals.pb.getFileUrl(locals.user, locals.user?.avatar) },
			events: events.map((event: Record) => ({
				...event,
				photo: locals.pb.getFileUrl(event, event?.photo)
			}))
		};
	}

	return {
		user: undefined,
		events: []
	};
};
