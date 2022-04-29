<script>
	import { link } from 'svelte-routing';

	import links from '../../constants/links';
</script>

<div class="sidebar-container">
	<div class="sidebar">
		<div class="sidebar-header">
			<button class="btn-close">
				<i class="fa-solid fa-xmark" />
			</button>
		</div>
		<a class="nav-logo" href="/" use:link>Razors</a>
		<ul class="sidebar-links">
			{#each links as sideLink}
				<li>
					<a href={sideLink.url} use:link>{sideLink.text}</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
