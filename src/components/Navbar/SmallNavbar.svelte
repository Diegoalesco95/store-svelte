<script>
	import { link } from 'svelte-routing';

	import globalStore from '../../stores/globalStore';

	import CartButton from '../Cart/CartButton.svelte';

	function openSidebar() {
		globalStore.toggleItem('sidebar', true);
	}
</script>

<nav class="navbar">
	<div class="nav-center">
		<button class="btn-sidebar-toggle" on:click={openSidebar}>
			<i class="fa-solid fa-bars" />
		</button>
		<a class="nav-logo" href="/" use:link>
			<span>Razors</span>
		</a>
		<CartButton />
	</div>
</nav>
