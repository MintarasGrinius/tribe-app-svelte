<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import type { Record } from 'pocketbase';
	import { createEventDispatcher, onDestroy } from 'svelte';
	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');

	let modal: HTMLElement;

	const handle_keydown = (e: any) => {
		if (e.key === 'Escape') {
			close();
			return;
		}
	};

	export let event: Record & { expand: { owner: { [key: string]: string } } };

	const likeEvent: SubmitFunction = ({ data }) => {
		data.set('event', event.id);

		return async ({ result: { status }, update }) => {
			await update();
			console.log(status);
		};
	};
</script>

<svelte:window on:keydown={handle_keydown} />

<div class="fixed top-0 left-0 w-full h-full bg-black/30" on:click={close} />

<div
	class="fixed left-1/2 top-1/2 w-11/12 max-w-6xl overflow-auto -translate-x-1/2 -translate-y-1/2 rounded bg-white"
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

							<button
								class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
								>I wish to attend!</button
							>

							<form method="POST" use:enhance={likeEvent}>
								<!-- class={'rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4'} -->
								<button
									class={`rounded-full w-10 h-10 p-0 border-0 inline-flex items-center justify-center ml-4 ${
										event.liked
											? 'bg-red-500 text-red-300 cursor-default pointer-events-none'
											: 'text-gray-500 bg-gray-800 cursor-pointer animate-pulse'
									}`}
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
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
