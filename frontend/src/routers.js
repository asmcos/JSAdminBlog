import Vue from 'vue'
import VueRouter from 'vue-router/dist/vue-router'

import Blogs from './views/Blogs'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: '/', component: Blogs }
  ]
})

export default router
