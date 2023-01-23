import { serializeNonPOJOs } from '../../../lib/helpers';

export const load = async ({ locals }: { locals: any }) => {
	// console.log(
	// 	await locals.pb?.collection('user_details').getList(1, 50, {
	// 		filter: 'user == 1altyecqifuwvkb'
	// 	})
	// );
	try {
		const user_detail = serializeNonPOJOs(
			await locals.pb?.collection('user_details')?.getFirstListItem(`user="${locals.user.id}"`, {
				// expand: 'relField1,relField2.subRelField'
			})
		);
		if (locals.user) {
			return {
				user_detail
			};
		}
	} catch (error) {
		return {};
	}
};
