<template>
  <div class="demo">
    <h1>下拉刷新</h1>
    <Pull @loadmore='loadmore' @reload='reload' >
        <li v-for='item in data'>{{item}}</li>
    </Pull>
  </div>
</template>

<script>
import Pull from './Pull/pulldown.vue'

export default {
  name: 'demo1',
  data () {
    return {
       data:['第一列','第二列','第三列','第四列','第五列','第六列','第七列','第八列','第九列','第十一列','第十二列','第十三列','第十四列','第十五列','第十六列','第十七列'],
      //  state:1,
       i:0
    }
  },
  methods:{
    loadmore(done){
      this.more = true;
      if(this.i>=2){
        done(true);
        return;
      }
      setTimeout(()=>{
        this.data.push('我是新加的'+this.i++);
        // this.state = 1;
        done()
        
      },1500)
    },
    reload(done){
      this.add = true;
      setTimeout(()=>{
        this.data = ['第一列','第二列','第三列','第四列','第五列','第六列','第七列','第八列','第九列','第十一列','第十二列','第十三列','第十四列','第十五列','第十六列','第十七列'];
        this.i = 0;
        // this.state = 1;
        done()
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
    li{
      text-align:center;
      list-style:none;
      line-height: 100px;
      border-bottom:1px solid #efefef;
      font-size:32px;
    }
}



</style>
