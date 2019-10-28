<template>
	<div>hi {{name}}</div>
</template>

<script>
	export default {
		name: 'Main',
		props: {
			name: String
		}
	}
</script>