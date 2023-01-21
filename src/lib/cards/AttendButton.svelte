<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import type { Record } from 'pocketbase';
	import Popover from 'svelte-easy-popover';

	export let event: Record & { expand: { owner: { [key: string]: string } } };
	let referenceElement;
	let effect = false;

	const attendEvent: SubmitFunction = ({ data, cancel }) => {
		data.set('event', event.id);
		event.requested && cancel();
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

<form method="POST" action="?/attend" use:enhance={attendEvent}>
	<button
		bind:this={referenceElement}
		class={`flex ml-4 border-0 py-2 px-6 focus:outline-none rounded ${
			event.requested
				? 'text-gray-500 bg-gray-800 cursor-default'
				: 'bg-red-500 text-white cursor-pointer hover:bg-red-600'
		} ${effect && 'animate-wiggle'}`}
		>{event.requested ? 'Already requested' : 'I wish to attend!'}</button
	>
</form>

<Popover triggerEvents={['hover']} {referenceElement} placement="bottom" spaceAway={5}>
	<div
		class={`border border-black border-solid rounded py-1 px-3 bg-neutral-600/25 ${
			!event.requested && 'hidden'
		}`}
	>
		You have request attendance for this event! Please wait for the event owner to accept your
		request.
	</div>
</Popover>
