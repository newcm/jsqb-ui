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
                <div class='picker-info' :class="ex?'picker-info-'+ex:'picker-info-'" :style="boxstyle">
                    <div v-for='(item,index) in about!=-1?value1[about]:value1' :class="{chose:index==2-offset}" class='on'>{{item}}</div>
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
        // site:0,
        startT:0,
        endT:0,
        offset:2,
        moveD:0,
        time:300,
        end:0,
        id:0
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
     },
     about:{
         type:Number,
         default:-1
     },
     ex:{ //多个选择器同时存在
         type:String,
         default:''
     }
  },
  computed:{
      boxstyle() {
          return {
              transform:`translate3d(0,${this.site*this.offset+this.moveD}px,0)`,
              transition: `all ${this.time}ms ease-out`,
          }
      }
  },
  mounted(){ 
        this.$emit('changeval',this.id)
  },
  watch:{
      about(){
          this.offset = 2;
      }
  },
  methods:{
      touchstart(e){
          e.stopPropagation();
          e.preventDefault();
          let that = this;
          let h = document.querySelector('.picker-info-'+that.ex);
          this.site = parseFloat(window.getComputedStyle(h, null).height)/(this.about!=-1?this.value1[this.about].length:this.value1.length);
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
          let len = this.about!=-1?this.value1[this.about].length:this.value1.length;
          this.endT = new Date().getTime();
          this.end = event.changedTouches[0].clientY;
          this.time = 300;
          if(this.endT-this.startT>180){
              let step = this.moveD>0?
              Math.abs(this.moveD)%this.site>this.site/4?parseInt(this.moveD/this.site)+1:parseInt(this.moveD/this.site)
              :Math.abs(this.moveD)%this.site>this.site/4?parseInt(this.moveD/this.site)-1:parseInt(this.moveD/this.site);
              this.moveD = 0;
              this.offset = step>0?this.offset+step>=2?2:this.offset+step
                :this.offset+step<=2-len?3-len:this.offset+step;
          }else{
            this.moveD = 0;console.log(this.end-this.startY)
            let step = parseInt((this.end-this.startY)/(200/Math.abs(this.end-this.startY)));
            this.offset = step>0?this.offset+step>=2?2:this.offset+step
            :this.offset+step<=2-len?3-len:this.offset+step;
          }
          this.id = 2-this.offset;
          this.$emit('changeval',this.id)
      }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.picker-box {
   position:relative;
   text-align:center;
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
        width:100%;
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
        border-bottom:1px solid #999;/*no*/
    }
    .picker-mask-bottom{
        position: absolute;
        bottom:0;
        left: 0;
        height:164px;
        width:100%;
        pointer-events:none;
        border-top:1px solid #999;/*no*/
    }
}
</style>
