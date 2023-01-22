<script>
	import { enhance } from '$app/forms';
	import Popover from 'svelte-easy-popover';

	/** @type {import('pocketbase').Record} */
	export let event;
	let referenceElement;
	let effect = false;

	/** @type {import('$app/forms').SubmitFunction} */
	const likeEvent = ({ data, cancel }) => {
		data.set('event', event.id);
		event.liked && cancel();
		return async ({ result: { status }, update }) => {
			await update();
			if (status && status < 400) {
				effect = true;
				setTimeout(() => {
					effect = false;
				}, 1200);
			}
		};
	};
</script>

<form class="ml-auto" method="POST" action="?/like" use:enhance={likeEvent}>
	<button
		bind:this={referenceElement}
		class={`rounded-full w-10 h-10 p-0 border-0 inline-flex items-center justify-center ${
			event.liked
				? 'text-gray-500 bg-gray-800 cursor-default'
				: 'bg-red-500 text-red-300 cursor-pointer animate-pulse'
		} ${effect && 'animate-wiggle'}
		`}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			class="w-5 h-5 "
			viewBox="0 0 24 24"
			><path
				fill="currentColor"
				d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"
			/></svg
		>
	</button>
</form>

<Popover triggerEvents={['hover']} {referenceElement} placement="bottom" spaceAway={5}>
	<div
		class={`border border-black border-solid rounded py-1 px-3 bg-neutral-600/25 ${
			!event.liked && 'hidden'
		}`}
	>
		Event already liked!
	</div>
</Popover>
