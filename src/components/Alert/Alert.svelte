<script>
	import { onMount, onDestroy } from 'svelte';
	import { fly, fade } from 'svelte/transition';

	import globalStore from '../../stores/globalStore';

	const handleClose = () => {
		globalStore.setAlert({
			show: false,
			message: 'Default message',
			type: 'success',
		});
	};

	let timeout;

	onMount(() => {
		timeout = setTimeout(() => {
			globalStore.setAlert({
				show: false,
				message: 'Default message',
				type: 'success',
			});
		}, 3000);
	});

	onDestroy(() => {
		clearTimeout(timeout);
	});
</script>

<div
	class="alert-container"
	class:alert-danger={$globalStore.alert.type === 'danger'}
	in:fly={{
		y: -200,
		duration: 1000,
	}}
	out:fade
>
	<div class="alert">
		<p>{$globalStore.alert.message}</p>
		<button class="alert-close" on:click={handleClose}>
			<i class="fa-solid fa-xmark" />
		</button>
	</div>
</div>
