<script>
	import { enhance } from '$app/forms';
	import { supabase } from '$lib/subabaseClient';
	import { onMount } from 'svelte';
	import Modal from './Modal.svelte';

	/** @type {{ user: { avatar_url: string, full_name: string, description: string }, event: { title: string, id: string }}} */
	export let request;
	console.log(request);
	let showModal = false;
	let effect = false;
	let avatar = '';
	onMount(async () => {
		let { data } = await supabase.storage
			.from('avatars')
			.createSignedUrl(request.user.avatar_url, 600);
		avatar = data?.signedUrl || '';
	});

	/** @type {import('$app/forms').SubmitFunction} */
	const accept = ({ data }) => {
		data.set('id', request.event.id);

		return async ({ result: { status }, update }) => {
			await update();
			if (status && status < 400) {
				effect = true;
				setTimeout(() => {
					effect = false;
				}, 1000);
			}
		};
	};

	/** @type {import('$app/forms').SubmitFunction} */
	const reject = ({ data }) => {
		data.set('id', request.event.id);

		return async ({ result: { status }, update }) => {
			await update();
			if (status && status < 400) {
				effect = true;
				setTimeout(() => {
					effect = false;
				}, 1000);
			}
		};
	};
</script>

<!-- {#if showModal}
	<Modal {request} on:close={() => (showModal = false)} />
{/if} -->
<div class="relative p-4 lg:w-1/2" on:keypress on:click={() => (showModal = true)}>
	<div
		class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left bg-white/5 rounded"
	>
		<img
			alt="team"
			class="flex-shrink-0 ml-4 rounded-lg w-40 h-40 object-cover object-center sm:mb-0 mb-4"
			src={avatar}
		/>
		<div class="flex-grow sm:pr-8 sm:pl-8 flex justify-between flex-col h-full py-4">
			<div>
				<h2 class="title-font font-medium text-lg text-white">
					{request?.user?.full_name ? request.user.full_name : ''}
				</h2>
				<h3 class="text-gray-500 mb-3">{request?.user.date_of_birth}</h3>
				<p class="mb-4">
					{request?.user.description}
				</p>
			</div>
			<span class="inline-flex">
				<a href={request.user.facebook} class="text-gray-500">
					<svg
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="w-5 h-5"
						viewBox="0 0 24 24"
					>
						<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
					</svg>
				</a>
				<a href={request.user.instagram} class="ml-2 text-gray-500">
					<svg
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="w-5 h-5"
						viewBox="0 0 24 24"
					>
						<path
							d="M16.65 7.2H16.66M8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20ZM15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12Z"
						/>
					</svg>
				</a>
				<div class="ml-auto">{request?.event?.title}</div>
			</span>
		</div>
	</div>
	<form method="POST" action="?/accept" use:enhance={accept}>
		<button
			class={'absolute right-10 bottom-[-15px] ml-4 border-0 py-2 px-6 focus:outline-none rounded bg-red-500 text-white cursor-pointer hover:bg-red-600'}
			>Accept</button
		>
	</form>
	<form method="POST" action="?/reject" use:enhance={reject}>
		<button
			class={'absolute right-[150px] bottom-[-15px] ml-4 border-0 py-2 px-6 focus:outline-none rounded bg-gray-700 text-white cursor-pointer hover:bg-gray-600'}
			>Decline</button
		>
	</form>
</div>
