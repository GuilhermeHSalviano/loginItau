<template>
    <div class="products--container">
        <h3 class="products__title">contrate nossos produtos online</h3>
        <h4 class="products__subtitle">Confira as soluções que o banco Itaú oferece para você</h4>
        <div class="products__box" id="box1">
            <div class="box" id="box__box1">
                <div class="box__text">
                    <p class="text__name">cartões</p>
                    <h4 class="text__title">o cartão de crédito ideal</h4>
                    <p class="text__paragraph">Só quem tem mais de 70 opções de cartões pode ajudar a escolher o cartão que dá match com você.</p>
                    <button class="text__button">peça já o seu</button>
                </div>
            </div>
            <img src="@/assets/images/540x240_mosaic_cartoes.webp" alt="Mosaico de cartões" id="box-img1" class="box__img">
        </div>
        <div class="products__box">
            <div class="box">
                <div class="box__text">
                    <p class="text__name">crédito consignado</p>
                    <h4 class="text__title">Empréstimo Consignado INSS</h4>
                    <p class="text__paragraph">Para aposentados e pensionistas INSS, menores taxas e mais tempo para pagar.</p>
                    <button class="text__button">confira aqui</button>
                </div>
                <img src="@/assets/images/INSS_256x270.webp" alt="" class="box__img">
            </div>
            <div class="box">
                <div class="box__text">
                    <p class="text__name">investimentos</p>
                    <h4 class="text__title">Investimentos a partir de R$1,00</h4>
                    <p class="text__paragraph">Prateleira de produtos de vários gestores do mercado com a segurança e solidez que o Itaú tem.</p>
                    <button class="text__button">confira</button>
                </div>
                <img src="@/assets/images/mobile.webp" alt="" class="box__img">
            </div>
        </div>
        <div class="products__box">
            <div class="box">
                <div class="box__text">
                    <p class="text__name">consórcio</p>
                    <h4 class="text__title">Parcelado não sai caro!</h4>
                    <p class="text__paragraph">Planeje seu imóvel, moto, carro ou veículo pesado sem entrada e sem juros. Consulte as condições.</p>
                    <button class="text__button">simule</button>
                </div>
                <img src="@/assets/images/house.webp" alt="" class="box__img">
            </div>
            <div class="box">
                <div class="box__text">
                    <p class="text__name">câmbio</p>
                    <h4 class="text__title">Faz um câmbio e desliga</h4>
                    <p class="text__paragraph">Até 20% OFF na compra de moeda estrangeira, além dos benefícios que só o Itaú oferece.</p>
                    <button class="text__button">compre agora</button>
                </div>
                <img src="@/assets/images/hand__holding__mobile.webp" alt="" class="box__img">
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @import '@/assets/scss/variables.scss';
    @import '@/assets/scss/other-mixins.scss';

    .products--container{
        @include flex-column;

        .products__title{
            @include subtitle;
        }

        .products__subtitle{
            @include sub-subtitle;

        }

        .products__box{
            display: flex;
            justify-content: space-between;
            margin: 2rem 3vw 2rem 3vw;
            min-height: 15rem;
            width: 94vw;

            .box{
                border: solid grey 1.5px;
                border-radius: 10px;
                display: flex;
                justify-content: space-between;
                min-height: 15rem;
                width: 48.5%;

                .box__text{
                    display: flex;
                    flex-direction: column; 
                    height: 100%;
                    justify-content: space-between;
                    padding-left: 2rem;
                    width: 55%;

                    .text__name{
                        font-family: $basic-font;
                        font-size: 1rem;
                        margin-top: 1rem;
                    }

                    .text__title{
                        font-family: $basic-font;
                        font-size: 1.5rem;
                    }

                    .text__paragraph{
                        font-family: $basic-font;
                        font-size: 1rem;
                        opacity: 75%;
                    }

                    .text__button{
                        background-color: white;
                        border: solid black 1.9px;
                        border-radius: 3px;
                        margin-bottom: 1rem;
                        width: 9vw;
                    }
                }
            }
        }

        #box1{
            align-items: center;
            border: solid grey 1.5px;
            border-radius: 10px;
            display: flex;
            justify-content: space-between;

            #box__box1{
                border: none;
                height: 0;
            }
            
            #box-img1{
                align-self: flex-end;
            }
        }

        .box__img{
            border-radius: 10px;
        }

        
        
    }
</style>