import { serializeNonPOJOs } from './../../../lib/helpers';

export const load = async ({ locals }: { locals: any }) => {
	const requests = serializeNonPOJOs(
		await locals.pb.collection('requests_to_attend').getFullList(200 /* batch size */, {
			sort: '-created',
			expand: 'event,user'
		})
	);

	if (locals.user) {
		return {
			requests: requests.map((request: any) => ({
				...request,
				expand: {
					...request?.expand,
					user: {
						...request?.expand?.user,
						avatar: locals.pb.getFileUrl(request?.expand.user, request?.expand.user?.avatar)
					}
				}
			}))
		};
	}

	return {
		user: undefined,
		events: []
	};
};
