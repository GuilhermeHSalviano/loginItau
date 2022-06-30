<template>
    <div class="location">
        <h4 class="location__title">Qual é a agência Itaú mais próxima?</h4>
        <div class="location__search">
            <input type="text" class="search__input" placeholder="busque por endereço, agência, CEP">
            <button class="search__button">buscar</button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @import '@/assets/scss/variables.scss';
    @import '@/assets/scss/other-mixins.scss';

    .location{
        background-blend-mode: darken;
        background-image:  linear-gradient(rgba(0, 0, 0, 0.521), rgba(0, 0, 0, 0.521)), url("../../assets/images/google-maps.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .location__title{
            color: white;
            font-family: $basic-font;
            font-size: 2rem;
            margin-bottom: 3rem;
            margin-top: 3rem;
            text-align: center;
        }

        .location__search{
            display: flex;
            justify-content: space-evenly;
            padding-bottom: 5rem;
            width: 100%;

            .search__input{
                font-family: $basic-font;
                font-size: 1rem;
                height: 2rem;
                width: 70%;
            }

            .search__button{
                background: none;
                border: solid white 1.9px;
                border-radius: 5px;
                color: white;
                font-family: $basic-font;
                font-size: 1.3rem;
                width: 10rem;
            }
        }
    }
    
</style>