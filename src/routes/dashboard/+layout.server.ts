import type { Record } from 'pocketbase';
import { serializeNonPOJOs, sliceToChunks } from './../../lib/helpers';

export const load = async ({ locals }) => {
	const events = serializeNonPOJOs(
		await locals.pb.collection('events').getFullList(200 /* batch size */, {
			sort: '-created'
		})
	);

	if (locals.user) {
		return {
			user: locals.user,
			events: sliceToChunks(
				events.map((event: Record) => ({
					...event,
					photo: locals.pb.getFileUrl(event, event?.photo)
				})),
				6
			)
		};
	}

	return {
		user: undefined,
		events: []
	};
};
