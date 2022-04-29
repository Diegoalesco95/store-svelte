<script>
	import { fly, fade } from 'svelte/transition';
	import { link } from 'svelte-routing';

	import globalStore from '../../stores/globalStore';

	import links from '../../constants/links';

	function closeSidebar() {
		globalStore.toggleItem('sidebar', false);
	}
</script>

<div class="sidebar-container" transition:fly={{ x: -1000 }}>
	<div class="sidebar" transition:fade={{ delay: 400 }}>
		<div class="sidebar-header">
			<button class="btn-close" on:click={closeSidebar}>
				<i class="fa-solid fa-xmark" />
			</button>
		</div>
		<a class="nav-logo" href="/" on:click={closeSidebar} use:link>Razors</a>
		<ul class="sidebar-links">
			{#each links as sideLink}
				<li>
					<a href={sideLink.url} on:click={closeSidebar} use:link
						>{sideLink.text}</a
					>
				</li>
			{/each}
		</ul>
	</div>
</div>
