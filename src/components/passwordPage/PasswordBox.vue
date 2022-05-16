<template>
    <div class="password">
        <password-left class="left--box"></password-left>
        <password-right @emitPassword='writePassword'></password-right>
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
        writePassword(number1, number2){
            this.password.push(number1, number2)
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