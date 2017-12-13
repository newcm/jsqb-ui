<template>
  <div class="keyboard-box" v-if='keyshow'>
      <div class='keyborad-panel'>
          <div class='keyboard-header' @click='close()'>请输入交易密码 <img src="" alt=""></div>
          <!-- <slot v-if='loading'><h1>提交密码。。。。</h1></slot>
          <slot v-if='success'><h1>提交成功。。。。</h1></slot>-->
          <slot><h1>提交失败。。。。</h1></slot> 
          <div class='keyboard-input'>
              <i>{{value.length>0?'●':''}}</i>
              <i>{{value.length>1?'●':''}}</i>
              <i>{{value.length>2?'●':''}}</i>
              <i>{{value.length>3?'●':''}}</i>
              <i>{{value.length>4?'●':''}}</i>
              <i>{{value.length>5?'●':''}}</i>
          </div>
          <div class='keyboard-key'>
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
      keyValue:[1,2,3,4,5,6,7,8,9,'',0,'-'],
      value:[],
      index:0,
      show:true
    }
  },
  props:{
     keyshow:{
         type:Boolean,
         default:true
     },
     loading:{
         type:Boolean,
         default:false
     },
     success:{
         type:Boolean,
         default:false
     },
     no:{
         type:Boolean,
         default:false
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
              if(this.index<6){
                  this.value.push(this.keyValue[i]);
                    this.index++;
                    if(this.index == 6){
                        this.$emit('getvalue',this.value.join(''))
                    }
              }
          }  
      },
      close(){
          this.value=[];
           this.index=0;
           this.$emit('close')
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
   background:rgba(0,0,0,.5)
}
.keyborad-panel{
    position: absolute;
    bottom:0;
    left: 0;
    width:100%;
    height: 800px;
    background:#fff;
    .keyboard-header{
        line-height:80px;
        font-size:32px;
        border-bottom:1px solid #666;
    }
    .keyboard-input{
        margin:60px 0;
        text-align:center;
        font-size:0;
        i{
            display: inline-block;
            width:84px;
            height:84px;
            border:1px solid #999;
            vertical-align: middle;
            font-size:32px;
            line-height:80px;
        }
    }
    .keyboard-key{
        position: absolute;
        bottom:0;
        width:100%;
        font-size:0;
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
</style>
