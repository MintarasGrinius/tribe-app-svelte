<script lang="ts">
	import { page } from '$app/stores';
	import { currentUser } from '$lib/pocketbase';
	export let user: any;
	console.log('user', user);
</script>

<header class="text-gray-400 sticky top-0 bg-gray-900/50 body-font">
	<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
		<nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
			{#if user}
				<div>{user?.email}</div>
			{/if}
			<a href="/" class="mr-5 hover:text-white">Log In</a>
			<form action="/logout" method="POST">
				<a href="/" class="mr-5 hover:text-white">Log Out</a>
			</form>

			<a href="/dashboard" class="hover:text-white">Events</a>
		</nav>
		<a
			class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0"
			href="/dashboard"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				class="w-10 h-10 text-white p-2 bg-red-500 rounded-full"
				viewBox="0 0 24 24"
			>
				<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
			</svg>
			<span class="ml-3 text-xl xl:block lg:block">tribe</span>
		</a>
		<div>
			{#if $currentUser}
				<a
					href="/dashboard/profile"
					class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
					>Profile
					<svg
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="w-4 h-4 ml-1"
						viewBox="0 0 24 24"
					>
						<path d="M5 12h14M12 5l7 7-7 7" />
					</svg>
				</a>
			{/if}
		</div>
		<div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
			{#if !$page.route.id?.includes('new-event')}
				<a
					href="/dashboard/new-event"
					class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
					>Create new event
					<svg
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="w-4 h-4 ml-1"
						viewBox="0 0 24 24"
					>
						<path d="M5 12h14M12 5l7 7-7 7" />
					</svg>
				</a>
			{/if}
		</div>
	</div>
</header>
