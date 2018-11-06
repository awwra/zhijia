import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/shouye'
import shangpinliebiao from '@/pages/shangpinliebiao'
import shangpinxiangqing from '@/pages/shangpinxiangqing'

import wode from '@/pages/wode'

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
    {
      path:"/shangpinxiangqing",
      name:'shangpinxiangqing',
      component:shangpinxiangqing
    },
]
})
