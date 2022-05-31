<template>
    <div class="right">
        <div class="grid--container">
            <button class="buttons__numbers" @click="typeYourPassword(first[0], first[1])">{{ first[0] + " ou " + first[1] }}</button>
            <button class="buttons__numbers" @click="typeYourPassword(second[0], second[1])">{{ second[0] + " ou " + second[1] }}</button>
            <button class="buttons__numbers" @click="typeYourPassword(third[0], third[1])">{{ third[0] + " ou " + third[1] }}</button>
            <button class="buttons__numbers" @click="typeYourPassword(fourth[0], fourth[1])">{{ fourth[0] + " ou " + fourth[1] }}</button>
            <button class="buttons__numbers" @click="typeYourPassword(fifth[0], fifth[1])">{{ fifth[0] + " ou " + fifth[1] }}</button>
            <button class="buttons__numbers">Limpar</button>
            <button class="buttons__numbers" id="access" @click="getAPI">Acessar</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            first: '',
            second: '',
            third: '',
            fourth: '',
            fifth: ''
        }
    },
    created(){
        const algarithms = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        algarithms.sort(() => Math.random() - 0.5)
        this.first = [algarithms[0], algarithms[1]]
        this.second = [algarithms[2], algarithms[3]]
        this.third = [algarithms[4], algarithms[5]]
        this.fourth = [algarithms[6], algarithms[7]]
        this.fifth = [algarithms[8], algarithms[9]]
        
    },
    methods:{
        typeYourPassword(number1, number2){
            this.$emit("emitPassword", number1, number2)
        }      
    }
}
</script>
<style lang="scss">
    @import "@/assets/scss/variables.scss";
    .right{
        align-items: center;
        display: flex;
        height: 90%;
        justify-content: center;
        width: 50%;
    }

    .grid--container{
        display: grid;
        grid-column-gap: 10px;
        grid-row-gap: 10px;
        grid-template-areas: "buttons";
        grid-template-columns: 5rem 5rem 5rem;
        grid-template-rows: 5rem 5rem;
        height: auto;
        width: auto;

        .buttons__numbers{
            border: none;
            border-radius: 7px;
            box-shadow: 2px 2px 5px black;
        }

        #access{
            color: white;
            background-color: $itau-color;
            font-weight: 800;
            height: 2rem;
            width: calc(15rem + 20px);
        }
    }
</style>