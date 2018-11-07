import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/shouye'
import shangpinliebiao from '@/pages/shangpinliebiao'
import wode from '@/pages/wode'
import gouwuche from '@/pages/gouwuche'
import xiaoshouzhongxin from "@/pages/xiaoshouzhongxin"
import gerenxinxi from "@/pages/gerenxinxi"
import erweima from "@/pages/erweima"
import shangpinxiangqing from "@/pages/shangpinxiangqing"
import gwc from "@/pages/gwc"
import gerenzhongxin from "@/pages/gerenzhongxin"

Vue.use(Router)

export default new Router({
  routes: [{
      path: "/",
      name: 'index',
      component: index
    },
    {
      path: "/gerenzhongxin",
      name: 'gerenzhongxin',
      component: gerenzhongxin
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
    {
      path: "/gwc",
      name: 'gwc',
      component: gwc
    },
  ]
})
