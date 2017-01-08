<template>

<div class="box">
            <div class="box-header with-border">
              <h3 class="box-title">{{title}}</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <table class="table table-bordered">
                <tbody><tr>
                  <th style="width: 10px">#</th>
                  <th>Task</th>
                  <th style="width: 40px">Label</th>
                </tr>
                <tr v-for='(b,index) in blogs'>
                  <td>{{index}}.</td>
                  <td>{{b.title}}</td>
                  <td><span class="badge bg-red">55%</span></td>
                </tr>
              </tbody></table>
            </div>
            <!-- /.box-body -->
            <div class="box-footer clearfix">
              <ul class="pagination pagination-sm no-margin pull-right">
                <li><a href="#">«</a></li>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">»</a></li>
              </ul>
            </div>
          </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'Blogs',
  data () {
    return {
      blogs: null,
      title: '我的所有日志',
      blogurl: '/resources'
    }
  },
  created () {
    this.getBlogs()
  },

  methods: {
    getBlogs () {
      var that = this
      axios.get(this.blogurl)
        .then(function (response) {
          that.blogs = response.data
        })
    }
  },
  components: {
  }
}
</script>
<style>
.table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {
    text-align: left;
}
</style>
