<script lang="ts">
	import BigCard from './BigCard.svelte';
	import LittleCard from './LittleCard.svelte';
	import type { PageData } from './$types';
	import Modal from './Modal.svelte';

	export let data: PageData;
	export let form;
	console.log(form);
	let showModal = false;

	function toggleModal() {
		showModal = !showModal;
	}
</script>

<!-- Modal trigger button -->
<button
	class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
	on:click={toggleModal}
>
	Show Modal
</button>

<Modal {showModal} {toggleModal} />
<div class="p-5 flex flex-wrap w-screen">
	<div class="flex flex-wrap md:-m-2 -m-1">
		<div class="flex flex-wrap w-1/2">
			<LittleCard />
			<LittleCard />
			<BigCard />
		</div>
		<div class="flex flex-wrap w-1/2">
			<BigCard />
			<LittleCard />
			<LittleCard />
		</div>
		<div class="flex flex-wrap w-1/2">
			<LittleCard />
			<LittleCard />
			<BigCard />
		</div>
		<div class="flex flex-wrap w-1/2">
			<BigCard />
			<LittleCard />
			<LittleCard />
		</div>
		<div class="flex flex-wrap w-1/2">
			<LittleCard />
			<LittleCard />
			<BigCard />
		</div>
		<div class="flex flex-wrap w-1/2">
			<BigCard />
			<LittleCard />
			<LittleCard />
		</div>
		<div class="flex flex-wrap w-1/2">
			<LittleCard />
			<LittleCard />
			<BigCard />
		</div>
		<div class="flex flex-wrap w-1/2">
			<BigCard />
			<LittleCard />
			<LittleCard />
		</div>
		<div class="flex flex-wrap w-1/2">
			<LittleCard />
			<LittleCard />
			<BigCard />
		</div>
		<div class="flex flex-wrap w-1/2">
			<BigCard />
			<LittleCard />
			<LittleCard />
		</div>
		<div class="flex flex-wrap w-1/2">
			<LittleCard />
			<LittleCard />
			<BigCard />
		</div>
		<div class="flex flex-wrap w-1/2">
			<BigCard />
			<LittleCard />
			<LittleCard />
		</div>
	</div>
</div>
