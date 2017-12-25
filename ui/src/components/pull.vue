<template>
  <div class="demo">
    <h1>下拉刷新</h1>
    <Pull @loadmore='loadmore' @reload='reload' :reload='add' :loadmore='more'>
        <h2 v-for='item in data'>{{item}}</h2>
    </Pull>
  </div>
</template>

<script>
import Pull from './Pull/pulldown.vue'

export default {
  name: 'demo1',
  data () {
    return {
       data:[12,34,3,43,4,3,43,4,3,4,3,34,3,4,3,4,44],
       add:false,
       more:false,
       i:0
    }
  },
  methods:{
    loadmore(){
      this.more = true;
      setTimeout(()=>{
        this.data.push('我是新加的'+this.i++);
        this.more = false;
      },1500)
    },
    reload(){
      this.add = true;
      setTimeout(()=>{
        this.data = [12,34,3,43,4,3,43,4,3,4,3,34,3,4,3,4,44];
        this.i = 0;
        this.add = false;
      },1500)
    }
  },
  components:{
    Pull
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
// h2{
//     margin:0;
// }
.demo{
    padding:20px;
    text-align:left;
    h1{
        font-size:0.5rem;
        color:#35495E;
    }
    button{
        background:none;
        outline: none;
        border:1px solid #41B883;/*no*/
        font-size:0.45rem;
        padding:12px 24px;
        margin:5px;
        border-radius:8px;
        color:#666;
    }
}



</style>
