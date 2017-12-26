<template>
  <div class="demo">
    <h1>表单控件</h1>
    <button @click='t(1)'>Form</button>
    <button @click='t(2)'>类型</button>
    <F></F>
  </div>
</template>

<script>
import Toast from './Tips/toast.js'
import F from './Form/form.vue'

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
            Toast('还在筹备中。。。')
        }
        if(i==2){
            Toast({title:'预计 单选 多选 图片上传',duration:5000})
        }
        if(i==3){
            this.tip = true;
        }
    }
  },
  components:{
    F
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
        border:1px solid #41B883;/*no*/
        font-size:0.45rem;
        padding:12px 24px;
        margin:5px;
        border-radius:8px;
        color:#666;
    }
}



</style>
