import Vue from 'vue'
import VueRouter from 'vue-router'  
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import TicTacToe from './TicTacToe.vue'
import Home from './Home.vue'
import Memory from './Memory.vue'
import Tests from './Tests.vue'

Vue.use(VueRouter);

Vue.use(Buefy)
Vue.config.productionTip = false

const routes = [
  { path: '/tic-tac-toe', component: TicTacToe },
  { path: '/memory', component: Memory },
  { path: '/tests', component: Tests },
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

var vm = new Vue({
  data: {
    message: ''
  },
  template: '<div>{{ message }}</div>'
})
vm.message = "Start";


