/** @type {import('./$types').Actions} */
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ locals, request }) => {
		const dataToUse = await request.formData();
		dataToUse.set('user', locals?.user ? locals?.user.id : '');
		const { phone_number, date_of_birth, instagram, facebook, description } = Object.fromEntries([
			...dataToUse
		]) as {
			phone_number: string;
			date_of_birth: string;
			instagram: string;
			facebook: string;
			description: string;
		};

		try {
			await locals.pb.collection('user_details').create(dataToUse);
		} catch (error: any) {
			const { data } = error.data;
			console.log('datadatadatadatadatadatadatadata', data);
			return data;
		}
	}
};
