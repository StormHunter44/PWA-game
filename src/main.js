import Vue from 'vue'
import VueRouter from 'vue-router'  
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import Game from './Game.vue'
import Home from './Home.vue'

Vue.use(VueRouter);

Vue.use(Buefy)
Vue.config.productionTip = false

const routes = [
  { path: '/game', component: Game },
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
