<template>
  <div class="kd-covert" ref='scrollBox'
  @touchstart='onstart'
  @touchmove='onmove'
  @touchend='onend'
  >
    <div  ref='scroll' class='scroll-box' :style='scrollStyle'>
        <div v-if='state==1' class='reload'>
            <arrow class='arrow ' :class='{roate:roate}'></arrow>
            <div>松手加载...</div>
        </div>
        <div  v-if='state==2' class='reloading'>
            <load></load>
            <div>玩命加载...</div>
        </div>
        <!-- 核心内容 -->
        <slot></slot> 
        <div class='addmore' >
            <load v-if='state==3'></load>
            <span v-if='no'>我也是有底线的...</span>
        </div> 
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
        roate:false,
        no:false,
        state:1
    }
  },
  props:{
    //  state:{
    //      type:Number,
    //      default:1
    //  }
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
          let that = this;
          let moveSite = event.touches[0].clientY-this.startY;
          let h = parseInt(window.getComputedStyle(that.$refs.scrollBox, null).height);
          let content = parseInt(window.getComputedStyle(that.$refs.scroll, null).height);
          if(moveSite>0){
              if(this.site>=0){
                  this.move = Math.pow(moveSite,0.8);
                  if(this.move>60){
                      this.roate = true;
                  }
                  return;
              }
               this.move = moveSite; 
          }else{
              if(this.site<=h-content+60){
                   this.move = -Math.pow(Math.abs(moveSite),0.8);
                  return; 
              }
               this.move = moveSite; 
              
          }
          
            
      },
      onend(e){
          e.stopPropagation();
          e.preventDefault();
          let that = this;
          this.roate = false;
          this.time = 300;
          this.flag = true;
          this.endT = new Date().getTime();
          this.endY = event.changedTouches[0].clientY;
          let h = parseInt(window.getComputedStyle(that.$refs.scrollBox, null).height);
          let content = parseInt(window.getComputedStyle(that.$refs.scroll, null).height);
          let s = this.endY-this.startY;
          if(content<=h){ //判断是否有课滚动区域
              this.move = 0;
              if(s<0){
                  this.no = true;
              }else{
                    this.state = 2;
                    console.log('刷新')
                    this.$emit('reload',this.done)
              }
              
              return;
          }
          if(this.endT-this.startT<200){//快速滚动时变化
            this.move = 0;
            this.site = s>0?this.site+s*Math.pow(s,0.6)>=0?0:this.site+s*Math.pow(s,0.6):
            this.site+s*Math.pow(-s,0.6)<=h-content?h-content:this.site+s*Math.pow(-s,0.6);
            // 这边暂时不添加 加载更多判断
          }else{//  慢速拖动时的变化
              this.move = 0;
              this.site+= s;
              if(Math.abs(this.site)+h>=content){
                  //   加载
                  if(this.site<h-content-10){
                    this.state = 3;
                      console.log('加载')
                      this.$emit('loadmore',this.done) 
                  }
                  this.site = h-content; 
              }
              if(this.site>=0){
                  //  刷新
                  if(this.site>30){
                    this.state = 2;
                      console.log('刷新')
                      this.$emit('reload',this.done)
                  }
                  this.site = 0;
              }
          }
      },
      done(flag){
          if(flag){
              this.state = 1;
              this.no = true;
          }else{
              this.state = 1;
              this.no = false;
          }
      }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.kd-covert {
   height:800px;
//    border:1px solid #efefef;
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
       padding:10px 0;
       .reload{
           text-align:center;
           font-size:30px;
           margin-top:-150px;
           .arrow{
               width:40px;
               height:80px;
               transition: 300ms;
           }
           .roate{
               transform: rotate(180deg);
           }
       }
       .reloading{
           text-align:center;
           font-size:30px;
           img{
               width:60px;
           }
       }
       .addmore{
           height:120px;
           box-sizing: border-box;
           padding:20px 0;
           text-align:center;
           img{
               width:60px;
           }
       }
      
   }
}


</style>
