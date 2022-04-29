<script>
	import { onMount } from 'svelte';
	import { link } from 'svelte-routing';

	import Hero from '../components/Hero/Hero.svelte';
	import Featured from '../components/Products/Featured.svelte';

	import { setProducts } from '../stores/products';

	onMount(() => {
		setProducts();
	});
</script>

<Hero>
	<a class="btn btn-primary btn-hero" href="/products" use:link>Shop now</a>
</Hero>
<Featured title="Featured Products" />
