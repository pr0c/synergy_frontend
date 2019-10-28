<template>
	<div class="navbar">
		<div class="nav-panel">
			<div class="nav-item">
				<span><router-link to="/">Home</router-link></span>
			</div>
			<div class="nav-item">
				<span><router-link to="/books">Books</router-link></span>
			</div>
			<div class="nav-item">
				<span><router-link to="/authors">Authors</router-link></span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
    name: 'Navbar'
	}
</script>

<style scoped>

	.navbar {
		width: 100%;
		display: flex;
		background-color: #f8f8f8;
		border: 1px solid #e7e7e7;
	}

	.navbar .nav-panel {
		display: flex;
		flex-direction: rows;
		margin-left: 150px;
		justify-content: space-between;
	}

	.navbar .nav-item {
		display: flex;
		color: #777;
		align-items: center;
		justify-content: center;
		padding: 15px;
		cursor: pointer;
	}

	.navbar .nav-item a {
		text-decoration: none;
		color: #777;
	}

	.navbar .nav-item a:hover {
		color: #333;
	}
</style>