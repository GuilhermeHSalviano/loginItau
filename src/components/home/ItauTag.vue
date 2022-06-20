<template>
    <div class="itau--tag--container">
        <img src="@/assets/images/itau-tag.webp" alt="Imagem ilustrativa da Tag Itaú" class="itau--tag--container__image">
        <div class="itau--tag--container__box">
            <div class="box__text">
                <h4 class="text__title">Tag Itaú</h4>
                <p class="text__paragraph">A tag livre de mensalidade. Peça a sua usando um cartão de crédito Itaú e passe sem filas por onde for.</p>
            </div>
            <button class="box__button">peça já a sua</button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @import '@/assets/scss/variables.scss';
    @import '@/assets/scss/other-mixins.scss';

    .itau--tag--container{
        border: solid grey 1.5px;
        border-radius: 10px;
        display: flex;
        margin: 2.4vw;

        .itau--tag--container__image{
            margin: 2rem;
            border-radius: 10px;
        }

        .itau--tag--container__box{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 45%;
            
            .box__text{
                display: flex;
                flex-wrap: wrap;
                height: 10rem;
                
                .text__title{
                    @include subtitle;
                    margin-left: 0;
                    margin-bottom: 2rem;
                }

                .text__paragraph{
                    @include sub-subtitle;

                    margin-left: 0;
                }
            }

            .box__button{
                background-color: $itau-color;
                border: none;
                border-radius: 5px;
                color: white;
                font-family: $basic-font;
                font-size: 1.5rem;
                height: 3rem;
                width: 12rem;
            }
        }
    }
</style>