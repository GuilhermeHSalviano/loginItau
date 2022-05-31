<template>
    <div class="password">
        <password-left class="left--box"></password-left>
        <password-right @emitPassword='analyzePassword'></password-right>
    </div>
</template>
<script>
import PasswordLeft from './PasswordLeft.vue'
import PasswordRight from './PasswordRight.vue'
export default {
    components:{
        PasswordLeft,
        PasswordRight
    },
    data(){
        return{
            password: [],
        }
    },
    methods:{
        /*This method analyzes the password and treat it as correct or wrong. However, considering
        the purpose of this job, we're not worried about being faithful to the real system of analyzes applied in banks sites.*/
        analyzePassword(number1, number2){
            this.password.push(number1, number2)
            if(this.password.length == 12) {
                let userPassword = JSON.parse(this.$store.state)
                //Array.from() transforms an array-like or object into an array
                userPassword = Array.from(String(userPassword[0].senha), Number)
                let typedPassword = this.password

                for(let a = 0; a < userPassword.length; a++){
                    if(userPassword[a] != typedPassword[a*2] && userPassword[a] != typedPassword[(a*2)+1]){
                       alert('Senha incorreta')
                       return 
                    }
                }
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/scss/other-mixins.scss';

    .password{
        border: solid 1px rgb(175, 174, 174);
        border-radius: 10px;
        background-color: rgb(228, 227, 227);
        display: flex;
        height: 90%;
        width: 100%;

        .left--box{
            height: 90%;
            width: 50%;
        }
    }
</style>