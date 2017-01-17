import Vue from 'vue'
import VueRouter from 'vue-router/dist/vue-router'

import Blogs from './views/Blogs'
import Blogid from './views/Blogid'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: '/', component: Blogs },
    { path: '/blogid/:id', name: '/blogid', component: Blogid }
  ]
})

export default router
