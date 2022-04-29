<script>
	import { link } from 'svelte-routing';
	export let product;

	const { title, image, price, id } = product;
</script>

<article class="product">
	<div class="img-container">
		<img src={image} alt={title} />
		<a
			class="btn btn-primary product-link"
			href={`/products/${id}`}
			use:link>Details</a
		>
	</div>
	<div class="product-footer">
		<p class="prodcut-title">{title}</p>
		<p class="prodcut-price">${price}</p>
	</div>
</article>
