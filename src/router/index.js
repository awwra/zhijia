import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/shouye'
<<<<<<< HEAD
import shangpinliebiao from '@/pages/shangpinliebiao'
=======
<<<<<<< HEAD

import wode from '@/pages/wode'
=======
import bottom from '@/components/bottom'
>>>>>>> b7d4e21211200070d9348d54164d07e8aabf314b
>>>>>>> 8d97f3ccde4c60bfcc99e553f8bdc4c873cbef9d

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
      path:"/shangpinliebiao",
      name:'shangpinliebiao',
      component:shangpinliebiao
    },
=======
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
>>>>>>> 8d97f3ccde4c60bfcc99e553f8bdc4c873cbef9d
]
})
