<script>
	import { Route, Router } from 'svelte-routing';

	import About from './pages/About.svelte';
	import Home from './pages/Home.svelte';
	import Login from './pages/Login.svelte';
	import Products from './pages/Products.svelte';
	import ProductTemplate from './pages/ProductTemplate.svelte';

	import Navbar from './components/Navbar/Navbar.svelte';
	import Sidebar from './components/Navbar/Sidebar.svelte';
</script>

<Router basepath="/">
	<Navbar />
	<Sidebar />
	<div>
		<Route path="/" component={Home} />
		<Route path="/about" component={About} />
		<Route path="/login" component={Login} />
		<Route path="/products" component={Products} />
		<Route path="/products/:id" component={ProductTemplate} />
	</div>
</Router>
