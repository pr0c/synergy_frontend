<template>
	<div class="tagbox">
		<div class="input">
			<div class="tags">
				<div class="tag" v-for="(tag, id) in tags" :key="'tag_'+id">
					<div class="text">{{ tag.name }}</div>
					<div class="control"><font-awesome-icon icon="times" v-on:click="removeTag(id)" /></div>
				</div>
			</div>
			<div class="box-control">
				<font-awesome-icon icon="sort-down" v-on:click="openResults"></font-awesome-icon>
			</div>
		</div>
		<transition name="slide">
			<div class="results" v-if="opened">
				<div class="items">
					<div class="item" v-for="(item, id) in results" :key="'item_'+id" v-on:click="itemChoosed(id)">{{ item.name }}</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	export default {
		name: 'MultiTagBox',
		data() {
			return {
				tags: [],
				results: [],
				opened: false
			}
		},
		props: {
			items: {
				default: function() {
					return []
				}
			},
			choosed_items: { 
				default: function() {
					return []
				}
			}
		},
		methods: {
			removeTag: function(tagId) {
				this.results.push(this.tags[tagId]);
				this.tags.splice(tagId, 1);
				this.$emit('items-changed', this.tags);
			},
			openResults: function() {
				if(this.results && this.results.length > 0 && !this.opened) this.opened = true;
				else if(this.opened) this.opened = false;
			},
			itemChoosed: function(itemId) {
				this.tags.push(this.results[itemId]);
				this.results.splice(itemId, 1);
				this.$emit('items-changed', this.tags);
				if(this.results.length == 0) this.opened = false;
			}
		},
		mounted() {
			this.results = this.items;
		},
		watch: {
			items: { 
				handler: function(newVal) {
					this.results = newVal;
					console.log(newVal);
				},
				deep: true
			},
			choosed_items: {
				handler: function(newVal) {
					this.tags = newVal;
				},
				deep: true
			}
		}
	}
</script>

<style scoped>
	.tagbox {
		border: 1px solid #d3d3d3;
		height: 35px;
		position: relative;
	}

	.tagbox ::-webkit-scrollbar {
    height: 3px !important;
	}

	.tagbox .input {
		display: flex;
		flex-direction: row;
		height: 100%;
	}

	.tagbox .box-control {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 10%;
	}

	.tagbox .box-control svg {
		cursor: pointer;
	}

	.tags {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 100%;
		width: 90%;
		overflow-y: hidden;
		overflow-x: auto;
	}

	.tags .tag {
		display: flex;
		background-color: #f7f5f5;
		border: 1px solid #d3d3d3;
		padding: 3px 8px 3px 8px;
		border-radius: 8px;
		margin-left: 3px;
		cursor: pointer;
		height: 18px;
		user-select: none;
	}

	.tags .tag .text {
		width:max-content;
	}

	.tags .tag .control {
		margin-left: 10px;
	}

	.tags .tag svg:hover {
		color: #a8a5a5;
	}

	.results {
		border: 1px solid #d3d3d3;
		padding: 1px;
		transform-origin: top;
		transition: transform .15s ease-in-out;
		background-color: white;
		position: absolute;
		width: 99%;
		max-height: 150px;
		overflow-y: auto;
	}

	.results .items {
		padding: 3px 5px 3px 5px;
	}

	.results .items .item {
		margin-top: 5px;
		padding: 3px 5px 3px 5px;
		border: 1px solid #e8e8e8;
		cursor: pointer;
	}

	.results .items .item:hover {
		background-color: #f7f3f3;
	}

	.slide-enter, .slide-leave-to {
    transform: scaleY(0);
	}
</style>