<template>
  <div class="kd-covert" ref='scrollBox'
  @touchstart='onstart'
  @touchmove='onmove'
  @touchend='onend'
  >
    <div class='top' v-show='reload'>
              刷新页面
    </div>
    <div  ref='scroll' class='scroll-box' :style='scrollStyle'>
        <div style='text-align:center'>
            <arrow style='width:20px;height:30px;margin:0 auto;vertical-align:center'></arrow>
            <div>玩命加载...</div>
        </div>
        <div style='text-align:center'>
            <load style='width:30px;height:30px;margin:0 auto;fill:#aaa'></load>
        </div>
        

        <slot></slot> 
        <div style='text-align:center'>
            <load style='width:30px;height:30px;margin:0 auto;fill:#aaa'></load>
        </div>
        
    </div>
    <div class='bottom' v-show='loadmore'>
              加载更多
    </div>
  </div>
</template>

<script>
import arrow from "./arrow.vue"
import load from "./load.vue"
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
        site:0,
        flag:true
    }
  },
  props:{
     reload:{
         type:Boolean,
         default:false
     },
     loadmore:{
         type:Boolean,
         default:false
     }
  },
  watch:{
      loadmore(val){
          let that = this;
          setTimeout(function(){
               let h = parseInt(window.getComputedStyle(that.$refs.scrollBox, null).height);
                let content = parseInt(window.getComputedStyle(that.$refs.scroll, null).height)
                that.site = h-content;
            },0)  
      }
  },
  mounted(){
     
       
               
  },
  computed:{
      scrollStyle(){
          return{
              transition:`all ${this.time}ms ease-out`,
              transform:`translate3d(0,${this.site+this.move}px,0)`
          }
      }
  },
  components:{
      arrow,
      load
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
          this.time = 300;
          this.flag = true;
          this.endT = new Date().getTime();
          this.endY = event.changedTouches[0].clientY;
          let h = parseInt(window.getComputedStyle(that.$refs.scrollBox, null).height);
          let content = parseInt(window.getComputedStyle(that.$refs.scroll, null).height);
          
          let sc = content-h;
          if(this.endT-this.startT<200){
              this.move = 0;
            this.site = (this.endY-this.startY)>0?this.site+(this.endY-this.startY)*5.2>=0?0:this.site+(this.endY-this.startY)*5.2:
            this.site+(this.endY-this.startY)*5.2<=h-content?h-content:this.site+(this.endY-this.startY)*5.2;
            // 这边暂时不添加 加载更多判断
          }else{
              this.move = 0;
              this.site+= this.endY-this.startY;
              if(Math.abs(this.site)+h>=content){
                  //   加载
                  if(this.site<h-content-30){
                      console.log('加载')
                      this.$emit('loadmore') 
                  }
                  this.site = h-content;
                
              }
              if(this.site>=0){
                  //  刷新
                  if(this.site>30){
                      console.log('刷新')
                      this.$emit('reload')
                  }
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
   position: relative;
    .top{
           position: absolute;
           top:0;
           left: 0;
           width:100%;
           background:rgba(0,0,0,.5);
           color:#fff;
           text-align:center;
           line-height: 80px;
           font-size:32px;
       }
       .bottom{
           position: absolute;
           bottom:0;
           left: 0;
           width:100%;
           background:rgba(0,0,0,.5);
           color:#fff;
           text-align:center;
           line-height: 80px;
           font-size:32px;
       }
   .scroll-box{
       padding:1px;
    //    position: relative;
      
   }
}

</style>
