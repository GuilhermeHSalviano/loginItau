<template>
    <div class="container">
        <div class="content">
            <div class="slide--container">
                <input type="radio" class="radio--inputs" id="slide1" name="input" checked>
                <input type="radio" class="radio--inputs" id="slide2" name="input">
                <input type="radio" class="radio--inputs" id="slide3" name="input">
                <input type="radio" class="radio--inputs" id="slide4" name="input">
                <slide-1 class="container__slide s1"></slide-1>
                <slide-2></slide-2>
                <slide-3></slide-3>
                <slide-4></slide-4>
            </div>
        </div>
        <div class="container__navigation">
            <label for="slide1" class="switch">Abra sua conta online</label>
            <label for="slide2" class="switch">Empréstimo consignado</label>
            <label for="slide3" class="switch">Assistências para pet do Itaú</label>
            <label for="slide4" class="switch">Pensando em comprar um carro?</label>
        </div>
    </div>
</template>
<script>
import Slide1 from "./slides/Slide1.vue"
import Slide2 from "./slides/Slide2.vue"
import Slide3 from "./slides/Slide3.vue"
import Slide4 from "./slides/Slide4.vue"

export default {
    components:{
        Slide1,
        Slide2,
        Slide3,
        Slide4
    }
}
</script>
<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/other-mixins.scss";

    .container{
        display: inline;
        position: absolute;
        top: 15vh;
        width: 100%;
        overflow: hidden;

        .content{
        background-image: linear-gradient($itau-color, #f8913a);
        display: flex;
        height: 70vh;
        width: 400%;

            .slide--container{
                display: flex;
                height: 100%;
                width: 100%;

                #slide1:checked ~ .s1{
                    margin-left: 0;
                }
                #slide2:checked ~ .s1{
                    margin-left: -25%;
                }
                #slide3:checked ~ .s1{
                    margin-left: -50%;
                }
                 #slide4:checked ~ .s1{
                    margin-left: -75%;
                }
            
            .radio--inputs{
                display: none;
            }
            }
        }

        .container__navigation{
            background-color: white;
            border-radius: 7px;
            display: flex;
            flex-direction: column;
            height: auto;
            right: 5rem;
            position: absolute;
            top: calc((70vh / 2) - 6rem);
            width: 10rem;
            z-index: 2;

            

            .switch{
                cursor: pointer;
                height: 3rem;
                text-align: center;
            }
            .switch:hover{
                background-color: #33446f;
            }
        }
    }

    
    
</style>