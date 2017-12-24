<template>
  <div class="demo">
    <h1>Switch 按钮</h1>
    <div>
        <h5>默认按钮</h5>
        <Switchbtn @chose='chose'></Switchbtn> 
        <b style='font-size:22px'>{{text}}</b>
    </div>
    <div>
        <h5>自定义按钮</h5>
        <Switchbtn @chose='chose1' chosecolor='pink' color='black'></Switchbtn> 
        <b style='font-size:22px'>{{text1}}</b>
    </div>
  </div>
</template>

<script>
import Toast from './Tips/toast.js'
import Switchbtn from './Switch/switch.vue'

export default {
  name: 'demo2',
  data () {
    return {
        text:false,
        text1:'没有'
    }
  },
  methods:{
    chose(value){
        this.text = value
    },
    chose1(val){
        this.text1 = val?'有':'没有'
    }
  },
  components:{
    Switchbtn
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
    
}



</style>
