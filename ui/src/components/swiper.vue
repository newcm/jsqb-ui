<template>
  <div class="demo">
    <h1>Swiper 轮播</h1>
    <div>
        <h5>默认标签页</h5>
        <swiper></swiper>
    </div>
    <div>
        <h5>垂直轮播</h5>
        <swiper dir='Y'></swiper>
    </div>
  </div>
</template>

<script>
import swiper from './Swiper/swiper.vue'

export default {
  name: 'demo2',
  data () {
    return {
       
    }
  },
  methods:{
    
  },
  components:{
    swiper
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.demo{
    padding:20px;
    text-align:left;
    h1{
        font-size:0.5rem;
        color:#35495E;
    }
    .content{
        height: 200px;
        box-shadow: 5px 5px 2px #efefef;
        -moz-box-shadow: 2px 2px 2px #888888; /* 老的 Firefox */
            box-shadow: 2px 2px 2px #888888;
    }
    
}



</style>
