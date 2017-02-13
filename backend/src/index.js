import 'admin-lte/bootstrap/js/bootstrap'
import 'admin-lte/dist/js/app'
import Vue from 'vue'
import router from './routers'
import App from './App'

require('admin-lte/dist/css/AdminLTE.css')
require('admin-lte/dist/css/skins/skin-blue.min.css')

// for side menus
// add a menu entry, need add a link entry by routers.js
new Vue({
  el: '#menu_main',
  data: {
    menus: [
      { title: 'MENU', vclass: 'header' },
      { title: 'Home', url: '/admin/home' },
      { title: '日记管理',
        url: '/admin/Blog',
        vclass: 'treeview',
        submenus: [
          { title: '随心日记', url: '/admin/myblog' },
          { title: '写随心日记', url: '/admin/addblog' },
          { title: '技术日记', url: '/admin/techblogs' },
          { title: '写技术日记', url: '/admin/addtechblog' }
        ]
      },
      { title: '图片管理',
        url: '/admin/uploadimg',
        vclass: 'treeview',
        submenus: [
          { title: '浏览图片', url: '/admin/allimg' },
          { title: '传图片', url: '/admin/uploadimg' }
        ]
      }
    ]
  }
}).$mount('#menu_main')

// for router
new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')

window.router = router
// menus demo data!!!
/*    menus: [
      { title: 'MENU', vclass: 'header' },
      { title: 'Foo', url: '/foo' },
      { title: 'Bar',
        url: '/bar',
        vclass: 'treeview',
        submenus: [
          { title: 'Bar1', url: '/bar1' },
          { title: 'Bar2', url: '/bar2' }
        ]
      }
    ]
*/

