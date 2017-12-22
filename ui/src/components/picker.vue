<template>
  <div class="demo">
    <h1>Picker 选择器</h1>
    <button @click='t(1)'>选择器组件</button>
    <button @click='t(2)'>2列选择器</button>
    <button @click='t(3)'>3列选择器</button>
    <button @click='t(4)'>自定义选择器头</button>
    <h1 ref='text'></h1>
    <Picker v-show="picker" :value1='v1' ></Picker>
    <cityPicker :tipshow.sync='picker2' :val1='v2' :val2='v3'  title='2列picker' @comfrim='okpicker1'></cityPicker>
    <cityPicker :tipshow.sync='picker3' :val1='v2' :val2='v3' :val3='v1' title='3列picker' @comfrim='okpicker2'></cityPicker>
    <cityPicker :tipshow.sync='picker4' :val1='v3'  title='2列picker' @comfrim='okpicker1'>
        <h3 @click='close()'>我是自己定义的头部（点击关闭）</h3>
    </cityPicker>
  </div>
</template>

<script>
import Picker from './Picker/picker.vue'
import cityPicker from './Picker/cityPicker.vue'

export default {
  name: 'demo1',
  data () {
    return {
        tip:false,
        picker:false,
        picker2:false,
        picker3:false,
        picker4:false,
        v1:['第一类','第二轮','第三好','第四人','第五位','第六感','的确'],
        v2:['苹果','梨子','香蕉','橘子','葡萄','西瓜'],
        v3:['安徽','湖南','湖北','广东','广西','四川','云南','上海']
    }
  },
  methods:{
    t(i){
        if(i==1){
            this.picker = true;
        }
        if(i==2){
            this.picker2 = true;
        }
        if(i==3){
            this.picker3 = true;
        }
        if(i==4){
            this.picker4 = true;
        }
    },
    okpicker1(val){
        this.$refs.text.innerHTML = val;
    },
    okpicker2(val){
        this.$refs.text.innerHTML = val;
    },
    close(){
        this.picker4 = false;
    }
  },
  components:{
    Picker,
    cityPicker
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
