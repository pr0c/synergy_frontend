<template>
	<div class="book">
		<div class="book-form">
			<input type="text" v-model="title" placeholder="Title">
			<textarea v-model="description" placeholder="Description"></textarea>
			<input v-model="authors" type="text">
			<button v-on:click="addBook">Create</button>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import router from '../router/'

	export default {
		data: function() {
			return {
				title: '',
				description: '',
				authors: ''
			}
		},
		name: 'CreateBook',
		methods: {
			addBook: function() {
				let params = new URLSearchParams();

				params.append('title', this.title);
				params.append('description', this.description);
				
				axios.post('http://localhost:8000/book', params)
					.then((response) => {
						router.push({ name: 'book', params: { id: response.data.id } });
					})
					.catch((error) => {
						console.log(error);
					})
			}
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
			height: 310px;
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