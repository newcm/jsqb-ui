<template>
  <div class="demo">
    <h1>Tip 提示</h1>
    <button @click='t(1)'>提示信息</button>
    <button @click='t(2)'>提示信息 5000s</button>
    <button @click='t(3)'>带图标</button>
    <Tip title='我是提示信息'  :tipshow.sync='tip'>
        <img src="../assets/logo.png" alt="">
    </Tip>
  </div>
</template>

<script>
import Toast from './Tips/toast.js'
import Tip from './Tips/tips.vue'

export default {
  name: 'demo1',
  data () {
    return {
        tip:false
    }
  },
  methods:{
    t(i){
        if(i==1){
            Toast('hello world')
        }
        if(i==2){
            Toast({title:'hello world',duration:5000})
        }
        if(i==3){
            this.tip = true;
        }
    }
  },
  components:{
    Tip
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
    button{
        background:none;
        outline: none;
        border:1px solid #41B883;
        font-size:0.45rem;
        padding:12px 24px;
        margin:5px;
        border-radius:8px;
        color:#666;
    }
}



</style>
