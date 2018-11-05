import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/shouye'

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
      path:"/wode",
      name:'wode',
      component:wode
    },
]
})
