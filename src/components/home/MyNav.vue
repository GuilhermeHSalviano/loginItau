<template>
    <div class="container--nav">
        <nav class="navigator">
            <img src="@/assets/images/logo-itau.webp" alt="Logomarca Itaú" class="navigator__logo">
            <p>para você</p>
            <p>para empresas</p>
            <p>ajuda</p>
            <p>busca</p>
            <div class="login-area">
                <div class="inputs">
                    <input type="text" class="inputs__input" placeholder="agência">
                    <span>|</span>
                    <input type="text" class="inputs__input" placeholder="conta">
                </div>
                <button class="login-area__login-inactive"></button>
                <button class="login-area__access">+ acessos</button>
                <button class="login-area__account">abra sua conta</button>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style scoped lang='scss'>
    @import '@/assets/scss/variables.scss';
    @import '@/assets/scss/other-mixins.scss';

    .container--nav{
        background-image: linear-gradient($itau-color, #f7892b);
        height: 50vh;
        width: 100%;
        .navigator{
            height: 30%;
            width: 100%;
            @include flex-row;
            .navigator__logo{
                height: 60%;
                margin: 0 5rem 0 5rem;
                object-fit: cover;
            }

            .login-area{
                @include flex-row;
                height: 100%;
                width: 30%;

                .inputs{
                    @include flex-row;
                    background-color: white;
                    border-radius: 5px;
                    height: 50%;
                    margin-right: .5rem;
                    width: 10rem;

                    .inputs__input{
                        border: none;
                        height: 1.5rem;
                        width: 3rem;
                    }
                }

                .login-area__login-active{
                    border: none;
                    border-radius: 5px;
                    height: 50%;
                    margin-right: 4rem;
                    width: 4rem;
                }
                .login-area__login-inactive{
                    cursor: none;
                    background-color: #cacbc8;
                    border: none;
                    border-radius: 5px;
                    height: 50%;
                    margin-right: 4rem;
                    width: 4rem;
                }

                .login-area__access{
                   
                }

                .login-area__account{
                    
                }
            }
        }
    }
</style>