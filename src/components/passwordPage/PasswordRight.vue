<template>
    <div class="right">
        <div class="grid--container">
            <button class="buttons__numbers" @click="typeYourPassword(first[0], first[1])">{{ first[0] + " ou " + first[1] }}</button>
            <button class="buttons__numbers" @click="typeYourPassword(second[0], second[1])">{{ second[0] + " ou " + second[1] }}</button>
            <button class="buttons__numbers" @click="typeYourPassword(third[0], third[1])">{{ third[0] + " ou " + third[1] }}</button>
            <button class="buttons__numbers" @click="typeYourPassword(fourth[0], fourth[1])">{{ fourth[0] + " ou " + fourth[1] }}</button>
            <button class="buttons__numbers" @click="typeYourPassword(fifth[0], fifth[1])">{{ fifth[0] + " ou " + fifth[1] }}</button>
            <button class="buttons__numbers">Limpar</button>
            <button class="buttons__numbers" id="access" @click="analyzePassword">Acessar</button>
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
            fifth: '',
            password: []
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
        //This method fills the array "password" with the numbers typed if that array length is less than twelve.
        typeYourPassword(number1, number2){
            if(this.password.length < 12){
                this.password.push(number1, number2)
                this.$emit('inputAsterisk', "*")
            } else {
                alert("Você já digitou seis números!")
            }
        },
        /*This method analyzes the password and treat it as correct or wrong. However, considering
        the purpose of this job, we're not worried about being faithful to the real system of analyzes applied in banks sites.*/
        analyzePassword(){
            if(this.password.length == 12) {
                let userPassword = JSON.parse(this.$store.state)
                //Array.from() transforms an array-like or object into an array
                userPassword = Array.from(String(userPassword[0].senha), Number)
                let typedPassword = this.password

                for(let a = 0; a < userPassword.length; a++){
                    if(userPassword[a] != typedPassword[a*2] && userPassword[a] != typedPassword[(a*2)+1]){
                       alert('Senha incorreta!')
                       return 
                    }
                }
                alert("Senha correta! Você será redirecionado à sua página de usuário.")
            }
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
            cursor: pointer;
        }
        .buttons__numbers:hover{
            background-color: grey;
            color: white;
            transition: background .3s ease;
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