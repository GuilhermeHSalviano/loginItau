<template>
    <div class="home">
        <my-nav></my-nav>
        <slide-show></slide-show>
        <issues></issues>
        <online-products></online-products>
        <credit-cards></credit-cards>
        <itau-tag></itau-tag>
        <apps-itau></apps-itau>
        <location></location>
        <other-links></other-links>
    </div>
</template>
<script>
import MyNav from "./menu/MyNav.vue"
import SlideShow from './menu/SlideShow.vue'
import Issues from './Issues.vue'
import OnlineProducts from './OnlineProducts.vue'
import CreditCards from './CreditCards.vue'
import ItauTag from './ItauTag.vue'
import AppsItau from './AppsItau.vue'
import Location from './Location.vue'
import OtherLinks from './OtherLinks.vue'
export default {
    components:{
        MyNav,
        SlideShow,
        Issues,
        OnlineProducts,
        CreditCards,
        ItauTag,
        AppsItau,
        Location,
        OtherLinks
    }
}
</script>
<style scoped lang='scss'>
    .home{
        height: 100%;
        overflow: hidden;
    }
</style>
