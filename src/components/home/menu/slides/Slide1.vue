<template>
    <div class="slides__slide s1">
        <div class="slide__left--div">
            <div class="left--div__container">
                <h3 id="title">Abra sua conta online</h3>
                <p id="subtitle">Uma conta corrente digital com a segurança do Itaú</p>
                <button class="left--div__button">seja Itaú</button>
            </div>
        </div>
        <div class="slide__right--div">
            <img src="@/../static/banner-abre-conta.png" alt="Imagem sugerindo a abertura de conta no banco." id="banner">
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
    height: 100%;
    width: 25%;

    .slide__left--div{
        align-items: center;
        display: flex;
        height: 100%;
        justify-content: center;
        width: 40%;
       

        .left--div__container{
            @include flex-column;
            @include secondary-font;
            color: white;

            #title{
                font-size: 2.5rem;
            }

            #subtitle{
                font-size: 1.3rem;
            }

            .left--div__button{
                @include secondary-font;
                background-color: white;
                border: none;
                border-radius: 7px;
                color: $itau-color;
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