<script>
	import { enhance } from '$app/forms';
	import { z } from 'zod';
	import FormHeader from '$lib/new-event/FormHeader.svelte';
	import Map from '$lib/new-event/Map.svelte';
	import toast from 'svelte-french-toast';
	/** @type {import('./$types').ActionData} */
	export let form;

	let formValues = {
		title: form?.title?.value || '',
		description: form?.description?.value || '',
		photo: '',
		date: form?.date?.value || '',
		location: form?.location?.value || '',
		type: form?.type?.value || '',
		theme: form?.theme?.value || ''
	};

	let loading = false;
	/** @type {import('zod').ZodFormattedError<{ title: string; location: string; date: string; type: string; photos: { name: string }; description: string; theme: string; }, string> | null} */
	let error;
	const errorMessage = 'Please provide valid email!';

	/** @type {import('$app/forms').SubmitFunction} */
	const changeDetails = ({ cancel, data }) => {
		console.log(Object.fromEntries([...data]));
		loading = true;
		const validation = z
			.object({
				title: z.string().min(1, { message: 'Title is required!' }),
				description: z.string().min(1, { message: 'Description is required!' }),
				photos: z
					.object({
						name: z.string().min(1, { message: 'Photo is required!' })
					})
					.required(),
				location: z.string().min(1, { message: 'Location is required!' }),
				date: z.string().min(1, { message: 'Date is required!' }),
				type: z.string().min(1, { message: 'Type is required!' }),
				theme: z.string().min(1, { message: 'Theme is required!' })
			})
			.safeParse(Object.fromEntries([...data]));

		if (!validation.success) {
			error = validation.error.format();
			console.log(error);
			loading = false;
			cancel();
			return;
		}
		return async ({ result, update }) => {
			console.log(result);
			error = null;
			await update();
			if (result.type === 'failure' && result?.data?.error) {
				error = result?.data.error;
			} else {
				toast.success('Event created successfully!', {
					style: 'border-radius: 200px; background: #333; color: #fff;'
				});
			}
			loading = false;
		};
	};
</script>

<section class="text-gray-400 bg-gray-900 body-font relative">
	<div class="container px-5 py-14 mx-auto flex sm:flex-nowrap flex-wrap">
		<Map {formValues} />

		<form
			enctype="multipart/form-data"
			use:enhance={changeDetails}
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
					{#if error?.title?._errors[0]}
						<p class="error text-red-500 text-xs">{error?.title?._errors[0]}</p>
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
					{#if error?.description?._errors[0]}
						<p class="error text-red-500 text-xs">{error?.description._errors[0]}</p>
					{/if}
				</div>
			</div>
			<div class="relative">
				<label for="photos"
					><div class="leading-7 text-sm text-gray-400">Profile image</div>
					<div
						class="cursor-pointer flex items-center justify-between px-3 h-10 w-full bg-gray-600 overflow-hidden bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-red-900 rounded border border-gray-600 focus:border-red-500 text-base outline-none text-gray-100 leading-8 transition-colors duration-200 ease-in-out"
					>
						<img src={'/icons/upload.svg'} alt="Upload icon" class="h-5 w-5 gray-400" />
						<input
							bind:value={formValues.photo}
							id="photos"
							name="photos"
							type="file"
							accept="image/*"
						/>
					</div>
				</label>
				<div class="h-5">
					{#if error?.photos?.name?._errors[0]}
						<p class="error text-red-500 text-xs">{error?.photos?.name._errors[0]}</p>
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
					{#if error?.location?._errors[0]}
						<p class="error text-red-500 text-xs">{error?.location._errors[0]}</p>
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
					{#if error?.date?._errors[0]}
						<p class="error text-red-500 text-xs">{error?.date._errors[0]}</p>
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
					{#if error?.type?._errors[0]}
						<p class="error text-red-500 text-xs">{error?.type._errors[0]}</p>
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
					{#if error?.theme?._errors[0]}
						<p class="error text-red-500 text-xs">{error?.theme._errors[0]}</p>
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
