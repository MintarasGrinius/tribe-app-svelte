<script>
	import { createEventDispatcher, onDestroy } from 'svelte';
	import AttendButton from './AttendButton.svelte';
	import LikeButton from './LikeButton.svelte';

	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');

	/** @type {HTMLElement} */
	let modal;

	/** @type {(e: {key: string}) => void} */
	const handle_keydown = (e) => {
		if (e.key === 'Escape') {
			close();
			return;
		}
	};

	/** @type {import('pocketbase').Record & { expand: { owner: { name: string } } }} */
	export let event;
</script>

<svelte:window on:keydown={handle_keydown} />

<div class="fixed top-0 left-0 w-full h-full bg-black/30" on:click={close} />

<div
	class="fixed left-1/2 top-1/2 w-11/12 max-w-6xl overflow-visible -translate-x-1/2 -translate-y-1/2 rounded bg-white"
	role="dialog"
	aria-modal="true"
	bind:this={modal}
>
	<section class="text-gray-400 bg-gray-900 body-font overflow-hidden">
		<div>
			<div class="lg:w-full flex flex-wrap">
				<img
					alt="ecommerce"
					class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
					src={event?.photo}
				/>
				<div class="lg:w-1/2 w-full lg:p-10 m-6 lg:m-0 flex justify-between flex-col">
					<div>
						<h2 class="text-sm title-font text-gray-500 tracking-widest mb-1">{event.type}</h2>
						<h1 class="text-white text-3xl title-font font-medium mb-1">
							{event.title}
						</h1>
						<div class="flex mb-4">
							<span class="flex items-center">
								{event.theme}
							</span>
							<span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-800 text-gray-500 space-x-2">
								{event.expand.owner.name}
							</span>
						</div>
						<p class="leading-relaxed min-h-[5rem]">
							{event.description}
						</p>
					</div>
					<div>
						<div class="flex border-t border-gray-700 pt-4">
							<span class="title-font font-medium text-2xl text-white"
								>{event.date.slice(0, 10)}</span
							>

							<LikeButton {event} />
							<AttendButton {event} />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
