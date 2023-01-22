<script>
	import { enhance } from '$app/forms';
	import Steps from '$lib/profile/Steps.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	console.log(data);
	/** @type {import('./$types').ActionData} */
	export let form;
	console.log(form);
	let formValues = {
		phone_number: form?.phone_number?.value || data.user_detail.phone_number || '',
		date_of_birth: form?.date_of_birth?.value || data.user_detail.date_of_birth || '',
		instagram: form?.instagram?.value || data.user_detail.instagram || '',
		facebook: form?.facebook?.value || data.user_detail.facebook || '',
		description: form?.description?.value || data.user_detail.description || ''
	};

	/** @type {import('$app/forms').SubmitFunction} */
	const changeDetails = ({ data, cancel }) => {
		return async ({ result, update }) => {
			await update();
			console.log(result);
		};
	};
</script>

<section class="text-gray-400 bg-gray-900 body-font relative">
	<div class="flex justify-center flex-col items-center mt-20">
		<h2 class="text-white text-lg mb-1 font-medium title-font">Profile</h2>
		<p class="leading-relaxed mb-5 w-1/2 text-center">
			None of the the fields below are required but we recommend you fill out your profile to help
			events organizers know more about you.
		</p>
	</div>
	<div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap justify-evenly">
		<Steps />
		<form
			method="POST"
			class="lg:w-1/3 md:w-1/2 flex flex-col w-full md:py-8 mt-8 md:mt-0"
			use:enhance={changeDetails}
		>
			<div class="relative mb-4">
				<label for="phone_number" class="leading-7 text-sm text-gray-400">Phone number</label>
				<input
					type="number"
					id="phone_number"
					name="phone_number"
					bind:value={formValues.phone_number}
					class="w-full bg-gray-800 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				/>
				<div class="h-5">
					{#if form?.phone_number?.message}
						<p class="error text-red-500 text-xs">{form?.phone_number?.message}</p>
					{/if}
				</div>
			</div>
			<div class="relative mb-4">
				<label for="date_of_birth" class="leading-7 text-sm text-gray-400">Date of Birth</label>
				<input
					type="date"
					id="date_of_birth"
					name="date_of_birth"
					bind:value={formValues.date_of_birth}
					class="w-full bg-gray-800 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				/>
				<div class="h-5">
					{#if form?.date_of_birth?.message}
						<p class="error text-red-500 text-xs">{form?.date_of_birth?.message}</p>
					{/if}
				</div>
			</div>
			<div class="relative mb-4">
				<label for="instagram" class="leading-7 text-sm text-gray-400">Instagram</label>
				<input
					type="url"
					id="instagram"
					name="instagram"
					bind:value={formValues.instagram}
					class="w-full bg-gray-800 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				/>
				<div class="h-5">
					{#if form?.instagram?.message}
						<p class="error text-red-500 text-xs">{form?.instagram?.message}</p>
					{/if}
				</div>
			</div>
			<div class="relative mb-4">
				<label for="facebook" class="leading-7 text-sm text-gray-400">Facebook</label>
				<input
					type="url"
					id="facebook"
					name="facebook"
					bind:value={formValues.facebook}
					class="w-full bg-gray-800 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				/>
				<div class="h-5">
					{#if form?.facebook?.message}
						<p class="error text-red-500 text-xs">{form?.facebook?.message}</p>
					{/if}
				</div>
			</div>
			<div class="relative mb-4">
				<label for="description" class="leading-7 text-sm text-gray-400">Description</label>
				<textarea
					name="description"
					bind:value={formValues.description}
					class="w-full bg-gray-800 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				/>
				<div class="h-5">
					{#if form?.description?.message}
						<p class="error text-red-500 text-xs">{form?.description?.message}</p>
					{/if}
				</div>
			</div>
			<button
				type="submit"
				class="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
				>Save</button
			>
			<p class="text-xs text-gray-400 text-opacity-90 mt-3">
				Save before leaving this page to avoid losing your changes.
			</p>
		</form>
	</div>
</section>
