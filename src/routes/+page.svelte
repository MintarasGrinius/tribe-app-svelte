<script>
	import { enhance } from '$app/forms';
	import { redirect } from '@sveltejs/kit';

	/** @type {import('./$types').ActionData} */
	export let form;
	export let data;
</script>

<svelte:head>
	<title>Tribe</title>
	<meta name="description" content="Tribe demo" />
</svelte:head>

<section class="text-gray-400 bg-gray-900 body-font h-screen">
	<div class="container px-5 py-24 mx-auto flex flex-wrap items-center h-screen">
		<div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
			<h1 class="title-font font-medium text-3xl text-white">
				Join us on <b class="text-red-500">trib</b> for fun and connection with friends!
			</h1>
			<p class="leading-relaxed mt-4">
				Come check out our new website! It's a great place to connect with friends and have fun.
				We'd love for you to join us and give it a try.
			</p>
		</div>
		<form
			method="POST"
			class="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
		>
			<h2 class="text-white text-lg font-medium title-font mb-5">Sign In</h2>
			<div class="relative mb-4">
				<label for="full-name" class="leading-7 text-sm text-gray-400">Email</label>
				<input
					value={form?.email ?? 'email@email.co'}
					type="email"
					id="email"
					name="email"
					class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-red-900 rounded border border-gray-600 focus:border-red-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				/>
			</div>
			<div class="relative mb-2">
				<label for="email" class="leading-7 text-sm text-gray-400">Password</label>
				<input
					type="password"
					value="Password01"
					id="password"
					name="password"
					class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-red-900 rounded border border-gray-600 focus:border-red-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				/>
			</div>
			<div class="h-5">
				{#if form?.incorrect}
					<p class="error text-xs">{'The email or password is incorrect'}</p>
				{/if}
				{#if form?.missing}
					<p class="error text-xs">{'Email and password fields are required'}</p>
				{/if}
			</div>
			<button
				type="submit"
				class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
				>Button</button
			>
			<a class="text-xs mt-3 hover:no-underline" href="/register">Register</a>
		</form>
	</div>
</section>

<style>
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
