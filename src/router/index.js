import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/shouye'
import shangpinliebiao from '@/pages/shangpinliebiao'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      name:'index',
      component:index
    },
    {
      path:"/shangpinliebiao",
      name:'shangpinliebiao',
      component:shangpinliebiao
    },
]
})
