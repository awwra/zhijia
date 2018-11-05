import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/shouye'
<<<<<<< HEAD

import wode from '@/pages/wode'
=======
import bottom from '@/components/bottom'
>>>>>>> b7d4e21211200070d9348d54164d07e8aabf314b

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      name:'index',
      component:index
    },
    {
<<<<<<< HEAD
      path:"/wode",
      name:'wode',
      component:wode
    },
=======
      path:"/bottom",
      name:'bottom',
      component:bottom
    }
>>>>>>> b7d4e21211200070d9348d54164d07e8aabf314b
]
})
