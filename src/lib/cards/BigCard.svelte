<script lang="ts">
	import type { Record } from 'pocketbase';

	export let event: Record;
</script>

{#if event?.photo}
	<div class="md:p-2 p-1 w-full max-h-[36vw]">
		<img alt="gallery" class="w-full h-full object-cover object-center block" src={event?.photo} />
	</div>
{/if}
