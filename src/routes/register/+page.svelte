<script>
	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<section class="text-gray-400 z-50 bg-gray-900 body-font h-screen">
	<div class="container px-5 py-24 mx-auto flex flex-wrap items-center h-screen">
		<div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
			<h1 class="title-font font-medium text-3xl text-white">
				Join us on <b class="text-red-500">trib</b> for fun and connection with friends!
			</h1>
			<p class="leading-relaxed mt-4">
				Come check out our new website! It's a great place to connect with friends and have fun.
				We'd love for you to join us and give it a try.
			</p>
		</div>
		<form
			enctype="multipart/form-data"
			method="POST"
			class="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
		>
			<h2 class="text-white text-lg font-medium title-font mb-5">Register</h2>
			<div class="relative">
				<label for="email" class="leading-7 text-sm text-gray-400">Email</label>
				<input
					id="email"
					name="email"
					value={form?.email?.value || 'email@emaaaail.com'}
					class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-red-900 rounded border border-gray-600 focus:border-red-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				/>
				<div class="h-5">
					{#if form?.email?.message}
						<p class="error text-red-500 text-xs">{form?.email?.message}</p>
					{/if}
				</div>
			</div>
			<div class="relative">
				<label for="name" class="leading-7 text-sm text-gray-400">Name</label>
				<input
					id="name"
					name="name"
					value={form?.name?.value || 'name'}
					class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-red-900 rounded border border-gray-600 focus:border-red-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				/>
				<div class="h-5">
					{#if form?.name?.message}
						<p class="error text-red-500 text-xs">{form?.name?.message}</p>
					{/if}
				</div>
			</div>

			<div class="relative">
				<label for="avatar"
					><div class="leading-7 text-sm text-gray-400">Profile image</div>
					<div
						class="cursor-pointer flex items-center justify-between px-3 h-10 w-full bg-gray-600 overflow-hidden bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-red-900 rounded border border-gray-600 focus:border-red-500 text-base outline-none text-gray-100 leading-8 transition-colors duration-200 ease-in-out"
					>
						<img src={'/icons/upload.svg'} alt="Upload icon" class="h-5 w-5 gray-400" />
						<input id="avatar" name="avatar" type="file" accept="image/*" value={''} />
					</div>
				</label>
				<div class="h-5">
					{#if form?.avatar?.message}
						<p class="error text-red-500 text-xs">{form?.avatar?.message}</p>
					{/if}
				</div>
			</div>
			<div class="relative mb-2">
				<label for="password" class="leading-7 text-sm text-gray-400">Password</label>
				<input
					type="password"
					id="password"
					name="password"
					value={form?.password?.value || 'Password01'}
					class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-red-900 rounded border border-gray-600 focus:border-red-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				/>
				<div class="h-5">
					{#if form?.password?.message}
						<p class="error text-red-500 text-xs">{form?.password?.message}</p>
					{/if}
				</div>
			</div>

			<div class="relative mb-2">
				<label for="passwordConfirm" class="leading-7 text-sm text-gray-400">Confirm Password</label
				>
				<input
					type="password"
					id="passwordConfirm"
					name="passwordConfirm"
					value={form?.passwordConfirm?.value || 'Password01'}
					class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-red-900 rounded border border-gray-600 focus:border-red-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				/>
				<div class="h-5">
					{#if form?.passwordConfirm?.message}
						<p class="error text-red-500 text-xs">{form?.passwordConfirm?.message}</p>
					{/if}
				</div>
			</div>

			<button
				type="submit"
				class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
				>Register</button
			>
			<a class="text-xs mt-3 hover:no-underline" href="/">Login</a>
		</form>
	</div>
</section>
