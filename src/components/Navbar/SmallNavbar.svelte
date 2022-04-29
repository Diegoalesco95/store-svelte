<script>
	import { link } from 'svelte-routing';

	import CartButton from '../Cart/CartButton.svelte';
</script>

<nav class="navbar">
	<div class="nav-center">
		<button class="btn-sidebar-toggle">
			<i class="fa-solid fa-bars" />
		</button>
		<a class="nav-logo" href="/" use:link>
			<span>Razors</span>
		</a>
		<CartButton />
	</div>
</nav>
