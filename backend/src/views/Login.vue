<template>
   <div class="row">
   <form v-on:submit.prevent="login">
    <div class="box box-info col-md-3">
           
            <div class="box-header">
              <h3 class="box-title">{{title}}
              </h3>
              <!-- tools box -->
              <div class="pull-right box-tools">
                <button type="button" class="btn btn-info btn-sm" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                  <i class="fa fa-minus"></i></button>
                <button type="button" class="btn btn-info btn-sm" data-widget="remove" data-toggle="tooltip" title="Remove">
                  <i class="fa fa-times"></i></button>
              </div>
              <!-- /. tools -->
            </div>
            <!-- /.box-header -->
            <div class="box-body pad">
              <div class="form-group">
                  <input type="text" class="form-control" id="username" placeholder="username">
              </div>
              <div class="form-group">
                  <input type="password" class="form-control" id="password" placeholder="password">
              </div>
            </div>
          <!-- /.box -->

            <div class="box-footer">
                <button class="btn btn-primary" > 发表</button>
              </div>
          </div>
          <!-- /.box bos-info -->
     </form>

   </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      title: '登录',
      loginurl: '/login'
    }
  },

  methods: {
    login () {
      /* eslint-disable */
      var username = $('#username').val();
      var password = $('#password').val();
      /* eslint-enable */
      var that = this
      axios.post(this.loginurl, {
        username: username,
        password: password
      })
        .then(function (response) {
          that.$router.push('/admin/myblog')
        })
    }
  },
  components: {
  }
}
</script>

