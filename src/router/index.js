import Vue from 'vue'
import Router from 'vue-router'

import shouye from '@/pages/shouye'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'shouye',
    component: shouye
  }, 
]
})
