<script lang="ts">
	import FormHeader from '$lib/new-event/FormHeader.svelte';
	import Map from '$lib/new-event/Map.svelte';
	export let form: {
		[key: string]: {
			message: string;
			value: string;
		};
	};
	let formValues = {
		title: form?.title?.value || '',
		description: form?.description?.value || '',
		photo: form?.photo?.value || '',
		date: form?.date?.value || '',
		location: form?.location?.value || '',
		type: form?.type?.value || '',
		theme: form?.theme?.value || ''
	};
</script>

<section class="text-gray-400 bg-gray-900 body-font relative">
	<div class="container px-5 py-14 mx-auto flex sm:flex-nowrap flex-wrap">
		<Map {formValues} />

		<form
			enctype="multipart/form-data"
			method="POST"
			class="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
		>
			<FormHeader />
			<div class="relative mb-4">
				<label for="title" class="leading-7 text-sm text-gray-400">Title</label>
				<input
					bind:value={formValues.title}
					type="text"
					id="title"
					name="title"
					class="w-full bg-gray-800 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				/>
				<div class="h-5">
					{#if form?.title?.message}
						<p class="error text-red-500 text-xs">{form?.title?.message}</p>
					{/if}
				</div>
			</div>
			<div class="relative mb-4">
				<label for="description" class="leading-7 text-sm text-gray-400">Description</label>
				<textarea
					bind:value={formValues.description}
					id="description"
					name="description"
					class="w-full bg-gray-800 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				/>
				<div class="h-5">
					{#if form?.description?.message}
						<p class="error text-red-500 text-xs">{form?.description?.message}</p>
					{/if}
				</div>
			</div>
			<div class="relative">
				<label for="photo"
					><div class="leading-7 text-sm text-gray-400">Profile image</div>
					<div
						class="cursor-pointer flex items-center justify-between px-3 h-10 w-full bg-gray-600 overflow-hidden bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-red-900 rounded border border-gray-600 focus:border-red-500 text-base outline-none text-gray-100 leading-8 transition-colors duration-200 ease-in-out"
					>
						<img src={'/icons/upload.svg'} alt="Upload icon" class="h-5 w-5 gray-400" />
						<input
							bind:value={formValues.photo}
							id="photo"
							name="photo"
							type="file"
							accept="image/*"
						/>
					</div>
				</label>
				<div class="h-5">
					{#if form?.photo?.message}
						<p class="error text-red-500 text-xs">{form?.photo?.message}</p>
					{/if}
				</div>
			</div>
			<div class="relative mb-4">
				<label for="location" class="leading-7 text-sm text-gray-400">Location</label>
				<input
					type="text"
					bind:value={formValues.location}
					id="location"
					name="location"
					class="w-full bg-gray-800 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				/>
				<div class="h-5">
					{#if form?.location?.message}
						<p class="error text-red-500 text-xs">{form?.location?.message}</p>
					{/if}
				</div>
			</div>
			<div class="relative mb-4">
				<label for="date" class="leading-7 text-sm text-gray-400">Date</label>
				<input
					type="date"
					bind:value={formValues.date}
					name="date"
					id="date"
					class="w-full bg-gray-800 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				/>
				<div class="h-5">
					{#if form?.date?.message}
						<p class="error text-red-500 text-xs">{form?.date?.message}</p>
					{/if}
				</div>
			</div>
			<div class="relative mb-4">
				<label for="type" class="leading-7 text-sm text-gray-400">Type</label>
				<input
					id="type"
					bind:value={formValues.type}
					name="type"
					class="w-full bg-gray-800 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				/>
				<div class="h-5">
					{#if form?.type?.message}
						<p class="error text-red-500 text-xs">{form?.type?.message}</p>
					{/if}
				</div>
			</div>
			<div class="relative mb-4">
				<label for="theme" class="leading-7 text-sm text-gray-400">Theme</label>
				<input
					id="theme"
					bind:value={formValues.theme}
					name="theme"
					class="w-full bg-gray-800 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				/>
				<div class="h-5">
					{#if form?.theme?.message}
						<p class="error text-red-500 text-xs">{form?.theme?.message}</p>
					{/if}
				</div>
			</div>

			<button
				type="submit"
				class="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
				>Button</button
			>
		</form>
	</div>
</section>
