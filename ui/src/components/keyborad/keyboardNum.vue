<template>
  <div class="keyboard-box" v-if='keyshow'>
      <div class='keyborad-panel'>
          <div class='keyboard-key' :class='{animate:keyshow}'>
              <div>
                <span @click='close'>取消</span><span @click='close'>确定</span>
            </div>
              <span v-for='(key,item) in keyValue' @click='pushValue(item)'>{{key}}</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'hell',
  data () {
    return {
      keyValue:[1,2,3,4,5,6,7,8,9,'●',0,'-'],
      value:[],
      index:0,
      show:true,
      load:true
    }
  },
  props:{
     keyshow:{
         type:Boolean,
         default:true
     }
  },
  methods:{
      pushValue (i){
          var that = this;
          if(i==9){
              return;
          }else if(i==11){
              this.index = this.index==0?0:--this.index;
              this.value.splice(this.index,1) 
          }else{
              this.index++;
              this.value.push(this.keyValue[i]); 
          }  
          this.$emit('setval',this.value)
      },
      close(){
           this.$emit('update:keyshow',!this.keyshow)
      }
    
  },
  watch:{
      keyshow(val){
          if(val){
                this.value=[];
                this.index=0;
          }
      }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.keyboard-box {
   position:fixed;
   left: 0;
   right: 0;
   top:0;
   bottom:0;
//    background:rgba(0,0,0,.5);
   text-align:center;
   div{
       box-sizing: border-box;
   }
}
.keyborad-panel{
    position: absolute;
    bottom:0;
    left: 0;
    width:100%;
    // height: 700px;
    background:#fff;
    .keyboard-header{
        line-height:80px;
        font-size:32px;
        border-bottom:1px solid #666;/*no*/
    }
    .keyboard-input{
        margin:60px 0;
        text-align:center;
        font-size:0;
        i{
            display: inline-block;
            width:84px;
            height:84px;
            border:1px solid #999;/*no*/
            vertical-align: middle;
            font-size:32px;
            line-height:80px;
        }
    }
    .keyboard-key{
        &.animate{
            animation:mymove 0.5s;
            -webkit-animation:mymove 0.5s;  
        }
        position: absolute;
        bottom:0;
        width:100%;
        font-size:0;
        background: #efefef;
        span{
            font-size:38px;
            display: inline-block;
            width:33.3333%;
            height:90px;
            line-height:70px;
            vertical-align: middle;
        }
    }
}

@keyframes mymove
{
from {transform: translate(0%,100%);}
to {transform: translate(0%,0%);}
}

@-webkit-keyframes mymove /* Safari and Chrome */
{
from {transform: translate(0%,100%);}
to {transform: translate(0%,0%);}
}
</style>
