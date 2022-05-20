<template>
    <div class="password--container">
        <div class="stripe">
            <div class="stripe__logo">
                <img src="@/assets/images/logo-itau.webp" alt="Logo do banco Itaú" class="logo__img">
            </div>
        </div>
        <main class="password--container__main">
            <section class="left">
                <h1>Olá! Esta é a página de acesso à sua conta.</h1>
                <password-box></password-box>
            </section>
        </main>
    </div>
</template>
<script>
import PasswordBox from './PasswordBox.vue'
export default {
    components:{
        PasswordBox
    },
    props: ['items']
}
</script>
<style lang="scss" scoped>
    @import '@/assets/scss/other-mixins.scss';
    .password--container{
        background-color: rgba(238, 234, 234, 0.747);
        .stripe{
            background-color: grey;
            height: 13vh;
            width: 100%;

            .stripe__logo{
                align-items: center;
                display: flex;
                height: 13vh;
                margin-left: 5rem;

                .logo__img{
                    height: 10vh;
                    object-fit: cover;
                }
            }
        }

        .password--container__main{
            display: flex;
            height: 60vh;
            width: 100%;

            .left{
                height: 100%;
                width: 60%;
            }
        }
    }
</style>