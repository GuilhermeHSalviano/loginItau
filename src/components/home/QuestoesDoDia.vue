<template>
    <div class="cards--container">
        <h3>resolva as questões do dia</h3>
        <div class="cards">
            <h4></h4>
            <p></p>
            <button></button>
        </div>
        <div class="cards">
            <h4></h4>
            <p></p>
            <button></button>
        </div>
        <div class="cards">
            <h4></h4>
            <p></p>
            <button></button>
        </div>
        <div class="cards">
            <h4></h4>
            <p></p>
            <button></button>
        </div>
        <div class="cards">
            <h4></h4>
            <p></p>
            <button></button>
        </div>
        <div class="cards">
            <h4></h4>
            <p></p>
            <button></button>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    @import '@/assets/scss/other-mixins.scss';

    .cards--container{
        @include flex-row;
        background: yellow;
        height: 10vh;
        width: 100;
    }
</style>