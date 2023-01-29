/** @type {import('./$types').Actions} */
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ locals, request }) => {
		const data = await request.formData();
		// data.set('owner', locals?.user ? locals?.user.id : '');
		const { title, description, location, date, type, theme, photos } = Object.fromEntries([
			...data
		]) as {
			title: string;
			description: string;
			location: string;
			date: string;
			type: string;
			theme: string;
			photos: File;
		};

		console.log('photo', photos);
		const fileExt = photos.name.split('.').pop();
		const filePath = `${Math.random()}.${fileExt}`;

		let { data: photoData, error } = await locals.sb.storage
			.from('event-photos')
			.upload(filePath, photos);
		console.log('photoData', photoData);

		try {
			const { data: responseData, error } = await locals.sb.from('events').insert([
				{
					...Object.fromEntries([...data]),
					owner: locals.session?.user?.id,
					photos: photoData.path
				}
			]);
			console.log('responseData', responseData, error);

			// await locals.pb.collection('events').create(data);
		} catch (error: any) {
			console.log('error', error);
			// const { data } = error.data;
			// return fail(400, {
			// 	title: { message: data?.title?.message, value: title },
			// 	description: { message: data?.description?.message, value: description },
			// 	location: { message: data?.location?.message, value: location },
			// 	date: { message: data?.date?.message, value: date },
			// 	type: { message: data?.type?.message, value: type },
			// 	theme: { message: data?.theme?.message, value: theme },
			// 	photo: {
			// 		message: data?.photo?.message.includes('The following mime types are only allowed')
			// 			? 'Missing required value.'
			// 			: data?.photo?.message
			// 	}
			// });
		}

		throw redirect(303, '/dashboard');
	}
};
