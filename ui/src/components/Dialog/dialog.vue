<template>
    <div class='dialog-box'>
        <div class='dialog-info'>
            <div class='dialog-header' v-if='title'>{{title}}</div>
            <div class='dialog-content'>
                <slot>弹出框内容</slot>
            </div>
            <div class='dialog-footer'>
                <span v-if='type=="comfrim"' @click='dispatch($event,"comfrim")' :class='type=="comfrim"?"span1":"span2"'>{{comfrimBtn}}</span>
                <span @click='dispatch($event,"cancel")' :class='type=="comfrim"?"span1":"span2"'>{{cancelBtn}}</span>
            </div>
        </div>
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
     },
     type:{
         type:String,
         default:'alert'
     },
     comfrimBtn:{
         type:String,
         default:'确定'
     },
     cancelBtn:{
         type:String,
         default:'取消'
     }
  },
  methods:{
    dispatch($event,eventStr){
        this.$emit('dialog',eventStr)
    }
    
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
    .dialog-info{
        position: absolute;
        left: 50%;
        top: 50%;
        max-width:600px;
        min-width:500px;
        transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
        background:#fff;
        border-radius:10px;
        .dialog-header{
            text-align:center;
            font-size:36px;
            line-height:80px;
        }
        .dialog-content{
            padding:20px;
        }
        .dialog-footer{
            text-align:center;
            display: flex;
            display:-webkit-flex;
            span{
                font-size:32px;
                line-height:70px;
                border-top:1px solid #efefef;/*no*/
            }
            .span1{
                width:50%;
            }
            span:nth-child(1){
                border-right:1px solid #efefef;/*no*/
            }
            .span2{
                width:100%;
                &:nth-child(1){
                     border-right:none;
                }
            }
            
        }
    }
</style>
