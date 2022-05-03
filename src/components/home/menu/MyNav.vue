<template>
    <div class="container--nav">
        <nav class="navigator">
            <img src="@/assets/images/logo-itau.webp" alt="Logomarca Itaú" class="navigator__logo">
            <p class="navigator__links">para você</p>
            <p class="navigator__links">para empresas</p>
            <p class="navigator__links">ajuda</p>
            <p class="navigator__links">busca</p>
            <div class="login-area">
                <div class="inputs">
                    <input type="text" class="inputs__input" placeholder="agência" v-model="agency" maxlength="4" id="agency">
                    <span>|</span>
                    <input type="text" class="inputs__input" placeholder="conta" v-model="account" maxlength="6" id="account">
                </div>
                <button id="button--login" class="login-area__login-inactive"></button>
                <div class="login--buttons">
                    <button class="login--buttons__access">+ acessos</button>
                    <button class="login--buttons__account">abra sua conta</button>
                </div>
            </div>
        </nav>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            agency: '',
            account: '',
        }
    },
    computed:{
        //It is combined with the watcher bellow
        combined(){
            return [this.agency, this.account]
        }
    },
    watch:{
        //It changes the classes of login button
        combined(value){
            const button = document.getElementById('button--login')
            if(value[0].length === 4 && value[1].length === 6){
                button.classList.toggle('login-area__login-active')
                button.classList.toggle('login-area__login-inactive')
            } 
            if(value[0].length + value[1].length < 10){
                button.classList.add('login-area__login-inactive')
                button.classList.remove('login-area__login-active')
            }

            if(value[0].length == 4){
                const account = document.getElementById("account")
                account.focus()
            }
            if(value[1].length == 6 && value[0].length == 4){
                button.focus()
            }
        }
    }
}
</script>
<style scoped lang='scss'>
    @import '@/assets/scss/variables.scss';
    @import '@/assets/scss/other-mixins.scss';

    .container--nav{
        background-color: $itau-color;
        display: flex;
        height: 15vh;
        width: 100%;
        .navigator{
            height: 15%;
            width: 100%;
            position: fixed;
            top: 0;
            right: 0;
            @include flex-row;
            .navigator__logo{
                height: 60%;
                margin: 0 5rem 0 5rem;
                object-fit: cover;
            }

            .navigator__links{
                @include main-font;
            }

            .login-area{
                @include flex-row;
                height: 100%;
                width: 35%;

                .inputs{
                    @include flex-row;
                    background-color: white;
                    border-radius: 5px;
                    height: 50%;
                    margin-right: .5rem;
                    width: 10rem;

                    .inputs__input{
                        color: grey;
                        border: none;
                        font-size: .9rem;
                        height: 1.5rem;
                        width: 3rem;
                    }
                }

                .inputs__input::-webkit-input-placeholder{
                    color: grey;
                }

                .login-area__login-active{
                    background-color: white;
                    border: none;
                    border-radius: 5px;
                    height: 50%;
                    width: 4rem;
                }

                .login-area__login-active::before{
                    color: $itau-color;
                    content:"➭";
                    font-size: 1.5rem;
                }

                .login-area__login-inactive{
                    cursor: none;
                    background-color: #cacbc8;
                    border: none;
                    border-radius: 5px;
                    height: 50%;
                    width: 4rem;
                }
                .login-area__login-inactive::before{
                    color: white;
                    content:'⊗';
                    font-size: 1.5rem;
                }

                .login--buttons{
                    @include flex-row;
                    align-items: center;
                    height: 100%;

                    .login--buttons__access{
                        @include main-font;

                        background-color: transparent;
                        border: none;
                        color: white;
                        cursor: pointer;
                        margin-left: 1rem;
                    }

                    .login--buttons__account{
                        @include main-font;

                        background-color: transparent;
                        border: solid;
                        border-width: 1.5px;
                        border-color: white;
                        border-radius: 10px;
                        color: white;
                        height: 50%;
                    }

                }

                
            }
        }
    }
</style>