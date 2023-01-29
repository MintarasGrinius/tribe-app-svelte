import { AuthApiError } from '@supabase/supabase-js';
/** @type {import('./$types').Actions} */
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ locals, request }) => {
		const data = await request.formData();
		const { photos } = Object.fromEntries([...data]) as {
			photos: File;
		};

		console.log('photo', photos);
		const fileExt = photos.name.split('.').pop();
		const filePath = `${Math.random()}.${fileExt}`;

		try {
			const { data: photoData, error: photoUploadError } = await locals.sb.storage
				.from('event-photos')
				.upload(filePath, photos);

			if (photoUploadError) {
				if (photoUploadError instanceof AuthApiError) {
					return fail(400, {
						error: photoUploadError.message
					});
				}
				return fail(500, {
					error: 'Something went wrong. Please try again later.'
				});
			}

			const { error: createEventError } = await locals.sb.from('events').insert([
				{
					...Object.fromEntries([...data]),
					owner: locals.session?.user?.id,
					photos: photoData.path
				}
			]);

			if (createEventError) {
				if (createEventError instanceof AuthApiError) {
					return fail(400, {
						error: createEventError.message
					});
				}
				return fail(500, {
					error: 'Something went wrong. Please try again later.'
				});
			}
		} catch (error: any) {
			return fail(500, {
				error: 'Something went wrong. Please try again later.'
			});
		}

		throw redirect(303, '/dashboard');
	}
};
