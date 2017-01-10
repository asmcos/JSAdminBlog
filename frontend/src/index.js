import 'admin-lte/bootstrap/js/bootstrap'
import 'admin-lte/dist/js/app'
import Vue from 'vue'
import router from './routers'
import App from './App'

require('admin-lte/dist/css/AdminLTE.css')
require('admin-lte/dist/css/skins/skin-blue.min.css')

// for router
new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')

window.router = router

