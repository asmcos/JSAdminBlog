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
                  <th style="width: 40px">删除</th>
                  <th style="width: 40px">操作</th>
                </tr>
                <tr v-for='(b,index) in blogs'>
                  <td>{{index}}.</td>
                  <td>{{b.title}}</td>
                  <td><a v-bind:href="'/admin/editblog?blogid='+b._id"><span class="badge bg-blue">修改</span></a></td>
                  <td @click='deleteblog(b._id)'><span class="badge bg-red">删除</span></td>
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
    },
    deleteblog (id) {
      axios.delete(this.blogurl + '/' + id)
      window.location.reload()
    },
    editblog (id) {
      console.log(id)
      window.location.replace('admin/editblog?blogid=' + id)
      window.location.reload()
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
