<template>
   <div>
   <form v-on:submit.prevent="updateblog">
    <div class="box box-info">
           
            <div class="box-header">
              <h3 class="box-title">{{title}}
                <small>记录生活每一天</small>
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
                  <input type="text" class="form-control" id="title" placeholder="写一个标题吧" v-bind:value="blogtitle">
               </div>
              <div class="form-group">
                  <input type="text" class="form-control" id="coverimg" placeholder="封面图片地址" v-bind:value="blogcoverimg">
               </div>
                    <textarea id="editor1" name="editor1" rows="10" cols="80">
                    </textarea>
            </div>
          <!-- /.box -->

            <div class="box-footer">
                <button class="btn btn-primary"> 确认修改</button>
              </div>
          </div>
          <!-- /.box bos-info -->
       </form>
   </div>
</template>

<script>
import '../js/editor'
import '../js/node_ckeditor_uploader'
import axios from 'axios'

export default {
  name: 'AddBlog',
  data () {
    return {
      title: '修改日志',
      blogtitle: null,
      blogcontent: null,
      blogcoverimg: null,
      blogid: null,
      blogurl: '/resources'
    }
  },
  created () {
    this.getBlogs()
  },

  methods: {
    getBlogs () {
      var that = this
      this.blogid = that.$route.query.blogid
      axios.get(this.blogurl + '/' + that.$route.query.blogid)
        .then(function (response) {
          that.blogtitle = response.data.title
          that.blogcontent = response.data.content
          that.blogcoverimg = response.data.coverimg
          /* eslint-disable */
					var nIntervId = setInterval(function(){
						if (CKEDITOR.instances.editor1.setData){
              CKEDITOR.instances.editor1.setData(that.blogcontent);
							clearInterval(nIntervId)
            }
          }, 500);
          /* eslint-enable */
        })
    },

    updateblog () {
      /* eslint-disable */
      var title1 = $('#title').val();
      var coverimg1 = $('#coverimg').val();
      var content1 =  CKEDITOR.instances.editor1.getData();
      var blogid1 = this.blogid
      /* eslint-enable */
      var that = this
      axios.put(this.blogurl + '/' + blogid1, {
        title: title1,
        coverimg: coverimg1,
        content: content1
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

