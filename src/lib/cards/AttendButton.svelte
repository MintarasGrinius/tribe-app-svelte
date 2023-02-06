<script>
	import { enhance } from '$app/forms';
	import Popover from 'svelte-easy-popover';
	/** @type {import('pocketbase').Record} */
	export let event;
	/** @type {boolean} */
	export let requested;
	let referenceElement;
	let effect = false;

	/** @type {import('$app/forms').SubmitFunction} */
	const attendEvent = ({ data, cancel }) => {
		data.set('event', event.id);
		if (requested) cancel();
		return async ({ result: { status }, update }) => {
			await update();
			if (status && status < 400) {
				effect = true;
				setTimeout(() => {
					effect = false;
					requested = true;
				}, 1000);
			}
		};
	};
</script>

<form method="POST" action="?/attend" use:enhance={attendEvent}>
	<button
		bind:this={referenceElement}
		class={`flex ml-4 border-0 py-2 px-6 focus:outline-none rounded ${
			requested
				? 'text-gray-500 bg-gray-800 cursor-default'
				: 'bg-red-500 text-white cursor-pointer hover:bg-red-600'
		} ${effect && 'animate-ping'}`}>{requested ? 'Already requested' : 'I wish to attend!'}</button
	>
</form>

<Popover triggerEvents={['hover']} {referenceElement} placement="bottom" spaceAway={5}>
	<div
		class={`border border-black border-solid rounded py-1 px-3 bg-neutral-600/25 ${
			!requested && 'hidden'
		}`}
	>
		{'You have request attendance for this event! Please wait for the event owner to accept your request.'}
	</div>
</Popover>
