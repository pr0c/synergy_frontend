<template>
	<div class="book">
		<div class="title">
				<span v-on:click="openBook">{{ book.title }}</span>
		</div>
		<div class="book-info">
			<div class="photo">
					<img :src="this.$actions + '/images/' + book.picture">
			</div>
			<div class="description">
					<div>{{ book.description }}</div>
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
				book: {}
			}
		},
		props: {
			bookInfo: {
				default: function() {
					return {}
				}
			}
		},
		name: 'Book',
		methods: {
			openBook: function() {
				router.push({ name: 'book', params: { id: this.book.id } });
			}
		},
		mounted() {
			if(this.$route.params.id) {
				this.id = this.$route.params.id;
				axios.get('http://localhost:8000/book/'+this.id)
					.then((response) => {
						this.book = response['data'];
					})
					.catch((error) => {
						console.log(error);
					})
			}
			else this.book = this.bookInfo;
		}
	}
</script>

<style scoped>
	.book {
		position: relative;
		border: 1px solid #d3d3d3;
		width: 500px;
		height: 300px;
		border-radius: 3px;
		padding: 15px;
		box-shadow: 0 0 4px #d3d3d3;
	}

	.book .title {
		border-bottom: 1px solid #d3d3d3;
		padding-bottom: 10px;
		font-size: 18px;
	}

	.book .title span {
		cursor: pointer;
	}

	.book .title:hover {
		color: rgb(73, 73, 73);
	}

	.book .photo img {
		max-width: 140px;
		max-height: 200px;
	}

	.book .description {
		margin-left: 10px;
		max-width: 350px;
		word-wrap: break-word;
	}

	.book .book-info {
		display: flex;
		flex-direction: row;
		margin-top: 5px;
	}

	.book .authors {
		bottom: 5px;
	}

	.book .authors p {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>