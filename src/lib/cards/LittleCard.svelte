<script lang="ts">
	import Modal from './Modal.svelte';
	import type { Record } from 'pocketbase';
	export let event: Record;

	let showModal = false;
	console.log(event);
</script>

{#if showModal}
	<Modal on:close={() => (showModal = false)}>
		<section class="text-gray-400 bg-gray-900 body-font overflow-hidden">
			<div>
				<div class="lg:w-full flex flex-wrap">
					<img
						alt="ecommerce"
						class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
						src="https://dummyimage.com/400x400"
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
								<span
									class="flex ml-3 pl-3 py-2 border-l-2 border-gray-800 text-gray-500 space-x-2"
								>
									{event.expand.owner.name}
								</span>
							</div>
							<p class="leading-relaxed">
								{event.description}
							</p>
						</div>
						<div>
							<div class="flex mt-6 items-center mb-5">
								<div class="flex">
									<span class="mr-3">Color</span>
									<button
										class="border-2 border-gray-800 rounded-full w-6 h-6 focus:outline-none"
									/>
									<button
										class="border-2 border-gray-800 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"
									/>
									<button
										class="border-2 border-gray-800 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"
									/>
								</div>
								<div class="flex ml-6 items-center">
									<span class="mr-3">Size</span>
									<div class="relative">
										<select
											class="rounded border border-gray-700 focus:ring-2 focus:ring-red-900 bg-transparent appearance-none py-2 focus:outline-none focus:border-red-500 text-white pl-3 pr-10"
										>
											<option>SM</option>
											<option>M</option>
											<option>L</option>
											<option>XL</option>
										</select>
										<span
											class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center"
										>
											<svg
												fill="none"
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												class="w-4 h-4"
												viewBox="0 0 24 24"
											>
												<path d="M6 9l6 6 6-6" />
											</svg>
										</span>
									</div>
								</div>
							</div>
							<div class="flex border-t border-gray-700 pt-4">
								<span class="title-font font-medium text-2xl text-white">{event.date}</span>
								<button
									class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
									>Button</button
								>
								<button
									class="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
								>
									<svg
										fill="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										class="w-5 h-5"
										viewBox="0 0 24 24"
									>
										<path
											d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</Modal>
{/if}
{#if !!event?.photo}
	<div on:click={() => (showModal = true)} class="md:p-2 p-1 w-1/2 max-h-[18vw]">
		<img alt="gallery" class="w-full object-cover h-full object-center block" src={event?.photo} />
	</div>
{/if}
