import Vue from 'vue'
import VueRouter from 'vue-router/dist/vue-router'

import Home from './views/Home.vue'
import Blogs from './views/Blogs'
import AddBlog from './views/AddBlog'
import EditBlog from './views/EditBlog'
import AllImg from './views/AllImg'
import UploadImg from './views/UploadImg'
import Simple from './views/Simple.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: '/', component: Home },
    { path: '/admin/myblog', name: '/admin/myblog', component: Blogs },
    { path: '/admin/addblog', name: '/admin/addblog', component: AddBlog },
    { path: '/admin/editblog', name: '/admin/editblog', component: EditBlog },
    { path: '/admin/allimg', name: '/admin/allimg', component: AllImg },
    { path: '/admin/uploadimg', name: '/admin/uploadimg', component: UploadImg },
    { path: '/Simple', name: '/Simple', component: Simple }
  ]
})

export default router
