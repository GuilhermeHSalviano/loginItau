/*Observe que aqui estamos importando o método 'createApp' da biblioteca Vue, diferente do que havíamos feito até então. */
import { createApp } from 'vue'
/*Observe que este a importação do Vue Router é diferente da que temos feito. Isso se deve provavelmente em virtude
da versão do Router. Neste caso, estamos importando tudo dentro desta biblioteca.*/
import * as VueRouter from 'vue-router'

//Vuex

import Vuex from 'vuex'

const store = new Vuex.Store({
    state: '',
    mutations:{
        defineAPI(api){
            this.state = this.state.push(api)
        }
    }
})

//Components:
import Home from './components/home/Home.vue'
import App from './App.vue'
import PasswordPage from './components/passwordPage/PasswordPage.vue'


//Routes:
export const routes = [
    {path: '', component: Home, title: 'Home'},
    {path: '/senha', name: 'login', component: PasswordPage, title: 'PasswordPage', props: true}
]

//The app:
const application = createApp(App)

//The router:
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    mode: 'history',
    routes
})


//Using the router and mounting the App component
application.use(router)
application.use(store)
application.mount('#app')



