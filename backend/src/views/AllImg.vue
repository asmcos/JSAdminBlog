<template>
   <div class="row">
    <div class="col-md-3" v-for="img in imgs">
      <div class="box box-widget">
       <img class="img-responsive pad" style="height:300px;" v-bind:src="'/' + img.url" alt="Photo" >
      </div>
      <!-- box-widget -->
    </div>
    <!--col-md-6-->
   </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      imgs: null,
      imgurl: '/images'
    }
  },
  created () {
    this.getImgs()
  },
  methods: {
    getImgs () {
      /* eslint-disable */
      /* eslint-enable */
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

