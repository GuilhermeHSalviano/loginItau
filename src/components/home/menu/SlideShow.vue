<template>
    <div class="slide--show--body">
        <div class="content">
            <div class="slide--container">
                <input type="radio" class="radio--inputs" id="slide1" name="input" checked value="firstSlide" v-model="radioInput">
                <input type="radio" class="radio--inputs" id="slide2" name="input" value="secondSlide" v-model="radioInput">
                <input type="radio" class="radio--inputs" id="slide3" name="input" value="thirdSlide" v-model="radioInput">
                <input type="radio" class="radio--inputs" id="slide4" name="input" value="fourthSlide" v-model="radioInput">
                <slide-1 class="container__slide s1"></slide-1>
                <slide-2 class="container__slide"></slide-2>
                <slide-3 class="container__slide"></slide-3>
                <slide-4 class="container__slide"></slide-4>
            </div>
        </div>
        <div class="container__navigation">
            <label for="slide1" class="switch enabled" data-slide='first'>Abra sua conta online</label>
            <label for="slide2" class="switch" data-slide='second'>Empréstimo consignado</label>
            <label for="slide3" class="switch" data-slide='third'>Assistências para pet do Itaú</label>
            <label for="slide4" class="switch" data-slide='fourth'>Pensando em comprar um carro?</label>
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
    },
    data(){
        return{
            radioInput: ''
        }
    },
    watch:{
        radioInput(){
            const radio = this.radioInput
            const slide1 = {element: document.querySelector("[data-slide='first']"), value: 'firstSlide'}
            const slide2 = {element: document.querySelector("[data-slide='second']"), value: 'secondSlide' }
            const slide3 = {element: document.querySelector("[data-slide='third']"), value: 'thirdSlide'}
            const slide4 = {element: document.querySelector("[data-slide='fourth']"), value: 'fourthSlide'}
            const listSlides = [slide1, slide2, slide3, slide4]
            listSlides.forEach(function(currentValue){
                if(radio == currentValue.value){
                    currentValue.element.classList.toggle('enabled')
                    console.log(currentValue)
                } else{
                    if(currentValue.element.classList.contains('enabled')){
                        currentValue.element.classList.remove('enabled')
                    }
                }
            })
        }
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

                .container__slide{
                    transition: .6s;
                    transition-timing-function: ease-in-out;
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
                @include secondary-font;
                cursor: pointer;
                height: auto;
                padding: 7px;
                text-align: center;
            }

            .enabled{
                background-color: #33446f;
            }
            

            .switch:first-child{
                border-top-right-radius: 7px;
                border-top-left-radius: 7px;
            }

            .switch:last-child{
                border-bottom-right-radius: 7px;
                border-bottom-left-radius: 7px;
            }

            .switch:hover{
                background-color: #6784cc;
                
            }
        }
    }

    
    
</style>