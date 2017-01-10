<template>

  <div class="box">
  
    <ul class="timeline">

    <!-- timeline time label -->
    <li class="time-label">
        <span class="bg-red">
            10 Feb. 2014
        </span>
    </li>
    <!-- /.timeline-label -->

    <!-- timeline item -->
    <li v-for='b in blogs'>
        <!-- timeline icon -->
        <i class="fa fa-envelope bg-blue"></i>
        <div class="timeline-item">
            <span class="time"><i class="fa fa-clock-o"></i> 12:05</span>

            <h3 class="timeline-header"><a href="#">{{b.title}}</a> </h3>

            <div class="timeline-body" v-html="b.content">
            </div>

            <div class="timeline-footer">
                <a class="btn btn-primary btn-xs">详情...</a>
            </div>
        </div>
    </li>
    <!-- END timeline item -->

    ...

</ul>
        
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
div > img {width:50%;}
</style>
