<template>
	<div class="author">
		<div class="author-form">
			<input type="text" v-model="name" placeholder="Name">
			<button v-on:click="createAuthor">Create</button>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import router from '../router'

	export default {
		data() {
			return {
				name: ''
			}
		},
		name: 'CreateAuthor',
		methods: {
			createAuthor: function() {
				let params = new URLSearchParams();
				params.append('name', this.name);
				axios.post(this.$actions + '/author', params)
					.then((response) => {
						if(response['data']['id']) {
							router.push({ name: 'authors' });
						}
					})
					.catch((error) => {
						console.log(error);
					});
			}
		}
	}
</script>

<style scoped>
	.author {
		display: flex;
		justify-content: center;
		align-content: center;
		margin-top: 100px;
	}

	.author-form {
		display: flex;
		flex-direction: column;
		height: 60px;
		justify-content: space-between;
		border: 1px solid #d3d3d3;
		border-radius: 5px;
		padding: 25px;
	}

	.author-form input {
		padding: 5px;
	}

	.author-form button {
		width: 80px;
	}
</style>