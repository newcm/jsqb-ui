<template>
  <div class="demo">
    <h1>步骤条</h1>
    <div class='d'>
        <button @click='t(1)'>下一步</button>
        <button @click='t(2)'>重置</button>
    </div>
    <Step :step='tip'></Step>
    
  </div>
</template>

<script>
import Step from './Step/step.vue'
import Toast from './Tips/toast.js'
export default {
  name: 'demo1',
  data () {
    return {
        tip:1
    }
  },
  methods:{
    t(i){
        if(i==1){
            if(this.tip>4){
                Toast('您已经完成操作');
                return;
            }
            this.tip++;
        }
        if(i==2){
            this.tip = 1;
        }
        
    }
  },
  components:{
      Step
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.demo{
    padding:20px;
    text-align:left;
    .d{
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,100%);
        z-index:1000
    }
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
