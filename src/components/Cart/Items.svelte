<script>
	import { afterUpdate } from 'svelte';
	import { fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	import cart, { cartTotal, setStorageCart } from '../../stores/cart';

	import Item from './Item.svelte';

	afterUpdate(() => {
		setStorageCart($cart);
	});
</script>

<section class="cart-items">
	<article>
		{#each $cart as item, index (item.id)}
			<div
				animate:flip
				in:fly={{ delay: (index + 1) * 500, x: 100 }}
				out:fly={{ x: -100 }}
			>
				<Item {...item} />
			</div>
		{:else}
			<h2 class="empty-cart">Is currently empty</h2>
		{/each}
	</article>
	<h3 class="cart-total">Total: ${$cartTotal}</h3>
</section>
