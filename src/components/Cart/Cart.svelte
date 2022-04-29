<script>
	import { fly, fade, blur } from 'svelte/transition';
	import { link } from 'svelte-routing';

	import globalStore from '../../stores/globalStore';
	import user from '../../stores/user';

	import Items from './Items.svelte';

	function closeCart() {
		globalStore.toggleItem('cart', false);
	}
</script>

<div class="cart-overlay" transition:blur>
	<div class="cart-container" transition:fly={{ x: 100 }}>
		<div class="cart" transition:fade={{ delay: 400 }}>
			<div class="cart-header">
				<h2 class="cart-title">Your Cart</h2>
				<button class="btn-close" on:click={closeCart}>
					<i class="fa-solid fa-xmark" />
				</button>
			</div>
			<Items />
			<div class="cart-footer">
				{#if $user.jwt}
					<a
						class="btn btn-primary btn-block"
						href="/checkout"
						on:click={closeCart}
						use:link
					>
						Checkout
					</a>
				{:else}
					<p class="cart-login">
						In order to checkout, please
						<a href="/login" use:link> Log in </a>
					</p>
				{/if}
			</div>
		</div>
	</div>
</div>
