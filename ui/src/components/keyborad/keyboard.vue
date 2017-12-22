<template>
  <div class="keyboard-box" v-if='keyshow'>
      <div class='keyborad-panel'>
          <div class='keyboard-header' @click='close()' >请输入交易密码(点击关闭) <img src="" alt=""></div>
          <div v-show='!show'>
              <slot v-if='load'>
                  <div class="loadEffect">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                    </div>
                </slot>
            <slot v-if='success'><h1>提交成功。。。。</h1></slot>
            <slot v-if='fail'><h1>提交失败。。。。</h1></slot> 
          </div>
          <div class='keyboard-input' v-show='show'>
              <i>{{value.length>0?'●':''}}</i>
              <i>{{value.length>1?'●':''}}</i>
              <i>{{value.length>2?'●':''}}</i>
              <i>{{value.length>3?'●':''}}</i>
              <i>{{value.length>4?'●':''}}</i>
              <i>{{value.length>5?'●':''}}</i>
          </div>
          <div class='keyboard-key' v-show='show'>
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
      show:true,
      load:true
    }
  },
  props:{
     keyshow:{
         type:Boolean,
         default:true
     },
     success:{
         type:Boolean,
         default:false
     },
     fail:{
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
                        this.show = !this.show;
                        this.$emit('update:loading',!this.loading)
                        this.$emit('getvalue',this.value.join(''))
                    }
              }
          }  
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
                this.show=true;
                this.load=true;
                this.$emit('update:success',false);
                this.$emit('update:fail',false);
          }
      },
      success(val){
          if(val){
              this.load = false;
          }  
      },
      fail(val){
          if(val){
              this.load = false;
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
   background:rgba(0,0,0,.5);
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
    height: 700px;
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
.loadEffect{
    width: 100px;
    height: 100px;
    position: relative;
    margin: 0 auto;
    margin-top:100px;
}
.loadEffect span{
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: lightgreen;
    position: absolute;
    -webkit-animation: load 1.04s ease infinite;
}
@-webkit-keyframes load{
    0%{
        -webkit-transform: scale(1.2);
        opacity: 1;
    }
    100%{
        -webkit-transform: scale(.3);
        opacity: 0.5;
    }
}
.loadEffect span:nth-child(1){
    left: 0;
    top: 50%;
    margin-top:-10px;
    -webkit-animation-delay:0.13s;
}
.loadEffect span:nth-child(2){
    left: 14px;
    top: 14px;
    -webkit-animation-delay:0.26s;
}
.loadEffect span:nth-child(3){
    left: 50%;
    top: 0;
    margin-left: -10px;
    -webkit-animation-delay:0.39s;
}
.loadEffect span:nth-child(4){
    top: 14px;
    right:14px;
    -webkit-animation-delay:0.52s;
}
.loadEffect span:nth-child(5){
    right: 0;
    top: 50%;
    margin-top:-10px;
    -webkit-animation-delay:0.65s;
}
.loadEffect span:nth-child(6){
    right: 14px;
    bottom:14px;
    -webkit-animation-delay:0.78s;
}
.loadEffect span:nth-child(7){
    bottom: 0;
    left: 50%;
    margin-left: -10px;
    -webkit-animation-delay:0.91s;
}
.loadEffect span:nth-child(8){
    bottom: 14px;
    left: 14px;
    -webkit-animation-delay:1.04s;
}
</style>
