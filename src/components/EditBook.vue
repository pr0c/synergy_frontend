<template>
	<div class="book">
		<div class="book-form">
			<input type="text" v-model="book.title" placeholder="Title">
			<textarea v-model="book.description" placeholder="Description"></textarea>
			<MultiTagBox :choosed_items="book.authors" :items="authorsList" v-on:items-changed="authorsChanged" />
			<button v-on:click="saveBook">Save</button>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import router from '../router/'
	import MultiTagBox from './MultiTagBox'

	export default {
		data: function () {
			return {
				book: {
					title: '',
					description: '',
					authors: [],
				},
				authorsList: []
			}
		},
		name: 'EditBook',
		components: {
			MultiTagBox
		},
		methods: {
			saveBook: function () {
				let params = new URLSearchParams();

				params.append('book', JSON.stringify(this.book));

				axios.post(this.$actions + '/book/' + this.book.id, params)
					.then((response) => {
						router.push({ name: 'book', params: { id: response.data.id } });
					})
					.catch((error) => {
						console.log(error);
					})
			},
			authorsChanged: function (authors) {
				this.book.authors = authors;
			}
		},
		created() {
			axios.get(this.$actions + '/book/' + this.$route.params.id)
				.then((response) => {
					this.book = response['data'];
				})
				.catch((error) => {

				});

			axios.get(this.$actions + '/author')
				.then((response) => {
					this.authorsList = response.data;
				})
				.catch((error) => {
					console.log(error);
				})
		}
	}
</script>

<style scoped>
	.book {
		display: flex;
		justify-content: center;
		margin-top: 100px;
	}

	.book-form {
		display: flex;
		flex-direction: column;
		width: 500px;
		height: 320px;
		justify-content: space-between;
	}

	.book-form textarea {
		height: 200px;
		padding: 5px;
	}

	.book-form input {
		padding: 5px;
	}

	.book-form button {
		width: 80px;
		height: 30px;
	}
</style>