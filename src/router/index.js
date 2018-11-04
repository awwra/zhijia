import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/shouye'
import bottom from '@/components/bottom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      name:'index',
      component:index
    },
    {
      path:"/bottom",
      name:'bottom',
      component:bottom
    }
]
})
