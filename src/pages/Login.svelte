<script>
	import loginUser from '../strapi/loginUser';
	import registerUser from '../strapi/registerUser';

	let isMember = true;
	let email = '';
	let password = '';
	let username = '';

	$: isEmpty = !email || !password || (isMember ? false : !username);

	function toggleMember() {
		isMember = !isMember;
		if (!isMember) {
			username = '';
		}
	}

	async function handleSubmit() {
		let user = {
			email,
			password,
			username,
		};

		if (isMember) {
			await loginUser(user);
		} else {
			await registerUser(user);
		}
	}
</script>

<section class="form">
	<h2 class="section-title">
		{#if isMember}
			Sign in
		{:else}
			Register
		{/if}
	</h2>
	<form action="login-form" on:submit|preventDefault={handleSubmit}>
		<div class="form-control">
			<label for="email">
				email
				<input
					bind:value={email}
					id="email"
					name="email"
					type="email"
				/>
			</label>
			<div class="form-control">
				<label for="password">
					password
					<input
						bind:value={password}
						id="password"
						name="password"
						type="password"
					/>
				</label>
			</div>
			{#if !isMember}
				<div class="form-control">
					<label for="username">
						username
						<input
							bind:value={username}
							id="username"
							name="username"
							type="text"
						/>
					</label>
				</div>
			{/if}
			{#if isEmpty}
				<p class="form-empty">Please fill out all form fields</p>
			{/if}
			<button
				type="submit"
				class="btn btn-primary btn-block"
				class:disabled={isEmpty}
				disabled={isEmpty}
			>
				Submit
			</button>
			{#if isMember}
				<p class="register-link">
					Need to register?
					<button class="" on:click={toggleMember} type="button">
						Click Here
					</button>
				</p>
			{:else}
				<p class="register-link">
					Already a member?
					<button class="" on:click={toggleMember} type="button">
						Click Here
					</button>
				</p>{/if}
		</div>
	</form>
</section>
