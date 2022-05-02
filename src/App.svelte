<script>
	import { onMount } from 'svelte';
	import { Route, Router } from 'svelte-routing';

	import globalStore from './stores/globalStore';

	import About from './pages/About.svelte';
	import Checkout from './pages/Checkout.svelte';
	import Home from './pages/Home.svelte';
	import Login from './pages/Login.svelte';
	import Products from './pages/Products.svelte';
	import ProductTemplate from './pages/ProductTemplate.svelte';

	import Alert from './components/Alert/Alert.svelte';
	import Cart from './components/Cart/Cart.svelte';
	import Navbar from './components/Navbar/Navbar.svelte';
	import Sidebar from './components/Navbar/Sidebar.svelte';

	import { setProducts } from './stores/products';

	onMount(() => {
		setProducts();
	});
</script>

<Router basepath="/">
	{#if $globalStore.alert.show}
		<Alert />
	{/if}
	{#if $globalStore.sidebar}
		<Sidebar />
	{/if}
	{#if $globalStore.cart}
		<Cart />
	{/if}
	<Navbar />
	<div>
		<Route path="/" component={Home} />
		<Route path="/about" component={About} />
		<Route path="/login" component={Login} />
		<Route path="/checkout" component={Checkout} />
		<Route path="/products" component={Products} />
		<Route path="/products/:id" component={ProductTemplate} />
	</div>
</Router>
