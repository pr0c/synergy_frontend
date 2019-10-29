<template>
	<div class="book">
		<div class="picture">
			<img :src="this.$actions + '/images/' + book.picture">
		</div>
		<div class="book-info">
			<div class="title">
				{{ book.title }}
				<font-awesome-icon icon="pen-square" v-on:click="editBook"></font-awesome-icon>
				<font-awesome-icon icon="window-close" v-on:click="deleteBook"></font-awesome-icon>
			</div>
			<div class="description">{{ book.description }}</div>
			<div class="authors" v-if="book.authors && book.authors.length > 0">Authors: 
				<span v-for="(author, id) in book.authors" :key="'author_'+id">
					{{ author.name }}<span v-if="id < book.authors.length - 1">,</span>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import router from '../router'

	export default {
		data() {
			return {
				book: {
					picture: '0.png'
				}
			}
		},
		name: 'BookDetails',
		methods: {
			editBook: function() {
				router.push({ name: 'editbook', params: { id: this.book.id } });
			},
			deleteBook: function() {
				axios.delete(this.$actions + '/book/' + this.book.id)
					.then((response) => {
						router.push({ name: 'books' });
					})
					.catch((error) => {
						console.log(error);
					});
			}
		},
		created() {
			axios.get(this.$actions + '/book/' + this.$route.params.id)
				.then((response) => {
					console.log(response);
					this.book = response['data'];
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}
</script>

<style scoped>
	.book {
		display: flex;
		flex-direction: row;
		margin-top: 100px;
		margin-left: 15px;
	}

	.book-info {
		display: flex;
		flex-direction: column;
		margin-left: 50px;
		width: 70%;
	}

	.book .title {
		font-size: 24px;
	}

	.book .description {
		/* margin: 50px 0 0 5%;
		width: 60%; */
		margin-top: 25px;
	}

	.book .authors {
		margin-top: 30px;
	}

	.book .picture img {
		max-width: 400px;
		max-height: 570px;
	}

	.book .title svg {
		margin-left: 10px;
		cursor: pointer;
	}

	.book .title svg:hover {
		color: rgb(190, 189, 189);
	}
</style>