<template>
    <div class='citypicker-mask' v-show='tipshow'>
        <div class='citypicker-box' :class='{animate:tipshow}'>
            <div class='citypicker-head'>
                <slot>
                    <div class='city-head-info'>
                        <div class='citypicker-btn' @click='cancel()'>取消</div>
                        <div>{{title}}</div>
                        <div class='citypicker-btn' @click='comfrim()'>确定</div>
                    </div>
                </slot>
            </div>
            <div class="picker-view" ref='picker'>
                <selectui :value1='val1' v-if='val1.length>0' :step='step' @changeval='change1' ex='4'></selectui>
                <selectui :value1='val2' v-if='val2.length>0' :step='step'  @changeval='change2' ex='5' :about='way1'></selectui>
                <selectui :value1='val3' v-if='val3.length>0' :step='step'  @changeval='change3' ex='6'></selectui>
            </div>
        </div>
    </div>  
</template>

<script>
import selectui from './picker.vue'
export default {
  name: 'hell',
  data () {
    return {
       values:[],
       step:2,
       way:-1,
        way1:-1,
        way2:-1
    }
  },
  mounted(){

  },
  props:{
     title:{
         type:String,
         default:'提示信息'
     },
     tipshow:{
         type:Boolean,
         default:true
     },
     val1:{
         type:Array,
         default:function(){
             return []
         }
     },
     val2:{
         type:Array,
         default:function(){
             return []
         }
     },
     val3:{
         type:Array,
         default:function(){
             return []
         }
     },
     commit:{
         type:String,
         default:'1'
     }

  },
  mounted(){
      
  },
  methods:{
      cancel(){
          this.$emit('update:tipshow',false);
          this.$emit('cancel');
      },
      comfrim(){
          this.$refs.picker.querySelectorAll('.chose').forEach(element => {
              this.values.push(element.innerHTML)
          });
          this.$emit('update:tipshow',false);
          this.$emit('comfrim',this.values)
          this.values=[];
      },
      change1(i){
        //   console.log(i)
          this.way1=i;
        // console.log(this.way1)
      },
      change2(i){

      },
      change3(i){

      }
  },
  components:{
      selectui
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
    .citypicker-mask{
        text-align:center;
        position:fixed;
        left: 0;
        top:0;
        width:100%;
        height:100%;
        background:rgba(0,0,0,.6);
        div{
            box-sizing:border-box;
        }
    }
    .citypicker-box{
        position: absolute;
        width:100%;
        bottom:0;
        left: 0;background:#fff;
        &.animate{
            animation:mymove 0.5s;
            -webkit-animation:mymove 0.5s;  
        }
    }
    .city-head-info{
        overflow: hidden;
        border-bottom:1px solid #999;/*no*/
        div{
            float:left;
            width:60%;
            line-height:82px;
            font-size:32px;
        }
        .citypicker-btn{
            width:20%;
        }
    }
    .picker-view{
        display: flex;
        display: -webkit-flex;
        .picker-box{
            flex:1
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
