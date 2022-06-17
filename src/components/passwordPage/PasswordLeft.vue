<template>
    <div class="left">
        <div class="text">
            <h2 class="words" id="title">Teclado virtual</h2>
            <p class="words">digite sua senha no teclado virtual:</p>
            <input type="text" aria-required="true" placeholder="senha eletrônica" v-model="input" class="text__input">
            <div class="phrase--container">
                <p class="phrase--container__bolder words">senha eletrônica:</p>
                <p class="words">usada para acessar à internet</p>
            </div>
            <div class="phrase--container">
                <p class="phrase--container__bolder words">senha do cartão:</p>
                <p class="words">usada para acessar o caixa eletrônico</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:[
        'inputPassword'
    ],
    computed:{
        input(){
            let a = this.inputPassword.toString()
            const input = a.replace(/,/g, '')
            
            return input
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "@/assets/scss/other-mixins.scss";
    @import "@/assets/scss/variables.scss";

    .left{
        @include flex-row;
        height: 100%;
        width: 20%;

        .text{
            @include flex-column;
            align-items: flex-start;
            height: 80%;
            padding-left: 3rem;
            width: 100%;

            #title{
                font-size: 1.2rem;
            }

            .words{
                font-family: $basic-font;
                font-size: 13px;
            }

            .text__input{
                pointer-events: none;
            }

            .phrase--container{
                display: flex;
                flex-wrap: wrap;

                .phrase--container__bolder{
                    font-weight: 800;
                    margin-right: 5px;
                }
            }
        }
    }
</style>