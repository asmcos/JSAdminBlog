<template>
<div>
    <div id="content" class="content" role="main">
     <!-- 1 header-->
     <div class="filter without-isotope extras-off filter-bg-decoration"> 
      <div class="filter-categories">
          <a href="/" class="show-all act" data-filter="*">首页</a>
           <a href="/tech" data-filter="*">技术日志</a>
      </div>
      <!-- filter-categories-->
     </div>  
     <!-- header/filter without-isotope -->
     <!-- 2 content-->
     <div class="articles-list circle-fancy-style loading-effect-fade-in" data-cur-page="1" >
       
       <article class="post project-odd post-15120 type-post status-publish format-standard has-post-thumbnail hentry category-technology tag-article tag-blog tag-design tag-news tag-premium tag-theme tag-themeforest tag-web tag-wordpress category-3 media-wide bg-on description-off" v-for="b in blogs">

	<div class="blog-media wf-td">
		<div class="fancy-date">
		<a>
    <span class="entry-month">{{b.createdate | GetMonth}}</span>
		<span class="entry-date updated">{{b.createdate | GetDay}}</span>
    </a>
		</div>
		<a v-bind:href="'/blogid/' +b._id" class="rollover alignnone this-ready">
		<img v-if="b.coverimg" class="lazy-load preload-me is-loaded" v-bind:src="b.coverimg" alt="" width="1500" height="750" v-bind:srcset="b.coverimg">

		<img v-else class="lazy-load preload-me is-loaded" src="http://the7demo.dreamthemecom.netdna-cdn.com/wp-content/uploads/2014/03/7-4-004-1500x750.jpg" alt="" width="1500" height="750" srcset="http://the7demo.dreamthemecom.netdna-cdn.com/wp-content/uploads/2014/03/7-4-004-1500x750.jpg 1500w">
		<i></i></a>

	</div>
	<div class="blog-content wf-td">
	<h3 class="entry-title">
	<a v-bind:href="'/blogid/'+b._id"  rel="bookmark">
	{{b.title}}</a>
	</h3>

	<div class="entry-meta">
	<a href="" title="10:40 am" class="data-link" rel="bookmark"><time class="entry-date updated" datetime="2016-09-30T10:40:51+00:00">{{b.createdate}}</time>
	</a>
	<a href="" class="comment-link">
	{{b.pv}}人浏览</a>
	</div>

    <!--div v-html='b.content'></div-->
    <a v-bind:href="'/blogid/'+b._id" class="details more-link" rel="nofollow">Details</a></div>

    
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
		<a class="alignleft post-rollover this-ready" href="">
		<img class="lazy-load preload-me is-loaded" v-bind:src="b.coverimg" width="65" height="50" alt="" >
		<i></i>
		</a>
		</div>
		<div class="post-content">
		<a v-bind:href="'/blogid/' + b._id">{{b.title}}</a><br><time class="text-secondary" datetime="2016-09-30T10:40:51+00:00">{{b.createdate}}</time>
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
  name: 'Blogs',
  data () {
    return {
      blogs: null,
      title: '我的所有日志',
      blogurl: '/blogs?sort=-_id'
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
