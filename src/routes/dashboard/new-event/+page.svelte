<script lang="ts">
	import Form from '$lib/new-event/Form.svelte';
	import Map from '$lib/new-event/Map.svelte';
	export let form: {
		[key: string]: {
			message: string;
			value: string;
		};
	};
	const formValues = {
		title: form?.title?.value || '',
		description: form?.description?.value || '',
		photo: form?.photo?.value || '',
		date: form?.date?.value || '',
		location: form?.location?.value || '',
		type: form?.type?.value || '',
		theme: form?.theme?.value || ''
	};
</script>

<section on:click={() => console.log(a)} class="text-gray-400 bg-gray-900 body-font relative">
	<div class="container px-5 py-14 mx-auto flex sm:flex-nowrap flex-wrap">
		<Map {formValues} />
		<Form {formValues} {form} />
	</div>
</section>
