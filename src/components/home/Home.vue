<template>
    <div class="home">
        <my-nav></my-nav>
        <slide-show class="slide--component"></slide-show>
        <questoes-do-dia></questoes-do-dia>
    </div>
</template>
<script>
import MyNav from "./menu/MyNav.vue"
import SlideShow from './menu/SlideShow.vue'
import QuestoesDoDia from './QuestoesDoDia.vue'
export default {
    components:{
        MyNav,
        SlideShow,
        QuestoesDoDia
    }
}
</script>
<style scoped lang='scss'>
    .slide--component{
    }
</style>
