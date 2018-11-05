import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/shouye'
import shangpinliebiao from '@/pages/shangpinliebiao'
import wode from '@/pages/wode'
import xiaoshouzhongxin from '@/pages/xiaoshouzhongxin'


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
      path:"/wode",
      name:'wode',
      component:wode
    },
    {
      path:"/xiaoshouzhongxin",
      name:'xiaoshouzhongxin',
      component:xiaoshouzhongxin
    },
]
})
