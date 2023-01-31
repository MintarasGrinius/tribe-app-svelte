import { serializeNonPOJOs } from './../../../lib/helpers';
/** @type {import('./$types').Actions} */
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ locals, request }) => {
		const dataToUse = await request.formData();
		const { full_name, phone_number, date_of_birth, instagram, facebook, description } =
			Object.fromEntries([...dataToUse]) as {
				full_name: string;
				phone_number: string;
				date_of_birth: string;
				instagram: string;
				facebook: string;
				description: string;
			};
		try {
			await locals.sb
				.from('profiles')
				.update({
					full_name,
					phone_number,
					date_of_birth,
					instagram,
					facebook,
					description
				})
				.eq('id', locals.session?.user.id);
			return { success: true };
		} catch (error: any) {
			const { data } = error.data;
			return { success: false, data };
		}
	}
};
