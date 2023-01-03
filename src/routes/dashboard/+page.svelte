<script lang="ts">
	import BigCard from './BigCard.svelte';
	import LittleCard from './LittleCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	export let form;
	console.log(form);
</script>

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
