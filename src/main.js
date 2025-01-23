import './assets/main.css'
import { VueFire, VueFireAuth } from 'vuefire'
import { createApp } from 'vue'
import App from './App.vue'
import { firebaseApp } from './firebase.js'


import { createWebHistory, createRouter } from 'vue-router'
import Landing from './components/Landing.vue'
import Recordatorios from './components/Recordatorios.vue'
import PagLogin from './components/PagLogin.vue'
import PagRegister from './components/PagRegister.vue'

const routes = [
  { path: '/', component: Landing },
  { path: '/recordatorios', component: Recordatorios },
  { path: '/login', component: PagLogin },
  { path: '/register', component: PagRegister }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App);
app.use(VueFire, {
    firebaseApp,
    modules: [
      VueFireAuth(),
    ],
  })
app.use(router);
app.mount('#app');
