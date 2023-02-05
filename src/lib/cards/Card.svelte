<script>
	import Modal from './Modal.svelte';

	/** @type {import('pocketbase').Record & { expand: { owner: { name: string } } }} */
	export let event;
	/** @type {string | undefined}*/
	export let userId;
	let showModal = false;
</script>

{#if showModal}
	<Modal {event} {userId} on:close={() => (showModal = false)} />
{/if}
<div class="p-4 md:w-1/3">
	<div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden flex flex-col">
		<img class="lg:h-48 md:h-36 w-full object-cover object-center" src={event?.photos} alt="blog" />
		<div class="p-6 flex justify-between flex-col h-full">
			<div>
				<h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
					{event.type}
				</h2>
				<h1 class="title-font text-lg font-medium text-white mb-3">{event.title}</h1>
				<p class="leading-relaxed mb-3">
					{event.description}
				</p>
			</div>
			<div class="flex justify-between flex-wrap gap-x-10">
				<button
					on:click={() => (showModal = true)}
					class="text-red-400 inline-flex items-center justify-between mb-0 md:text-xs lg:text-base"
					>Learn More
					<svg
						class="w-4 h-4 ml-2"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M5 12h14" />
						<path d="M12 5l7 7-7 7" />
					</svg>
				</button>
				<div class="flex items-center justify-between gap-2 flex-wrap md:text-sm mt-2 flex-auto">
					<span class="text-gray-500 inline-flex items-center leading-none text-sm">
						<svg
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							class="w-4 h-4 mr-1"
							viewBox="0 0 24 24"
						>
							<path
								d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z"
							/>
						</svg>
						{event.likes}
					</span>
					<span class="text-gray-500 inline-flex items-center leading-none text-sm">
						<svg
							class="w-4 h-4 mr-1"
							stroke="currentColor"
							fill="none"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							viewBox="0 0 24 24"
						>
							<path
								d="M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M6,10V7H4V10H1V12H4V15H6V12H9V10M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12Z"
							/>
						</svg>
						{event.requests}
					</span>
					<span class="text-gray-500 inline-flex items-center leading-none text-sm">
						<svg
							class="w-4 h-4 mr-1"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							viewBox="0 0 24 24"
						>
							<path
								d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z"
							/>
						</svg>6
					</span>
				</div>
			</div>
		</div>
	</div>
</div>
