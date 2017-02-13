<template>
<div>
    <div id="content" class="content" role="main">
     <!-- 1 header-->
     <div class="filter without-isotope extras-off filter-bg-decoration"> 
      <div class="filter-categories">
          <a href="/" data-filter="*">首页</a>
           <a href="/tech" class="show-all act" data-filter="*">技术日志</a>
      </div>
      <!-- filter-categories-->
     </div>  
     <!-- header/filter without-isotope -->
     <!-- 2 content-->
     <div class="articles-list circle-fancy-style loading-effect-fade-in" data-cur-page="1" >
       
<section class="items-grid wf-container round-images" v-for="b in blogs">

<div class="wf-cell wf-1-2">
 <div class="borders">
  <article class="post-format-standard">
   <div class="wf-td">
    <a class="alignleft post-rollover this-ready" v-bind:href="'/techblogid/'+b._id">
     <img class="lazy-load preload-me is-loaded" width="60" height="60" v-bind:src="b.logo">
     <i></i>
    </a>
   </div>
   <div class="post-content">
    <a v-bind:href="'/techblogid/' + b._id">{{b.title}}</a><br>
    <time class="text-secondary" >{{b.createdate}}</time>
   </div>
  </article>
 </div>
</div>

</section>

 
   
     </div>
     <!-- content/articles-list -->
     <!-- page 1,2,3, -->   
    </div>
    <!-- content -->

</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Blogs',
  data () {
    return {
      blogs: null,
      title: '技术日志',
      blogurl: '/techblogs?sort=-_id'
    }
  },
  created () {
    this.getBlogs()
  },

  methods: {
    getBlogs () {
      var that = this
      axios.get('http://' + window.location.hostname + ':8080' + this.blogurl)
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
