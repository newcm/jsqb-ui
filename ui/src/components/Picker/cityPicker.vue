<template>
  <div class="picker-box" v-show='tipshow'>
         <selectui></selectui>
         <selectui></selectui>
  </div>
</template>

<script>
import selectui from './picker.vue'
export default {
  name: 'hell',
  data () {
    return {
       site:82,
       startT:0,
       endT:0,
       offset:2,
       moveD:0,
       time:300,
        width:100
    }
  },
  mounted(){

  },
  props:{
     title:{
         type:String,
         default:'提示信息'
     },
     duration:{
         type:Number,
         default:2000
     },
     tipshow:{
         type:Boolean,
         default:true
     },
     value1:{
         type:Array,
         default:function(){
             return []
         }
     }
  },
  computed:{
      
  },
  mounted(){
      
  },
  watch:{
      
  },
  methods:{
      
  },
  components:{
      selectui
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>

</style>
