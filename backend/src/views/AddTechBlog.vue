<template>
   <div>
   <form v-on:submit.prevent="sendblog">
    <div class="box box-info" id="addblog">
           
            <div class="box-header">
              <h3 class="box-title">{{title}}
                <small>记录生活每一次技术心得</small>
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
                  <input type="text" class="form-control" id="title" placeholder="写一个标题吧">
               </div>
               <div class="input-group input-group-sm form-group">
                <input type="text" class="form-control" id="logo" placeholder="小logo图标">
                    <span class="input-group-btn">
                      <a @click="selectimgwindow" class="btn btn-info btn-flat">选择照片</a>
                    </span>
                </div>
                    <textarea id="editor1" name="editor1" rows="10" cols="80">
                                           
                    </textarea>
            </div>
          <!-- /.box -->

            <div class="box-footer">
                <button class="btn btn-primary" > 发表</button>
              </div>
          </div>
          <!-- /.box bos-info -->
     </form>
     
     <!-- list all image to select -->
     <div class="row" style="z-index:200;display:none; padding:10px;" id="allimg">
       <div class="box box-info">
           
          <div class="box-header">
           <div class="col-md-3" v-for="img in imgs">
            <div class="box box-widget">
             <img class="img-responsive pad" style="height:300px;" v-bind:src="'/' + img.url" alt="Photo" @click="selectimgurl(img.url)" >
            </div>
            <!-- box-widget -->
           </div>
           <!--col-md-6-->
          </div>
          <!-- box-header -->     
        </div>
     </div>

   </div>
</template>

<script>
import '../js/editor'
import axios from 'axios'

export default {
  data () {
    return {
      title: '写一篇技术日志',
      blogurl: '/techblogs',
      imgs: null,
      imgurl: '/images?sort=-_id'
    }
  },

  methods: {
    sendblog () {
      /* eslint-disable */
      var title1 = $('#title').val();
      var logo1 = $('#logo').val();
      var content1 =  CKEDITOR.instances.editor1.getData();
      /* eslint-enable */
      var that = this
      axios.post(this.blogurl, {
        title: title1,
        logo: logo1,
        content: content1
      })
        .then(function (response) {
          that.$router.push('/admin/techblog')
        })
    },
    selectimgurl (url) {
      /* eslint-disable */
      var allimg = $('#allimg')
      var addblog = $('#addblog')
      var logo1 = $('#logo')
      /* eslint-enable */
      allimg.hide()
      addblog.show()
      logo1.val('/' + url)
    },
    selectimgwindow () {
      /* eslint-disable */
      var allimg = $('#allimg')
      var addblog = $('#addblog')
      /* eslint-enable */
      allimg.show()
      addblog.hide()
      var that = this
      axios.get(this.imgurl)
        .then(function (response) {
          that.imgs = response.data
        })
    }
  },
  components: {
  }
}
</script>

