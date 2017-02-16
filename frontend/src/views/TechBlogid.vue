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
     <div  class="articles-list circle-fancy-style loading-effect-fade-in" data-cur-page="1" >
 
       <article v-if="bid"  class="post project-odd post-15120 type-post status-publish format-standard has-post-thumbnail hentry category-technology tag-article tag-blog tag-design tag-news tag-premium tag-theme tag-themeforest tag-web tag-wordpress category-3 media-wide bg-on description-off" >


  <div class="blog-content wf-td">
  <h3 class="entry-title">
  <a>{{bid.title}}</a>
  </h3>

	<div class="entry-meta">
	<span class="category-link">
	<a href="http://the7.dream-demo.com/category/technology/">Design</a>
	</span>
	<a class="author vcard" href="http://the7.dream-demo.com/author/admin/" title="View all posts by Dream-Theme" rel="author">
	By <span class="fn">Dream-Theme</span>
	</a>
	<a href="http://the7.dream-demo.com/2016/09/30/" title="10:40 am" class="data-link" rel="bookmark"><time class="entry-date updated" datetime="2016-09-30T10:40:51+00:00">{{bid.createdate}}</time>
	</a>
	<a href="" class="comment-link">
	{{bid.pv}}人浏览</a>
	</div>

  


        <div v-html='bid.content'></div>

    
 </article>  

 
   
     </div>
     <!-- content/articles-list -->
     <!-- page 1,2,3, -->   
    </div>
    <!-- content -->
   


 <!-- aside -->   
    <aside id="sidebar" class="sidebar">
      <div class="sidebar-content widget-divider-off">
         <section id="presscore-blog-posts-7" class="widget widget_presscore-blog-posts">
	<div class="widget-title">最新日志</div>
	<ul class="recent-posts">
		<li  v-for="b in blogs">
		<article class="post-format-standard">
		<div class="wf-td">
		<a class="alignleft post-rollover this-ready" href="http://the7.dream-demo.com/5-reasons-lorem-ipsum-dolor/">
	
  <img class="lazy-load preload-me is-loaded" v-bind:src="b.logo" width="65" height="50" alt="" >
		<i></i>
		</a>
		</div>
		<div class="post-content">
		<a v-bind:href="'/techblogid/' +b._id">{{b.title}}</a><br><time class="text-secondary" datetime="2016-09-30T10:40:51+00:00">{{b.createdate}}</time>
		</div>
		</article>
		</li>


	</ul>

	</section>
      </div>
      <!-- sidebar-content -->     
    </aside>

</div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      blogs: null,
      bid: null,
      title: '技术日志',
      blogurl: '/techblogs?sort=-_id',
      blogid: '/techblogs/'
    }
  },
  created () {
    this.getBlogs()
    this.getBlogid()
  },

  methods: {
    getBlogs () {
      var that = this
      axios.get('http://' + window.location.hostname + ':8080' + this.blogurl)
        .then(function (response) {
          that.blogs = response.data
        })
    },
    getBlogid () {
      var that = this
      axios.get('http://' + window.location.hostname + ':8080' + this.blogid + that.$route.params.id)
        .then(function (response) {
          that.bid = response.data
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
