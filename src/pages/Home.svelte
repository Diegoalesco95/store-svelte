<script>
	import { link } from 'svelte-routing';

	import Hero from '../components/Hero/Hero.svelte';
	import Featured from '../components/Products/Featured.svelte';
</script>

<Hero>
	<a class="btn btn-primary btn-hero" href="/products" use:link>Shop now</a>
</Hero>
<Featured title="Featured Products" />
