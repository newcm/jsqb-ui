<template>
  <div class="tips-box" v-show='tipshow'>
      <slot></slot>
      <div>{{title}}</div>
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
         type:String,
         default:'提示信息'
     },
     tipshow:{
       type:Boolean,
       default:false
     },
     duration:{
         type:Number,
         default:1500
     }
  },
  watch:{
      tipshow(val){
            if (this._timeout) clearTimeout(this._timeout)
            if (val && !!this.duration) {
                this._timeout = setTimeout(()=> this.$emit('update:tipshow',!this.tipshow), this.duration)
            }
      }
  },
  methods:{
      
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.tips-box {
   position:fixed;
   left: 50%;
   top:50%;
   transform:translate(-50%,-50%);
   -webkit-transform:translate(-50%,-50%);
   background:rgba(0,0,0,.6);
   padding:20px;
   max-width:400px;
   min-width:100px;
   border-radius:6px;
   color:#fff;
   text-align:center;
}

</style>
