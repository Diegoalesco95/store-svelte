<script>
	import { onMount, onDestroy } from 'svelte';
	import { fly, fade } from 'svelte/transition';

	import globalStore from '../../stores/globalStore';

	let { message, type } = $globalStore.alert;

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
	class:alert-danger={type === 'danger'}
	in:fly={{
		y: -200,
		duration: 1000,
	}}
	out:fade
>
	<div class="alert">
		<p>{message}</p>
		<button class="alert-close" on:click={handleClose}>
			<i class="fa-solid fa-xmark" />
		</button>
	</div>
</div>
