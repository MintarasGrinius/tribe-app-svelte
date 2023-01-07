import { serializeNonPOJOs } from './../../lib/helpers';
export const load = ({ locals }) => {
	console.log('layout', locals);
	console.log('locals.user', locals.user);
	return {
		user: serializeNonPOJOs(locals.user)
	};
};
