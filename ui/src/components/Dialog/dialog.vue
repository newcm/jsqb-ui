<template>
    <div class='dialog-box'>

    </div>
</template>

<script>
export default {
  name: 'hell',
  data () {
    return {
      
    }
  },
  props:{
     title:{
         type:String
     }
  },
  methods:{
    
    
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
    .dialog-box{
        position:fixed;
        left: 0;
        right: 0;
        top:0;
        bottom:0;
        background:rgba(0,0,0,.5)
    }

</style>
