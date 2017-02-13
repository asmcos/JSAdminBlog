import Vue from 'vue'
import VueRouter from 'vue-router/dist/vue-router'

import Home from './views/Home.vue'
import Blogs from './views/Blogs'
import AddBlog from './views/AddBlog'
import EditBlog from './views/EditBlog'
import TechBlogs from './views/TechBlogs'
import AddTechBlog from './views/AddTechBlog'
import EditTechBlog from './views/EditTechBlog'
import AllImg from './views/AllImg'
import UploadImg from './views/UploadImg'
import Register from './views/Register'
import Login from './views/Login'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: '/', component: Home },
    { path: '/admin/myblog', name: '/admin/myblog', component: Blogs },
    { path: '/admin/addblog', name: '/admin/addblog', component: AddBlog },
    { path: '/admin/editblog', name: '/admin/editblog', component: EditBlog },
    { path: '/admin/techblog', component: TechBlogs },
    { path: '/admin/addtechblog', component: AddTechBlog },
    { path: '/admin/edittechblog', component: EditTechBlog },
    { path: '/admin/allimg', name: '/admin/allimg', component: AllImg },
    { path: '/admin/uploadimg', name: '/admin/uploadimg', component: UploadImg },
    { path: '/admin/register', name: '/admin/register', component: Register },
    { path: '/admin/login', name: '/admin/login', component: Login }
  ]
})

export default router
