<script>
	import { enhance } from '$app/forms';
	import { redirect } from '@sveltejs/kit';
	/** @type {import('./$types').ActionData} */
	export let form;
	if (form?.success) {
		console.log(form?.success);

		redirect(307, '/dashboard');
	}
</script>

<svelte:head>
	<title>Tribe</title>
	<meta name="description" content="Tribe demo" />
</svelte:head>

<section>
	<h1>tribe</h1>

	<form class="login-container" method="POST">
		<input value="email@email.com" name="email" type="email" required />
		<input value="Password01" name="password" type="password" required />
		<button type="submit">Submit</button>
		{#if form?.message}
			<p class="error">{form?.message}</p>
		{/if}
	</form>
</section>

<style>
	.error {
		color: red;
		margin: 0;
	}
	.login-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
