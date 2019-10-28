<template>
	<div class="books">
		<Book v-for="(bookData, id) in books" :bookInfo="bookData" :key="'book_'+id"/>
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
			axios.get('http://localhost:8000/book')
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
</style>
