<script>
	import {
		decreaseAmount,
		increaseAmount,
		removeItem,
	} from '../../stores/cart';

	export let id;
	export let title;
	export let amount;
	export let image;
	export let price;
</script>

<div class="cart-item">
	<img src={image} alt={title} />
	<div>
		<h4>{title}</h4>
		<h5>${price}</h5>
		<button class="cart-btn remove-btn" on:click={() => removeItem(id)}
			>Remove</button
		>
	</div>
	<div>
		<button class="cart-btn amount-btn" on:click={() => increaseAmount(id)}>
			<i class="fa-solid fa-chevron-up" />
		</button>
		<p class="item-amount">{amount}</p>
		<button
			class="cart-btn amount-btn"
			on:click={() => decreaseAmount(id, amount)}
		>
			<i class="fa-solid fa-chevron-down" />
		</button>
	</div>
</div>
