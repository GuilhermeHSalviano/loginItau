<template>
    <div class="cards--container">
        <h3 class="cards--title">resolva as questões do dia</h3>
        <div class="cards--box">
            <div class="cards">
                <h4 class="cards__title">boletos</h4>
                <p class="cards__paragraph">emita boletos ou atualize o seu boleto Itaú vencido</p>
                <button class="cards__button">saiba mais</button>
            </div>
            <div class="cards">
                <h4 class="cards__title">comprovantes</h4>
                <p class="cards__paragraph">gere uma 2ª via do seu comprovante de pagamento</p>
                <button class="cards__button">confira</button>
            </div>
            <div class="cards">
                <h4 class="cards__title">Open Finance</h4>
                <p class="cards__paragraph">compartilhe e tenha mais ofertas personalizadas</p>
                <button class="cards__button">compartilhe</button>
            </div>
            <div class="cards">
                <h4 class="cards__title">aplicativos</h4>
                <p class="cards__paragraph">os apps do banco Itaú quando e onde você precisar</p>
                <button class="cards__button">saiba mais</button>
            </div>
            <div class="cards">
                <h4 class="cards__title">agências</h4>
                <p class="cards__paragraph">busque a agência Itaú mais próxima de você</p>
                <button class="cards__button">confira</button>
            </div>
            <div class="cards">
                <h4 class="cards__title">ajuda</h4>
                <p class="cards__paragraph">atender você é o mais importante pra nós</p>
                <button class="cards__button">saiba mais</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    @import '@/assets/scss/other-mixins.scss';
    @import '@/assets/scss/variables.scss';

    .cards--container{
        @include flex-column;
        background-color: #f8eded;
        width: 100;

        .cards--title{
            font-family: $basic-font;
            font-size: 1.6rem;
            font-weight: 900;
            margin: 1rem 1rem 1rem 5rem;
            width: 95%;
        }

        .cards--box{
            display: flex;
            flex-direction: row;
            margin-left: 5rem;
            margin-bottom: 2rem;
            width: 100%;

            .cards{
                background: white;
                border: solid none;
                border-radius: 3px;
                box-shadow: 2px 2px 5px;
                display: flex;
                flex-direction: column;
                height: 10rem;
                justify-content: space-around;
                margin: 5px 10px 5px 10px;
                width: 7.5rem;

                .cards__title{
                    font-family: $basic-font;
                    margin: 5px .5rem 5px .5rem; 
                }

                .cards__paragraph{
                    font-family: "Roboto", sans-serif;
                    font-size: .87rem;
                    opacity: 60%;
                    margin: 1rem .5rem 1rem .5rem;
                }

                .cards__button{
                    align-self: center;
                    border: solid 1px rgb(45, 45, 219);
                    border-radius: 4px;
                    color: rgb(45, 45, 219);
                    height: 2rem;
                    margin-bottom: .5rem;
                    width: 80%;
                }
            }
        }
    }
</style>