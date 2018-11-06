import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/shouye'
import shangpinliebiao from '@/pages/shangpinliebiao'
import wode from '@/pages/wode'
import gouwuche from '@/pages/gouwuche'
import xiaoshouzhongxin from "@/pages/xiaoshouzhongxin"
import gerenxinxi from "@/pages/gerenxinxi"
Vue.use(Router)

export default new Router({
  routes: [{
      path: "/",
      name: 'index',
      component: index
    },
    {
      path: "/gerenxinxi",
      name: 'gerenxinxi',
      component: gerenxinxi
    },
    {
      path: "/gouwuche",
      name: 'gouwuche',
      component: gouwuche
    },
    {
      path: "/shangpinliebiao",
      name: 'shangpinliebiao',
      component: shangpinliebiao
    },
    {
      path: "/wode",
      name: 'wode',
      component: wode
    },
    {
      path: "/xiaoshouzhongxin",
      name: 'xiaoshouzhongxin',
      component: xiaoshouzhongxin
    },
    {
      path: "/erweima",
      name: 'erweima',
      component: erweima
    },
    {
      path: "/shangpinxiangqing",
      name: 'shangpinxiangqing',
      component: shangpinxiangqing
    },
  ]
})
