<template>
     <div class="slides__slide">
        <div class="slide__left--div">
            <div class="left--div__container">
                <h3 id="title">Assistências para Pet do Itaú</h3>
                <p id="subtitle">seu amor de quatro patas merece os melhores cuidados</p>
                <button class="left--div__button">saiba mais</button>
            </div>
        </div>
        <div class="slide__right--div">
            <img src="@/../static/dog.webp" alt="Imagem de um casal de idosos." id="banner">
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