<template>
     <div class="slides__slide">
        <div class="slide__left--div">
            <div class="left--div__container">
                <h3 id="title">pensando em comprar um carro?</h3>
                <p id="subtitle">conte com parcelas que cabem no seu bolso</p>
                <button class="left--div__button">simule agora</button>
            </div>
        </div>
        <div class="slide__right--div">
            <img src="@/../static/hand-holding-a-key.webp" alt="Uma mão segurando a chave de um carro." id="banner">
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang='scss'>
    @import "@/assets/scss/variables.scss";
    @import "@/assets/scss/other-mixins.scss";

    .slides__slide{
        display: flex;
        width: 25%;

        .slide__left--div{
            align-items: center;
            background-color: white;
            display: flex;
            justify-content: center;
            width: 40%;

            .left--div__container{
                @include flex-column;

                #title{
                    @include secondary-font;
                    font-size: 2.5rem;
                    margin-bottom: 2rem;
                    text-align: center;
                }

                #subtitle{
                    @include secondary-font;
                    font-size: 1.3rem;
                }

                .left--div__button{
                   @include secondary-font;
                    background-color: $itau-color;
                    border: none;
                    border-radius: 7px;
                    color: white;
                    height: 2.5rem;
                    font-size: 1rem;
                    font-weight: 700;
                    margin: 2rem;
                    width: 15rem;
                }
            }
        }

        .slide__right--div{
            background-color: yellow;
            height: 100%;
            width: 60%;

        #banner{
            object-fit: cover;
            height: 100%;
            width: 100%;
        }
        }
    }

</style>