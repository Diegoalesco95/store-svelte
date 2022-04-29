<script>
	import { link } from 'svelte-routing';

	import CartButton from '../Cart/CartButton.svelte';
	import LoginLink from '../Login/LoginLink.svelte';

	import links from '../../constants/links';
</script>

<nav class="navbar">
	<div class="nav-container">
		<div class="nav-center">
			<ul class="nav-links">
				{#each links as navLink}
					<li>
						<a href={navLink.url} use:link>{navLink.text}</a>
					</li>
				{/each}
			</ul>
			<a class="nav-logo" href="/" use:link>Razors</a>
			<div class="nav-aside">
				<LoginLink />
				<CartButton />
			</div>
		</div>
	</div>
</nav>
