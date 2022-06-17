<template>
    <div class="password">
        <password-left class="left--box" :inputPassword="asterisk"></password-left>
        <password-right @inputAsterisk='emitAsterisk'></password-right>
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
            asterisk:[]
        }
    },
    methods:{
        emitAsterisk(data){
            this.asterisk.push(data)
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
        height: 80%;
        margin-left: 2rem;
        width: auto;

        .left--box{
            height: 90%;
            width: 50%;
        }
    }
</style>