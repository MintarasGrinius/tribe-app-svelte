<script>
	import { enhance } from '$app/forms';
	import { PrismaClient } from '@prisma/client';

	let email = 'email@email.com';
	let password = 'Password01';
	let name = 'Mintaras Grinius';
	let phone = '+2348123456789';
	let age = '27';

	const handleSubmit = async () => {
		fetch('/users', {
			method: 'POST',
			body: JSON.stringify({
				password,
				email,
				phone,
				name,
				age
			})
		})
			.then((res) => res.json())
			.then((res) => console.log(res))
			.catch(() => alert('Failed to submit'));
	};
</script>

<form
	method="POST"
	use:enhance={({ form, data, cancel }) => {
		// `form` is the `<form>` element
		// `data` is its `FormData` object response from action
		// `cancel()` will prevent the submission

		return async ({ result }) => {
			console.log(result);
			// `result` is an `ActionResult` object
		};
	}}
>
	<input value="email@email.com" name="email" type="email" required />
	<input value="Password01" name="password" type="password" required />
	<input value="Mintaras Grinius" name="name" required />
	<input value="+2348123456789" name="phone" type="tel" required />
	<input value={27} name="age" type="number" required />

	<button type="submit">Submit</button>
</form>
