<template>
  <div class="record-box" >
      <h1>实况记录板</h1>
      <div class='record-text'>
          <li v-for='item in demodata'>{{item}}</li>
      </div>
  </div>
</template>

<script>
export default {
  name: 'record',
  data () {
    return {
    }
  },
  props:{
     demodata:{
         type:Array,
         default:function(){
             return []
         }
     },
     session:{
         type:String,
         default:'all'
     }
  },
  watch:{
      
  },
  methods:{
      
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
    .record-box{
        margin-top:30px;
        h1{
            font-size:40px;
            font-weight: 700;
        }
        .record-text{
            height: 400px;
            overflow: hidden;
             overflow-y: scroll; 
             -webkit-overflow-scrolling: touch; 
             li{
                 text-align:left;
                 padding-left:30px;
                 line-height: 50px;
             }
        }
    }

</style>
