/** @type {import('./$types').Actions} */
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	accept: async ({ locals, request }) => {
		const formData = await request.formData();
		const { id } = Object.fromEntries([...formData]);

		const a = await locals.sb.from('requests').update({ confirmed: true }).eq('event', id);
		console.log('a :', a);

		return { success: !a.error };
	},
	reject: async ({ locals, request }) => {
		const formData = await request.formData();
		const { id } = Object.fromEntries([...formData]);

		const { data, error } = await locals.sb
			.from('requests')
			.update({ confirmed: false })
			.eq('event', id);

		console.log('data, error :', data, error);
		return { success: !error };
	}
};
