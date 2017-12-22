<template>
  <div class="demo">
    <h1>Dialog <small>弹出框</small></h1>
    <div>
        <button @click='d(1)'>默认弹出框</button>
        <button @click='d(2)'>带标题</button>
        <button @click='d(3)'>自定义内容</button>
        <button @click='d(4)'>alert类型</button>
        <button @click='d(5)'>comfrim类型</button>
    </div>
    <Dialogui   v-show='alert1' @dialog='dialogshow1' cancelBtn='确定'></Dialogui>
    <Dialogui   v-show='alert2' @dialog='dialogshow2' cancelBtn='确定' title='我是带标题'></Dialogui>
    <Dialogui title='自定义dialog' type='comfrim' v-show='alert3' @dialog='dialogshow3'>
      <h1>自定义内容内容</h1> 
      <ul>
          <li>123123</li>
          <li>1231</li>
      </ul>
    </Dialogui>
    <Dialogui   v-show='alert4' @dialog='dialogshow4' cancelBtn='alert按钮'>我就是普通的alert</Dialogui>
    <Dialogui   v-show='alert5' type='comfrim' @dialog='dialogshow5' cancelBtn='取消按钮' comfrimBtn='确定按钮' title='我是comfrim类型'></Dialogui>
  </div>
</template>

<script>
import Dialogui from './Dialog/dialog.vue'

export default {
  name: 'demo1',
  data () {
    return {
        alert1:false,
        alert2:false,
        alert3:false,
        alert4:false,
        alert5:false,
    }
  },
  methods:{
    d(i){
        if(i==1){
            this.alert1 = true;
        }
        if(i==2){
            this.alert2 = true;
        }
        if(i==3){
            this.alert3 = true;
        }
        if(i==4){
            this.alert4 = true;
        }
        if(i==5){
            this.alert5 = true;
        }
    },
    dialogshow1(e){
        if(e=='cancel'){
            this.alert1 = false;
        }
    },
    dialogshow2(e){
        if(e=='cancel'){
            this.alert2 = false;
        }
    },
    dialogshow3(e){
        if(e=='cancel'){
            this.alert3 = false;
        }
        if(e=='comfrim'){
            this.alert3 = false;
        }
    },
    dialogshow4(e){
        if(e=='cancel'){
            this.alert4 = false;
        }
    },
    dialogshow5(e){
        if(e=='cancel'){
            this.alert5 = false;
        }
        if(e=='comfrim'){
            this.alert5 = false;
        }
    }
  },
  components:{
    Dialogui
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
