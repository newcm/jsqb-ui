<template>
  <div class="switch-box">
      <div class='switch-btn' @touchstart='chosestart' @touchend='choseend' :style='change'>
          <div class='switch-o' :class="{active:flag,wid:small}"></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'switch-ui',
  data () {
    return {
        flag:false,
        small:false
    }
  },
  props:{
     chosecolor:{
         type:String,
         default:'#41B883'
     },
     color:{
         type:String,
         default:'#efefef'
     }
  },
  computed:{
      change(){
          return{
              background:`${this.flag?this.chosecolor:this.color}`
          }
      }
  },
  methods:{
      choseend(){
         this.flag = !this.flag;
         this.small = !this.small;
         this.$emit('chose',this.flag)
      },
      chosestart(){
          this.small = !this.small;
      }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.switch-box {
    div{
        // box-sizing: border-box;
    }
   display:inline-block;
   .switch-btn{
       display:inline-block;
       padding:1px;
       width:140px;
       height:70px;
       border:1px solid #ccc;/*no*/
       border-radius:36px;
       position: relative;
       .switch-o{
           display:inline-block;
           position: absolute;
           top:0;
           left:0;
           width:70px;
           height: 70px;
           border-radius:35px;
           background:#fff;
           -moz-box-shadow: 2px 2px 2px #888888; /* 老的 Firefox */
            box-shadow: 2px 2px 2px #888888;
            transition:transform 0.4s,-webkit-transform 0.4s,left 0.4s,width 0.3s;
            -webkit-transition:transform 0.4s,-webkit-transform 0.4s,left 0.4s,width 0.3s;
            &.active{
                transform:translate(-100%,0);
                -webkit-transform:translate(-100%,0);
                left:100%;
            }
            &.wid{
                width:100px;
                // left:50%;
            }
       }
   }
}

</style>
