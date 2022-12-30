<script>
	export let form;
	console.log(form);
</script>

<section>
	<h1>{'Register'}</h1>
	<form method="POST">
		<input value="email@email.com" name="email" type="email" required />
		<input value="Password01" name="password" type="password" required />
		<input value="Mintaras Grinius" name="name" required />
		<input value="+2348123456789" name="phone" type="tel" required />
		<input value={27} name="age" type="number" required />
		<div class="buttons">
			<button type="submit">Register</button>
			<a href="/">Login</a>
		</div>
	</form>
</section>

<style>
	.buttons {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
