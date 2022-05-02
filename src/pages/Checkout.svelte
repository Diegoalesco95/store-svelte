<script>
	import { onMount } from 'svelte';
	import { link, navigate } from 'svelte-routing';

	import cart, { cartTotal } from '../stores/cart';
	import submitOrder from '../strapi/submitOrder';
	import user from '../stores/user';
	import globalStore from '../stores/globalStore';

	let name = '';
	const stripeKey = process?.env.STRAPI_KEY;

	let cardElement = null;
	let cardErrors = null;
	let card = null;
	let stripe = null;
	let elements = null;

	$: isEmpty = !name || $globalStore.alert.show;

	function setCardErrors(event) {
		if (event.error) {
			cardErrors.textContent = event.error.message;
		} else {
			cardErrors.textContent = '';
		}
	}

	onMount(() => {
		if (!$user.jwt) {
			navigate('/');
			return;
		}

		if ($cartTotal > 0) {
			stripe = Stripe(stripeKey);
			elements = stripe.elements();
			card = elements.create('card');
			card.mount(cardElement);
			card.addEventListener('change', setCardErrors);
		}
	});

	async function handleSubmit() {
		globalStore.setAlert({
			show: true,
			message: 'Submitting... Please wait.',
			type: 'success',
		});

		let response = await stripe.createToken(card).catch((error) => {
			console.error(error);
		});

		const { token } = response;

		if (token) {
			const { id } = token;
			submitOrder({
				items: $cart,
				name,
				stripeTokenId: id,
				total: $cartTotal,
				userToken: $user.jwt,
			});
		} else {
			globalStore.setAlert({
				show: true,
				message:
					'Something went wrong while submitting your order, please try again.',
				type: 'success',
			});
		}
	}
</script>

{#if $cartTotal > 0}
	<section class="form">
		<h2 class="section-title">Checkout</h2>
		<form class="checkout-form" on:submit|preventDefault={handleSubmit}>
			<h3>Order Total: ${$cartTotal}</h3>
			<div class="form-control">
				<label for="name">Name</label>
				<input
					bind:value={name}
					id="name"
					name="name"
					required
					type="text"
				/>
			</div>
			<div class="stripe-input">
				<label for="card-element">Credit or Debid card</label>
				<p class="stripe-info">
					Test using this credit card:
					<span>4242 4242 4242 4242</span>
					<br />
					enter any 5 digits for the zip code
					<br />
					enter any 3 digits for the CVC
				</p>
				<div bind:this={cardElement} id="card-element">
					<!-- Strupe -->
				</div>
				<div bind:this={cardErrors} id="card-errors" role="alert" />
			</div>
			{#if isEmpty}
				<p class="form-empty">Please fill out name field</p>
			{/if}
			<button
				class="btn btn-block"
				class:disabled={isEmpty}
				disabled={isEmpty}
				type="submit"
			>
				Submit
			</button>
		</form>
	</section>
{:else}
	<div class="checkout-empty">
		<h2>Your cart is empty</h2>
		<a class="btn btn-primary" href="/products" use:link> Fill it! </a>
	</div>
{/if}
