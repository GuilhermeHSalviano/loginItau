<template>
    <div>
        <my-nav></my-nav>
        <slide-show></slide-show>
    </div>
</template>
<script>
import MyNav from "./menu/MyNav.vue"
import SlideShow from './menu/SlideShow.vue'
export default {
    components:{
        MyNav,
        SlideShow
    }
}
</script>
<style scoped>

</style>