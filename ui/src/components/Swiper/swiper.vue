<template>
  <div class="swiper-box"
    @touchstart='gostart'
    @touchmove='moveon'
    @touchend='goend'>
    <div class='swiper-content' 
    :style='transform'>
          <div v-for='item in data' class='swiper-item' :style='widthItem' :class='{isfloat:dir=="X"}'>{{item}}</div>
    </div> 
    <div class='swiper-nav'>
        <div v-for='(item,index) in data' class='swiper-index' :class="{active:offset==index}"></div>  
    </div> 
  </div>
</template>

<script>
export default {
  name: 'tag',
  data () {
    return {
       data:[1,2,3,4,34,3] ,
       startX:0,
       offset:0,
       startY:0,
       startT:0,
       time:400,
       moveX:0,
       moveY:0,
       endT:0,
       endX:0,
       endY:0
    }
  },
  props:{
     dir:{
         type:String,
         default:"X"
     }
  },
  computed:{
      transform(){
          return{
            width:`${this.dir=='X'?this.data.length*100:100}%`,
            transform:`translate3d(${this.dir=='X'?(this.moveX-100/this.data.length*this.offset):0}%,${this.dir=='Y'?(this.moveY-100/this.data.length*this.offset):0}%,0)`,
            transition:`all ${this.time}ms`
          }
      },
      widthItem(){
          return{
              width:`${this.dir=='X'?100/this.data.length:100}%`
          }
      }
  },
  methods:{
     gostart(e){
        e.stopPropagation();
        e.preventDefault();
        this.startT = new Date().getTime();
        if(this.dir==='X'){
            this.startX = event.touches[0].clientX;
        }
        if(this.dir==='Y'){
            this.startY = event.touches[0].clientY;
        }
        this.time = 0;
     },
     moveon(e){
        e.stopPropagation();
        e.preventDefault();
        if(this.dir==='X'){
            let moveSite = event.touches[0].clientX-this.startX;
            let x = document.querySelector('.swiper-content');
            this.moveX = moveSite*100/parseFloat(window.getComputedStyle(x, null).width)
        }
        if(this.dir==='Y'){
            let moveSite = event.touches[0].clientY-this.startY;
            let x = document.querySelector('.swiper-box');
            this.moveY = moveSite*100/(parseFloat(window.getComputedStyle(x, null).height)*this.data.length);
        }

     },
     goend(e){
        e.stopPropagation();
        e.preventDefault();
        this.endT = new Date().getTime();
        this.time = 400;
        let len = this.data.length;
        if(this.dir==='X'){
            this.endX = event.changedTouches[0].clientX;
            if(this.endT-this.startT>320){
                let step = this.endX-this.startX>0?Math.abs(this.endX-this.startX)>20?-1:0
                :Math.abs(this.endX-this.startX)>20?1:0;
                this.offset = step>0?this.offset+step>this.data.length-1?this.data.length-1:this.offset+step:
                this.offset+step<0?0:this.offset+step;
                this.moveX = 0;
            }else{
                this.moveX = 0;
                let step = this.endX-this.startX>0?-1:1;
                this.offset = step>0?this.offset+step>this.data.length-1?this.data.length-1:this.offset+step:
                this.offset+step<0?0:this.offset+step;
            }
        }
        if(this.dir==='Y'){
            this.endY = event.changedTouches[0].clientY;
            if(this.endT-this.startT>320){
                let step = this.endY-this.startY>0?Math.abs(this.endY-this.startY)>20?-1:0
                :Math.abs(this.endY-this.startY)>20?1:0;
                this.offset = step>0?this.offset+step>this.data.length-1?this.data.length-1:this.offset+step:
                this.offset+step<0?0:this.offset+step;
                this.moveY = 0;
            }else{
                this.moveY = 0;
                let step = this.endY-this.startY>0?-1:1;
                this.offset = step>0?this.offset+step>this.data.length-1?this.data.length-1:this.offset+step:
                this.offset+step<0?0:this.offset+step;
            }
        }
     }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.swiper-box {
    width:100%;
    height:400px;
    overflow:hidden;
    position: relative;
    div{
        box-sizing: border-box;
    }
    .swiper-nav{
        position:absolute;
        width:100%;
        bottom:10px;
        text-align:center;
        .swiper-index{
            width:26px;
            height: 26px;
            display: inline-block;
            background:#efefef;
            border-radius:50%;
            margin-left:5px;
            &.active{
                background:#41B883
            }
        }
    }
    .swiper-content{
        .swiper-item{
            height: 400px;
            border:2px solid #41B883;/*no*/
            border-radius:10px;
        }
        .isfloat{
            float:left
        }
        
    }
}

</style>
