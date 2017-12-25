<template>
  <div class="kd-covert" ref='scrollBox'
  @touchstart='onstart'
  @touchmove='onmove'
  @touchend='onend'
  >
      <div  ref='scroll' class='scroll-box' :style='scrollStyle'>
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: 'hell',
  data () {
    return {
        time:400,
        move:0,
        startY:0,
        startT:0,
        endY:0,
        endT:0,
        site:0
    }
  },
  props:{
     
  },
  mounted(){
      let that = this;
      
        let h = parseInt(window.getComputedStyle(that.$refs.scrollBox, null).height);
        let content = parseInt(window.getComputedStyle(that.$refs.scroll, null).height)
         
  },
  create(){
     
  },
  computed:{
      scrollStyle(){
          return{
              transition:`${this.time}ms`,
              transform:`translate3d(0,${this.site+this.move}px,0)`
          }
      }
  },
  methods:{
      onstart(e){
          e.stopPropagation();
          e.preventDefault();
          this.startY = event.touches[0].clientY;
          this.time = 0;
          this.startT = new Date().getTime();
      },
      onmove(e){
          e.stopPropagation();
          e.preventDefault();
          let moveSite = event.touches[0].clientY-this.startY;
          this.move = moveSite;
      },
      onend(e){
          e.stopPropagation();
          e.preventDefault();
          let that = this;
          this.time = 500;
          this.endT = new Date().getTime();
          this.endY = event.changedTouches[0].clientY;
          let h = parseInt(window.getComputedStyle(that.$refs.scrollBox, null).height);
          let content = parseInt(window.getComputedStyle(that.$refs.scroll, null).height);
          if(this.endT-this.startT<200){
              let b = this.site;
            //   this.site = (this.endY-this.startY)>0?(this.endY-this.startY)*3.5>;
            //   this.easeOut(0,this.)
          }else{
              this.move = 0;
              this.site+= this.endY-this.startY;
              if(Math.abs(this.site)+h>=content){
                  this.site = h-content;
              }
              if(this.site>=0){
                  this.site = 0;
              }
          }
      },
      easeOut(t, b, c, d) {
          /*
 * Tween.js
 * t: current time（当前时间）
 * b: beginning value（初始值）
 * c: change in value（变化量）
 * d: duration（持续次数）每次执行的时间 就是定时器执行的时间
*/
        return (t==d) ? b + c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.kd-covert {
   height:500px;
   border:1px solid #efefef;
   overflow: hidden;
   .scroll-box{
       padding:1px;
   }
}

</style>
