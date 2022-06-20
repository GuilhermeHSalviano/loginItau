<template>
    <div>
        <div class="cards--container">
            <h3 class="cards--container__title">confira nossos cartões de crédito mais pedidos da semana</h3>
            <div class="card__box">
                <div class="card">
                    <div class="card__text">
                        <h4 class="card__title">Cartões Itaú</h4>
                        <p class="card__paragraph">Escolha o cartão que dá match com você</p>
                    </div>
                    <img src="@/assets/images/itau-cards.webp" alt="Cartões Itaú" class="card__image">
                    <button class="card__button">peça o seu</button>
                </div>
                <div class="card">
                    <div class="card__text">
                        <h4 class="card__title">Pão de Açúcar Mais Platinum</h4>
                        <p class="card__paragraph">Acumule 1 ponto a cada R$ 1,00 em compras</p>
                    </div>
                    <img src="@/assets/images/pao-de-acucar-card.webp" alt="Cartão Pão de Açúcar Mais Platinum" class="card__image">
                    <button class="card__button">peça já o seu</button>
                </div>
                <div class="card">
                    <div class="card__text">
                        <h4 class="card__title">Click Visa Platinum</h4>
                        <p class="card__paragraph">Anuidade grátis pra sempre e limite de até R$10 mil.</p>
                    </div>
                    <img src="@/assets/images/click-visa-platinum-card.webp" alt="Cartão Visa Platinum" class="card__image">
                    <button class="card__button">peça já o seu</button>
                </div>
                <div class="card">
                    <div class="card__text">
                        <h4 class="card__title">Conta e cartão iti</h4>
                        <p class="card__paragraph">Conta digital grátis e cartão sem anuidade</p>
                    </div>
                    <img src="@/assets/images/iti-card.webp" alt="Cartão Iti" class="card__image">
                    <button class="card__button">peça já o seu</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @import '@/assets/scss/variables.scss';
    @import '@/assets/scss/other-mixins.scss';

    .cards--container{
        background-color: white;
        display: flex;

        .cards--container__title{
            @include subtitle;
            margin-left: 2.4vw;
        }

        .card__box{
            display: flex;
            margin: 1vh 2.4vw 1vh 2.4vw;
            justify-content: space-between;

            .card{
                border: solid grey 1.5px;
                border-radius: 10px;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                width: 20%;

               .card__text{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    margin-left: 5%;
                    height: 70%;
                    width: 45%;

                    .card__title{
                        font-family: $basic-font;
                    }

                    .card__paragraph{
                        font-family: $small-font;
                    }

               }
               .card__image{
                    border-radius: 10px;
                    object-fit: cover;
                    width: 50%;
               }

               .card__button{
                   background-color: white;
                   border: solid 1.5px grey;
                   border-radius: 10px;
                   height: 2rem;
                   margin: 0 10% 5% 10%;
                   width: 80%;
               }
            }
        }
    }

</style>

    
