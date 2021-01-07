import Vue from 'vue'
import VueRouter from 'vue-router'  
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import TicTacToe from './TicTacToe.vue'
import Home from './Home.vue'
import Memory from './Memory.vue'
import ReactionTime from './ReactionTime.vue'
import CrackTheSafe from './CrackTheSafe.vue'
import Dev from './Dev.vue'

Vue.use(VueRouter);

Vue.use(Buefy)
Vue.config.productionTip = false

const routes = [
  { path: '/tic-tac-toe', component: TicTacToe },
  { path: '/memory', component: Memory },
  { path: '/reaction-time', component: ReactionTime },
  { path: '/crack-the-safe', component: CrackTheSafe },
  { path: '/dev', component: Dev },
  { path: '/', component: Home },
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')

