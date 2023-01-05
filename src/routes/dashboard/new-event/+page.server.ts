/** @type {import('./$types').Actions} */
import { PrismaClient } from '@prisma/client';
import { fail, redirect, type Actions } from '@sveltejs/kit';

const prisma = new PrismaClient();

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const title = data.get('title');
		const date = data.get('date');
		const description = data.get('description');
		console.log(title, date, description);
		// const user = await prisma.user.findFirst({
		// 	where: {
		// 		title: title as string,
		// 		date: date as string
		// 		description: description as string
		// 	}
		// });

		// if (!user) {
		// 	return fail(400, { message: 'Invalid email or password' });
		// }

		// throw redirect(303, '/dashboard');
	}
};
