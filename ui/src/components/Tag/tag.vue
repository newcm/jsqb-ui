<template>
  <div class="tag-box">
      <div class='tag-on' :style='width'>
            <div class='tag-content' >
                <div v-for='(item,index) in data' :class='{active:index==i}' @click='onTag(index)'>{{item}}</div>
            </div>
            <div class='tag-line' :style='moveLine'></div>
      </div>
      
  </div>
</template>

<script>
export default {
  name: 'tag',
  data () {
    return {
        i:0,
        offset:0
    }
  },
  props:{
     data:{
         type:Array,
         default:function(){
             return []
         }
     }
  },
  computed:{
      moveLine(){
          return{
              width:`${100/this.data.length}%`,
              left:`${100/this.data.length*this.i}%`
          }
      },
      width(){
          return {
              width:`${this.data.length>4?this.data.length*25:100}%`,
              transform:`translate3d(-${100/this.data.length*this.offset}%,0,0)`,
              WebkitTransform:`translate3d(-${100/this.data.length*this.offset}%,0,0)`
          }
      }
  },
  methods:{
     onTag(i){
         if(this.data.length<=4){
             this.i = i;
         }else{
             let old = this.i;
             let step = i-old;
             this.offset = step>0?
             this.offset+step>=this.data.length-this.offset-4?this.data.length-4:this.offset+step:
             this.offset+step<=0?0:this.offset+step;
             console.log(this.offset)
             this.i = i;
             
         }
         this.$emit('ontap',i)
     }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.tag-box {
    width:100%;
    text-align:center;
    overflow: hidden;
    .tag-on{
        position: relative;
        transition:all 0.45s;
        -webkit-transition:all 0.45s;
    }
    .tag-line{
        position: absolute;
        bottom:0;
        left:0;
        height:2px;/*no*/
        background:#41B883;
        transition:all 0.3s;
        -webkit-transition:all 0.3s;
    }
    .tag-content{
        display: flex;
        background:#efefef;
        
        // border:1px solid #aaa;
        div{
            flex:auto;
            line-height: 80px;
            height:80px;
            font-size:32px;
            &.active{
                color:#41B883;
            }
        }
        
    }
    div{
        // box-sizing: border-box;
    }
}

</style>
