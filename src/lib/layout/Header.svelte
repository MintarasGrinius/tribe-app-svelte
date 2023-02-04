<script>
	import CreateNewButton from './CreateNewButton.svelte';
	import Logo from './Logo.svelte';

	/** @type {import('@supabase/supabase-js').User} */
	export let user;
	/** @type {string} */
	export let avatar;
</script>

<header class="text-gray-400 sticky top-0 bg-gray-900/50 body-font z-10">
	<div
		class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between"
	>
		<a href="/dashboard/profile" class="flex flex-wrap items-center text-base">
			<img src={avatar} class="w-10 h-10 text-white rounded-full mr-4" alt="Avatar" />
			<div>{user?.email}</div>
		</a>
		<Logo />
		<div class="inline-flex lg:justify-end items-center ml-5 lg:ml-0">
			<form action="/logout" method="POST">
				<button class="mr-5 hover:text-white">Log Out</button>
			</form>
			<a href="/" class="hover:text-white mr-5">Events</a>
			<a href="/requests" class="hover:text-white mr-5">Requests</a>
			<CreateNewButton />
		</div>
	</div>
</header>
