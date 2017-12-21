<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 @click='get()'>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
     
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2 @click='getHell()'>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <hell @getvalue='getvalue'  :keyshow.sync='show1'   :success.sync='success' :fail.sync='fail' ref='hell'>
      
    </hell>
    <Dialogui title='标题' type='comfrim' v-show='alert1' @dialog='dialogEvent'>
      <h1>内容</h1> 
    </Dialogui>
    <Dialogui   v-show='alert' @dialog='dialogEvent1' cancelBtn='确定'>
      <h2> 内容</h2>
    </Dialogui>
    <!-- <Tip title='我是提示信息' :tipshow.sync='tip' :duration='3000' >
      
    </Tip> -->
    <Selectui :tipshow.sync="selectshow" @getValue='getValue' title='我的选择框' :value='value'></Selectui>
    <Picker :tipshow.sync="picker" :value1='v1' :value2='v2' :value3='v3'></Picker>
  </div>
</template>

<script>
import Vue from 'vue'
import keyborad from './keyborad/keyboard.vue'
Vue.component(keyborad.name,keyborad)
import Dialogui from './Dialog/dialog.vue'
import Selectui from './Select/Select.vue'
import Picker from './Picker/picker.vue'
import Tip from './Tips/tips.vue'
import Toast from './Tips/toast.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show1:false,
      alert:false,
      alert1:false,
      tip:false,
      success:false,
      fail:false,
      selectshow:false,
      picker:true,
      v1:[1,2,3,4,5,4,5,6],
      v2:[1,2,3,2,3,2,32,4],
      v3:[1,2,4,2,1,2,1,21],
      value:[1,2,3,4,5,6,75,5,4,4,4,4,4,4,43,3,4,3,43,4,3,43,445,9]
    }
  },
  methods:{
    getvalue(mes){
      console.log(mes);
      // this.$refs.hell.close();
      setTimeout(()=>{this.fail=true,
      setTimeout(()=>{this.show1=false},1000)
      },2000)
    },
    get(){
      // Toast({title:'13425',duration:5000})

    },
   getHell(){
     this.selectshow = true;
    // console.log(Toast('mingming'))
    // Toast('mingming',1000)
   },
   getValue(val){
     console.log(val)
   },
   close(){
     this.show1 = false;
   },
   dialogEvent(type){
     console.log(type)
   },
   dialogEvent1(type){
     console.log(type)
   }
  },
  components:{
    Dialogui,
    Tip,
    Selectui,
    Picker
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
