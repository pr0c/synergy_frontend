<template>
	<div class="edit-author">
		<div class="form">
			<input type="text" v-model="author.name">
			<button v-on:click="saveAuthor">Save</button>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import router from '../router'

	export default {
		data() {
			return {
				author: {}
			}
		},
		name: 'EditAuthor',
		methods: {
			saveAuthor: function () {
				let params = new URLSearchParams();
				params.append('author', JSON.stringify(this.author));
				axios.post(this.$actions + '/author/' + this.author.id, params)
					.then((response) => {
						if(response['data']['id']) router.push({ name: 'authors' });
					})
					.catch((error) => {
						console.log(error);
					});
			}
		},
		created() {
			axios.get(this.$actions + '/author/' + this.$route.params.id)
				.then((response) => {
					this.author = response['data'];
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}
</script>

<style scoped>
	.edit-author {
		display: flex;
		justify-content: center;
		margin-top: 100px;
	}

	.form {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 55px;
		border: 1px solid #d3d3d3;
		padding: 50px;
	}

	.form button {
		width: 60px;
	}

	.form input {
		padding: 5px;
	}
</style>