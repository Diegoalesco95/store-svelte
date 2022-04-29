<script>
	import globalStore from '../../stores/globalStore';
	import cart from '../../stores/cart';

	$: totalItems = $cart.reduce((total, item) => total + item.amount, 0);

	function openCart() {
		globalStore.toggleItem('cart', true);
	}
</script>

<div class="btn-cart-container">
	<button class="btn-cart-toggle" on:click={openCart}>
		<i class="fa-solid fa-cart-shopping" />
	</button>
	<span class="btn-cart-items">{totalItems}</span>
</div>
