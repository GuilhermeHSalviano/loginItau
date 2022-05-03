<template>
    <div class="container">
        <div class="slide--container">
            <input type="radio" class="radio--inputs" id="slide1">
            <input type="radio" class="radio--inputs" id="slide2">
            <input type="radio" class="radio--inputs" id="slide3">
            <input type="radio" class="radio--inputs" id="slide4">
            <div class="slides__slide s1">

            </div>
            <div class="slides__slide">

            </div>
            <div class="slides__slide">

            </div>
            <div class="slides__slide">

            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="scss">
@import "@/assets/scss/variables.scss";

    .container{
        background-image: linear-gradient($itau-color, #f8913a);
        display: flex;
        height: 70vh;
        position: absolute;
        top: 15vh;
        width: 100%;

        .slide--container{
            overflow: hidden;
           
           .radio--inputs{
               display: none;
           }
        }
        
    }
    
</style>