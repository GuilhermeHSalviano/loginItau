<template>
    <div class="home">
        <my-nav></my-nav>
        <slide-show></slide-show>
        <issues></issues>
        <online-products></online-products>
    </div>
</template>
<script>
import MyNav from "./menu/MyNav.vue"
import SlideShow from './menu/SlideShow.vue'
import Issues from './Issues.vue'
import OnlineProducts from './OnlineProducts.vue'
export default {
    components:{
        MyNav,
        SlideShow,
        Issues,
        OnlineProducts
    }
}
</script>
<style scoped lang='scss'>
    .home{
        height: 100%;
        overflow: hidden;
    }
</style>
