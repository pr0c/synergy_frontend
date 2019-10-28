<template>
  <div id="app">
		<Navbar />
		<router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import './assets/style.css'

export default {
	name: 'app',
	components: {
		Navbar
	}
}
</script>


