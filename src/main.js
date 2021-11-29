import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import FirstPage from './components/FirstPage'
import Teste from './components/Teste'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: FirstPage

    },
    {
      path:'/clientes',
      component: Teste
    }
  ]
})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
