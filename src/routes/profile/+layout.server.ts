export const load = async ({ locals }: { locals: any }) => {
	let { data: profiles } = await locals.sb
		.from('profiles')
		.select('*')
		.eq('id', locals.session?.user.id);

	if (locals.session?.user) {
		return {
			profile: profiles[0]
		};
	}
};
