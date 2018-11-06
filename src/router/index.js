import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/shouye'
import shangpinliebiao from '@/pages/shangpinliebiao'
import shangpinxiangqing from '@/pages/shangpinxiangqing'

import wode from '@/pages/wode'
<<<<<<< HEAD
=======
import bottom from '@/components/bottom'
import gouwuche from '@/pages/gouwuche'
import xiaoshouzhongxin from "@/pages/xiaoshouzhongxin"
import erweima from "@/pages/erweima"
>>>>>>> ca52fd72c152f61161df5f4d67810c37e99e2e80

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
<<<<<<< HEAD
]
=======
    {
      path: "/erweima",
      name: 'erweima',
      component: erweima
    },
  ]
>>>>>>> ca52fd72c152f61161df5f4d67810c37e99e2e80
})
