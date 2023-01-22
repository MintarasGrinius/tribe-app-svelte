<script>
	/** @type {boolean} */
	export let showModal;
	/** @type {() => void} */
	export let toggleModal;
</script>

{#if showModal}
	<!-- Modal backdrop -->
	<div class="fixed top-0 left-0 w-full h-full bg-black opacity-75" />

	<!-- Modal content -->
	<div class="fixed top-0 left-0 w-full h-full flex items-center justify-center p-6">
		<div class="bg-white rounded-lg p-6">
			<div class="mb-4">
				<h2 class="text-2xl font-bold mb-2">Modal Title</h2>
				<p>Modal content goes here</p>
			</div>
			<div class="flex justify-end">
				<button
					class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
					on:click={toggleModal}
				>
					Close
				</button>
			</div>
		</div>
	</div>
{/if}
