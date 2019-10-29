<template>
	<div>
		<div class="add-author-link"><router-link to="/author">[ Add author ]</router-link></div>
		<div class="authors">
			<div class="author" v-for="(author, id) in authors" :key="'author_'+id">
				<span>{{ author.name }}</span>
				<font-awesome-icon icon="pen-square" v-on:click="editAuthor(author.id)"></font-awesome-icon>
				<font-awesome-icon icon="times" v-on:click="deleteAuthor(id, author.id)"></font-awesome-icon>
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
				authors: []
			}
		},
		name: 'Authors',
		methods: {
			deleteAuthor: function(id, authorId) {
				axios.delete(this.$actions + '/author/' + authorId)
					.then((response) => {
						this.authors.splice(id, 1);
						console.log(response);
					})
					.catch((error) => {
						console.log(error);
					});
			},
			editAuthor: function(authorId) {
				router.push({ name: 'editauthor', params: { id: authorId } });
			}
		},
		created() {
			axios.get(this.$actions + '/author')
				.then((response) => {
					this.authors = response['data'];
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}
</script>

<style scoped>
	.authors {
		display: flex;
		flex-direction: column;
		margin-left: 30%;
		margin-top: 80px;
		border: 1px solid #d3d3d3;
		width: 35%;
		padding: 25px;
	}

	.author {
		display: flex;
		margin-top: 10px;
	}

	.author svg {
		margin-left: 15px;
		cursor: pointer;
	}

	.add-author-link {
		margin: 15px;
	}

	.add-author-link a {
		text-decoration: none;
		color: #777;
	}

	.add-author-link a:hover {
		color: #333;
	}
</style>