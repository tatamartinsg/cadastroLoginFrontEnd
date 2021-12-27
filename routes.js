import FirstPage from './src/components/FirstPage.vue'
import Teste from './src/components/Clientes.vue'

export const routes = [
      {
        path: '/',
        name:'home',
        component: FirstPage,
        meta:{
          publica: true
        }
      },
      {
        path:'/clientes',
        name: 'teste',
        component: Teste
      }
]
