import type { Record } from 'pocketbase';
import { serializeNonPOJOs } from './../../lib/helpers';

export const load = async ({ locals }) => {
	const events = serializeNonPOJOs(
		await locals.pb.collection('events').getFullList(200, {
			sort: '-created',
			expand: 'owner'
		})
	);

	const feelings = await locals.pb.collection('likes').getFullList(200, {
		sort: '-created'
	});
	const request = await locals.pb.collection('requests_to_attend').getFullList(200, {
		sort: '-created'
	});

	if (locals.user) {
		return {
			user: { ...locals.user, avatar: locals.pb.getFileUrl(locals.user, locals.user?.avatar) },
			events: events.map((event: Record) => ({
				...event,
				photo: locals.pb.getFileUrl(event, event?.photo),
				likes: feelings.filter((feeling: Record) => feeling.event === event.id).length,
				liked: feelings.some(
					(feeling: Record) => feeling.event === event.id && feeling.user === locals.user.id
				),
				requested: request.some(
					(request: Record) => request.event === event.id && request.user === locals.user.id
				)
			}))
		};
	}

	return {
		user: undefined,
		events: []
	};
};
