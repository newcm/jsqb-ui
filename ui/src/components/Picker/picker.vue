<template>
  <div class="picker-box">
        <div class='picker-content' 
            @touchstart='touchstart($event)'
            @touchmove='touchmove($event)'
            @touchend='touchend($event)'
        >
            <div class='picker-mask-top'></div>
            <div class='picker-mask-bottom'></div>
            <div class='info-box'>
                <div class='picker-info' :style="boxstyle">
                    <div v-for='(item,index) in value1' :class="{chose:index==2-offset}" class='on'>{{item}}</div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'hell',
  data () {
    return {
        site:82,
        startT:0,
        endT:0,
        offset:2,
        moveD:0,
        time:300,
        width:100
    }
  },
  props:{
     value1:{
         type:Array,
         default:function(){
             return []
         }
     },
     step:{
         type:Number,
         default:2
     }
  },
  computed:{
      boxstyle() {
          return {
              transform:`translate3d(0,${this.site*this.offset/75+this.moveD/75}rem,0)`,
              transition: `${this.time}ms`,
              width:`${this.width}%`
          }
      }
  },
  mounted(){
      
  },
  methods:{
      touchstart(e){
          e.stopPropagation();
          e.preventDefault();
          this.startY = event.touches[0].clientY;
          this.time = 0;
          this.startT = new Date().getTime();
      },
      touchmove(e){
          e.stopPropagation();
          e.preventDefault();
          let moveSite = event.touches[0].clientY-this.startY;
          this.moveD = moveSite;     
      },
      touchend(e){
          e.stopPropagation();
          e.preventDefault();
          let len = this.value1.length;
          this.endT = new Date().getTime();
          this.end = event.changedTouches[0].clientY;
          this.time = 300;
          if(this.endT-this.startT>300){
              let step = this.moveD>0?
              Math.abs(this.moveD)%80>40?parseInt(this.moveD/80)+1:parseInt(this.moveD/80)
              :Math.abs(this.moveD)%80>40/2?parseInt(this.moveD/80)-1:parseInt(this.moveD/80);
              this.moveD = 0;
              this.offset = step>0?this.offset+step>=2?2:this.offset+step
                :this.offset+step<=2-len?3-len:this.offset+step;
          }else{
            this.moveD = 0;
            let step = parseInt((this.end-this.startY)/20);
            this.offset = step>0?this.offset+step>=2?2:this.offset+step
            :this.offset+step<=2-len?3-len:this.offset+step;
          }
          
      }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.picker-box {
   position:relative;
   text-align:center;
//    left: 0;
//    top:0;
//    width:100%;
//    height:100%;
//    background:rgba(0,0,0,.6);
//    div{
//        box-sizing:border-box;
//    }
}
.picker-content{
    text-align:center;
    position: relative;
    width:100%;
    background:#fff;
    overflow: hidden;
    height:410px;
    // background:#E5E5E5;
    .info-box{
        display:flex;
        justify-content: space-between;
    }
    .picker-info{
        transform:translateY(164px);
        -webkit-transform:translateY(164px);
        div {
            line-height:82px;
            font-size:32px;
            color:#aaa;
        }
        .chose{
            color:#000;
        }
    }
    .picker-mask-top{
        position: absolute;
        top:0;
        left: 0;
        height:164px;
        width:100%;
        pointer-events:none;
        border-bottom:1px solid #999;
    }
    .picker-mask-bottom{
        position: absolute;
        bottom:0;
        left: 0;
        height:164px;
        width:100%;
        pointer-events:none;
        border-top:1px solid #999;
    }
}
</style>
