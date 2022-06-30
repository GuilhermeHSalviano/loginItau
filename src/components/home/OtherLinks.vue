<template>
    <div class="links">
        <div class="links__itau">
            <h3 class="itau__title">itaú</h3>
        </div>
        <div class="links__boxes">
            <div class="boxes__box">
                <h3 class="box__title">nossos produtos</h3>
                <p class="box__paragraph">conta corrente</p>
                <p class="box__paragraph">cartões de crédito</p>
                <p class="box__paragraph">consórcio</p>
                <p class="box__paragraph">seguros</p>
                <p class="box__paragraph">investimentos</p>
                <p class="box__paragraph">renegociação</p>
            </div>
            <div class="boxes__box">
                <h3 class="box__title">Itaú</h3>
                <p class="box__paragraph">relações com investidores</p>
                <p class="box__paragraph">carreiras</p>
                <p class="box__paragraph">imprensa</p>
                <p class="box__paragraph">sustentabilidade</p>
                <p class="box__paragraph">integridade e Ética</p>
                <p class="box__paragraph">análises econômicas</p>
                <p class="box__paragraph">termos de uso</p>
                <p class="box__paragraph">privacidade</p>
                <p class="box__paragraph">estatuto de acessibilidade</p>
            </div>
            <div class="boxes__box">
                <h3 class="box__title">ajuda</h3>
                <p class="box__paragraph">central de ajuda</p>
                <p class="box__paragraph">canais Itaú</p>
                <p class="box__paragraph">encontre agências</p>
                <p class="box__paragraph">segurança</p>
                <p class="box__paragraph">acessos não correntista</p>
                <p class="box__paragraph">DECON-CE</p>
                <h3 class="box__title">veja também</h3>
                <p class="box__paragraph">para você</p>
                <p class="box__paragraph">para empresas</p>
                <p class="box__paragraph">para poder público</p>
                <p class="box__paragraph">pacotes e tarifas</p>
            </div>
            <div class="boxes__box">
                <h3 class="box__title">fale com o Itaú</h3>
                <p class="box__paragraph">sac 0800 728 0728</p>
                <p class="box__paragraph">ouvidoria 0800 570 0011</p>
                <p class="box__paragraph">denúncia</p>
                <p class="box__paragraph">envie sua mensagem</p>
                <h3 class="box__title">acompanhe</h3>
                <h3 class="box__title">baixe o app</h3>
            </div>
        </div>
        <div class="links__final--part">
            <h3 class="final--part__subtitle">Itaú em outros países</h3>
            <h3 class="final--part__subtitle">© 2021 Itaú Unibanco Holding S.A. CNPJ: 60.872.504/0001-23</h3>
            <h4 class="final--part__sub--subtitle">Praça Alfredo Egydio de Souza Aranha, 100, Torre Olavo Setubal, Parque Jabaquara - CEP 04344-902 - São Paulo - Brasil</h4>
        </div>
        <div class="links__footer">
            <div class="footer__box">
                <p>abra sua conta</p>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @import '@/assets/scss/variables.scss';
    @import '@/assets/scss/other-mixins.scss';

    .links{
        background-color: rgba(0, 0, 0, 0.521);

        .links__itau{
            width: 100%;
        }


        .links__boxes{
            display: flex;

            .boxes__box{
                display: flex;
                flex-direction: column;
                margin-left: 5%;
                width: 20%;

                .box__title{
                    color: white;
                    font-family: $basic-font;
                    font-size: 1.12rem;
                    font-weight: 900;
                    margin: 20px 0 20px 0;
                }

                .box__paragraph{
                    color: white;
                    font-family: $basic-font;
                    font-weight: 100;
                    margin: 5px 0 5px 0;
                }
            }
        }

        .links__final--part{
            border-top: solid rgb(175, 165, 165) 1px;
            display: flex;
            flex-wrap: wrap;
            margin-top: 2rem;
            padding-top: 2rem;

            .final--part__subtitle{
                color: white;
                font-family: $basic-font;
                margin-bottom: 1rem;
                width: 50%;

            }

            .final--part__subtitle:nth-child(1){
                padding-left: 5rem;
                width: calc(50% - 5rem);
            }

            .final--part__sub--subtitle{
                color: white;
                font-family: $basic-font;
                font-size: 10px;
                margin-left: 50%;
            }
        }

        .links__footer{
            margin-top: 4rem;
            .footer__box{
                align-items: center;
                background: $itau-color;
                display: flex;
                height: 3rem;
                justify-content: center;

                p{
                    color: white;
                    font-family: $basic-font;
                    font-size: 1.3rem;
                }
            }
        }    
    }
</style>