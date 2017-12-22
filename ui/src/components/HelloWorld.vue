<template>
  <div class="hello">
    <!-- <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <h3 style='text-align:right;color:#666;'>——口袋理财**</h3> -->
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
    <!-- <Picker :tipshow.sync="picker" :value1='v1' :value2='v2' ></Picker> -->
    <cityPicker :tipshow.sync='citypicker' :val1='v1' :val2='v2'  title='多列picker' @comfrim='okpicker'></cityPicker>
  </div>
</template>

<script>
import Vue from 'vue'
import keyborad from './keyborad/keyboard.vue'
Vue.component(keyborad.name,keyborad)
import Dialogui from './Dialog/dialog.vue'
import Selectui from './Select/Select.vue'
import Picker from './Picker/picker.vue'
import cityPicker from './Picker/cityPicker.vue'
import Tip from './Tips/tips.vue'
import Toast from './Tips/toast.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome use KD-ui',
      show1:false,
      alert:false,
      alert1:false,
      tip:false,
      success:false,
      fail:false,
      selectshow:false,
      picker:false,
      citypicker:false,
      v1:[1,2,3,4,5,4,5,6],
      v2:[1,2,3,2,3,2,32,4],
      // v3:[1,2,4,2,1,2,1,21],
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
     this.citypicker = true;
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
   },
   okpicker(val){
     Toast({title:'13425',duration:5000})
   }
  },
  components:{
    Dialogui,
    Tip,
    Selectui,
    Picker,
    cityPicker
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
.hello{
  box-sizing: border-box;
  padding:20px;
  position: absolute;
  top:50%;
  left: 0;
  width:100%;
  transform: translate(0%,-50%);
  -webkit-transform: translate(0%,-50%);
}
</style>
