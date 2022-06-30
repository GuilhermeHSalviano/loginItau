<template>
    <div class="apps--container">
        <h3 class="apps--container__title">resolva tudo pelos apps</h3>
        <h4 class="apps--container__subtitle">Com os aplicativos do banco Itaú, você faz tudo pelo seu celular!</h4>
        <div class="apps--container__box">
            <img src="@/assets/images/itau-logo.webp" alt="Logo App do Itaú" class="box__img">
            <img src="@/assets/images/itau-cartoes.png" alt="Logo do App Itaú Cartões" class="box__img">
            <img src="@/assets/images/itau-ion.webp" alt="Logo do App Itaú Ion" class="box__img">
            <img src="@/assets/images/itau-personalite.webp" alt="Logo do App Itaú Personalité" class="box__img">
            <img src="@/assets/images/itau-empresas.webp" alt="Logo do App Itaú Empresas" class="box__img">
        </div>
        <button class="apps--container__button">conheça os canais</button>
    </div>
</template>
<style lang="scss" scoped>
    @import '@/assets/scss/variables.scss';
    @import '@/assets/scss/other-mixins.scss';

    .apps--container{
        display: flex;
        flex-direction: column;

        .apps--container__title{
            @include subtitle;
        }

        .apps--container__subtitle{
            @include sub-subtitle;
        }

        .apps--container__box{
            display: flex;
            justify-content: space-around;
            margin-bottom: 2rem;
            margin-top: 2rem;

            .box__img{
                width: 6rem;
            }

            .box__img:nth-child(3){
                border-radius: 20px;
            }
        }

        .apps--container__button{
            align-self: center;
            background-color: white;
            border: solid 1.99px rgb(12, 57, 107);
            border-radius: 5px;
            color: rgb(12, 57, 107);
            font-family: $basic-font;
            height: 2.5rem;
            margin-bottom: 4rem;
            width: 15%;
        }
    }

</style>