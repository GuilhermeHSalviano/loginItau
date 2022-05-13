import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
//Components:
import Home from './components/home/Home.vue'


//Routes:
export const routes = [
    {path: '/', component: Home, title: 'Home'}
]

//The app:
const application = createApp(App)

//The router:
const router = new VueRouter({
    mode: 'history',
    routes
})


//Using the router and mounting the App component
application.use(router)
application.mount('#app')



//Alternative version that either doesn't work:

/*
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/home/Home.vue'

export const routes = [
    {path: '', component: Home, title: 'Home'}
]

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
  })

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: routes
})*/

