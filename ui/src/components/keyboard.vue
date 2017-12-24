<template>
  <div class="demo">
      <h1>Keyboard 键盘</h1>
      <button @click='on(1)'>默认键盘</button>
      <button  @click='on(2)'>自定义键盘</button>
      <button  @click='on(3)'>数字键盘</button>
      <keyboard  @getvalue='getvalue1'  :keyshow.sync='show1'   :success.sync='success' :fail.sync='fail'></keyboard>
      <keyboard  @getvalue='getvalue2'  :keyshow.sync='show2' >
          <ul>
              <li>我们知己定义成功 失败事件 </li>
              <li>自定义结构</li>
              <li>成功</li>
              <li>加载</li>
              <li>失败</li>
          </ul>
      </keyboard>
      <keyboardnum :keyshow.sync='show3' @setval='setval'></keyboardnum>
      <h2>{{val}}</h2>
  </div>
</template>

<script>
import keyboard from './keyborad/keyboard.vue'
import keyboardnum from './keyborad/keyboardNum.vue'

export default {
  name: 'demo2',
  data () {
    return {
        show1:false,
        show2:false,
        show3:false,
        success:false,
        fail:false,
        val:null
    }
  },
  methods:{
      on(i){
          if(i==1){
              this.show1 = true;
          }
          if(i==2){
              this.show2 = true;
          }
          if(i==3){
              this.show3 = true;
          }
      },
      getvalue1(val){
          console.log(val);
          let that = this;
          setTimeout(function(){
              that.success = true;
          },2000)
      },
      getvalue2(val){

      },
      setval(val){ console.log(val);
          this.val = val.join("-");
      }
  },
  components:{
    keyboard,
    keyboardnum
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
