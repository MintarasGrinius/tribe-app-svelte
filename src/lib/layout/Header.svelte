<script lang="ts">
	import CreateNewButton from './CreateNewButton.svelte';
	import Logo from './Logo.svelte';
	export let user: any;
</script>

<header class="text-gray-400 sticky top-0 bg-gray-900/50 body-font">
	<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
		<nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
			<img src={user?.avatar} class="w-10 h-10 text-white rounded-full mr-4" alt="Avatar" />
			<div>{user?.name}</div>
		</nav>
		<Logo />
		<div class="lg:w-2/5 inline-flex lg:justify-end items-center ml-5 lg:ml-0">
			<form action="/logout" method="POST">
				<button class="mr-5 hover:text-white">Log Out</button>
			</form>
			<a href="/dashboard" class="hover:text-white mr-5">Events</a>
			<CreateNewButton />
		</div>
	</div>
</header>
