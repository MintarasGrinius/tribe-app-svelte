/** @type {import('./$types').Actions} */
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const title = data.get('title');
		const date = data.get('date');
		const description = data.get('description');
		console.log(title, date, description);
		const event = await prisma.event.create({
			data: {
				title: title as string,
				date: date as string,
				description: description as string,
				author: {
					connect: {
						id: '63ade73015b9ec53d43ec291'
					}
				}
			}
		});
	}
};
