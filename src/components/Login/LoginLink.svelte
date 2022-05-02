<script>
	import { link } from 'svelte-routing';

	import globalStore from '../../stores/globalStore';
	import user, { logoutUser } from '../../stores/user';

	function closeSidebar() {
		globalStore.toggleItem('sidebar', false);
	}

	function logout() {
		logoutUser();
		closeSidebar();
	}
</script>

{#if $user.jwt}
	<a class="logout-btn" href="/" on:click={logout} use:link>Logout</a>
{:else}
	<a href="/login" use:link on:click={closeSidebar}>Login</a>
{/if}
