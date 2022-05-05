<template>
    <div class="container">
        <div class="content">
            <div class="slide--container">
                <input type="radio" class="radio--inputs" id="slide1">
                <input type="radio" class="radio--inputs" id="slide2">
                <input type="radio" class="radio--inputs" id="slide3">
                <input type="radio" class="radio--inputs" id="slide4">
                <slide-1></slide-1>
                <div class="slides__slide">

                </div>
                <div class="slides__slide">

                </div>
                <div class="slides__slide">

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Slide1 from "./slides/Slide1.vue"

export default {
    components:{
        Slide1,
    }
}
</script>
<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/other-mixins.scss";

    .container{
        position: absolute;
        top: 15vh;
        width: 100%;

        .content{
        background-image: linear-gradient($itau-color, #f8913a);
        display: flex;
        height: 70vh;
        overflow: hidden;
        width: 400%;

        .slide--container{
            display: flex;
            height: 100%;
            width: 100%;
           
           .radio--inputs{
               display: none;
           }
        }
        
    }

    }

    
    
</style>