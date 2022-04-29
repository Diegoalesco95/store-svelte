<script>
	import { link } from 'svelte-routing';

	import { addItem } from '../stores/cart';
	import products from '../stores/products';
	import globalStore from '../stores/globalStore';

	import Loading from '../components/Loading/Loading.svelte';

	export let id;

	$: product = $products.find((item) => item.id === parseInt(id));

	function addToCart(item) {
		addItem(product);
		globalStore.toggleItem('cart', true);
	}
</script>

<svelte:head>
	<title>
		{product?.title || 'Product'}
	</title>
</svelte:head>

{#if !product}
	<Loading />
{:else}
	<section class="single-product">
		<a class="btn btn-primary" href="/products" use:link
			>Back to products
		</a>
		<div class="single-product-container">
			<article class="single-product-image">
				<img src={product.image} alt={product.title} />
			</article>
			<article>
				<h1>{product.title}</h1>
				<h2>${product.price}</h2>
				<p>{product.description}</p>
				<button
					class="btn btn-primary btn-block"
					on:click={() => addToCart(product)}
				>
					Add to cart
				</button>
			</article>
		</div>
	</section>
{/if}
