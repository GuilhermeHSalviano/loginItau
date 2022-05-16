<template>
    <div class="left">
        <div class="text">
            <h2>Teclado virtual</h2>
            <p>digite sa senha no teclado virtual:</p>
            <input type="text">
            <div class="phrase--container">
                <p class="phrase--container__bolder">senha eletrônica:</p>
                <p>usada para acessar à internet</p>
            </div>
            <div class="phrase--container">
                <p class="phrase--container__bolder">senha do cartão:</p>
                <p>usada para acessar o caixa eletrônico</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    @import "@/assets/scss/other-mixins.scss";

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