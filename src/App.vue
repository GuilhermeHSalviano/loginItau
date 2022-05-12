<template>
	<div>
		<home></home>
	</div>
</template>

<script>
import Home from './components/home/Home.vue'
export default {
	components:{
		Home
	}
}
</script>

<style lang="scss">
	@import '@/assets/scss/reset-mixin.scss';

	@include reset-css;
</style>
