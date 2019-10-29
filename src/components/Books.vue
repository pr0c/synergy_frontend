<template>
	<div>
		<div class="add-book-link"><router-link to="/book">[ Add book ]</router-link></div>
		<div class="books">
			<Book v-for="(bookData, id) in books" :bookInfo="bookData" :key="'book_'+id"/>
		</div>
	</div>
</template>

<script>
	import Book from './Book.vue'
	import axios from 'axios'

	export default {
		data() {
			return {
				books: []
			}
		},
		components: {
			Book
		},
		name: 'Books',
		mounted() {
			axios.get(this.$actions + '/book')
				.then((response) => {
					this.books = response['data'];
				});
		}
	}
</script>

<style scoped>
	.books {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.book {
		margin-top: 15px;
	}

	.add-book-link {
		margin: 15px;
	}

	.add-book-link a {
		text-decoration: none;
		color: #777;
	}

	.add-book-link a:hover {
		color: #333;
	}
</style>
