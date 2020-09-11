import Vue from 'vue'
import VueRouter from 'vue-router'
import List from './components/List.vue'
import AddEmp from './components/AddEmp.vue'
import Modify from './components/Modify.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
      path:'/',
      redirect:'/list'
    },
    {
      path:'/list',
      component:List,
      children:[
        {
          path:'modify',
          name:'modify',
          component:Modify
        }
      ]
      
    },
    {
      path:'/add',
      component:AddEmp
    }
  ]
})

export default router
