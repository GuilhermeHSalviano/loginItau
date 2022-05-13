<template>
	<div id="app">
		<router-view></router-view>
		<!--<home></home>-->
	</div>
</template>
<script>
import {routes} from "./main.js"
export default {
	data(){
		return{
			routes
		}
	}
}
</script>

<style lang="scss">
	@import '@/assets/scss/reset-mixin.scss';

	@include reset-css;
</style>
