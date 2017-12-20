<template>
  <div class="select-box" v-show='tipshow'>
      <div class='select-plane'>
          <div class='select-head'>
              <div>取消</div>
              <div>标题</div>
              <div>确定</div>
          </div>
          <div class='select-content' @touchstart='start'
              @touchmove='move'
              @touchend='end'
              >
              <div class='select-mask-top'></div>
              <div class='select-mask-bottom'></div>
              <div class='select-info' :style="boxstyle">
                  <div v-for='item in data'>{{item}}</div>
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
       data:[1,2,3,4,5,6,5,4,3,3,4,4,4],
       site:164,
       baseSite:164,
       time:300
    }
  },
  props:{
     title:{
         type:String,
         default:'提示信息'
     },
     duration:{
         type:Number,
         default:2000
     },
     tipshow:{
         type:Boolean,
         default:true
     }
  },
  computed:{
      boxstyle() {
          return {
              transform:`translate3d(0,${this.site}px,0)`,
              transition: `${this.time}ms`,
          }
      }
  },
  watch:{
    //   tipshow(val){
    //         if (this._timeout) clearTimeout(this._timeout)
    //         if (val && !!this.duration) {
    //             this._timeout = setTimeout(()=> this.$emit('update:tipshow',!this.tipshow), this.duration)
    //         }
    //   }
  },
  methods:{
      start(e){
          this.startY = event.touches[0].clientY;
          this.time = 0;
        //   console.log(this.startY)
      },
      move(e){
          let moveSite = event.touches[0].clientY-this.startY;
          this.site=this.baseSite+moveSite;
          console.log(this.site)
      },
      end(e){
          this.end = event.changedTouches[0].clientY;
          this.time = 300;
          this.baseSite = this.site;
        //   this.startY = this.end
        //   console.log(this.end)
      }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.select-box {
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
.select-plane{
    position: absolute;
    bottom:0;
    width:100%;
    background:#fff;
    text-align:center;
    .select-head{
        overflow:hidden;
        div{
            float:left;
            font-size:32px;
            line-height:80px;
            border-bottom:1px solid #999;
        }
        div:nth-child(1){
            width:20%;
        }
        div:nth-child(2){
            width:60%;
        }
        div:nth-child(3){
            width:20%;
        }
    }
    .select-content{
        overflow: hidden;
        height:410px;
        position:relative;
        // background:#E5E5E5;
        .select-info{
            transform:translateY(164px);
            -webkit-transform:translateY(164px);
            div {
                line-height:82px;
                font-size:32px;
            }
        }
        .select-mask-top{
            position: absolute;
            top:0;
            left: 0;
            height:164px;
            width:100%;
            pointer-events:none;
            border-bottom:1px solid #999;
        }
        .select-mask-bottom{
            position: absolute;
            bottom:0;
            left: 0;
            height:164px;
            width:100%;
            pointer-events:none;
            border-top:1px solid #999;
        }
    }
}
</style>
