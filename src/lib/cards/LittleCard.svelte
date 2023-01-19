<script lang="ts">
	import type { Record } from 'pocketbase';
	export let event: Record;
</script>

{#if !!event?.photo}
	<div class="md:p-2 p-1 w-1/2 max-h-[18vw]">
		<img alt="gallery" class="w-full object-cover h-full object-center block" src={event?.photo} />
	</div>
{/if}
