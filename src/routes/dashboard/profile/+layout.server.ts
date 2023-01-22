import { serializeNonPOJOs } from '../../../lib/helpers';

export const load = async ({ locals }: { locals: any }) => {
	const user_detail = serializeNonPOJOs(
		await locals.pb.collection('user_details').getFirstListItem('id="xwfr63tu9mjiafh"')
	);
	if (locals.user) {
		return {
			user_detail
		};
	}
};
