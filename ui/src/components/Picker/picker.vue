<template>
  <div class="select-box" v-show='tipshow'>
      <div class='select-plane'>
          <div class='select-head'>
              <div @click='cancel()'>取消</div>
              <div>{{title}}</div>
              <div @click='chose()'>确定</div>
          </div>
          <div class='select-content' @touchstart='touchstart($event)'
              @touchmove='touchmove($event)'
              @touchend='touchend($event)'
              >
              <div class='select-mask-top'></div>
              <div class='select-mask-bottom'></div>
              <div class='info-box'>
                <div class='select-info' :style="boxstyle">
                    <div v-for='item in value1'>{{item}}</div>
                </div>
                <div class='select-info' :style="boxstyle">
                    <div v-for='item in value2'>{{item}}</div>
                </div>
                <div class='select-info' :style="boxstyle">
                    <div v-for='item in value3'>{{item}}</div>
                </div>
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
    }
  },
  mounted(){

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
     },
     value1:{
         type:Array,
         default:[]
     },
     value2:{
         type:Array,
         default:[]
     },
     value3:{
         type:Array,
         default:[]
     }
  },
  computed:{
      boxstyle() {
          return {
              transform:`translate3d(0,${this.site*this.offset+this.moveD}px,0)`,
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
      touchstart(e){
          e.stopPropagation();
          e.preventDefault();
          console.log(e.target.parentNode)
          this.startY = event.touches[0].clientY;
          this.time = 0;
          this.startT = new Date().getTime();
        //   console.log(this.startT)
      },
      touchmove(e){
          e.stopPropagation();
          e.preventDefault();
          let moveSite = event.touches[0].clientY-this.startY;
          this.moveD = moveSite;
        //   console.log(moveSite)
          
      },
      touchend(e){
          e.stopPropagation();
          e.preventDefault();
          let len = this.value.length;
          this.endT = new Date().getTime();
          this.end = event.changedTouches[0].clientY;
          this.time = 300;
          if(this.endT-this.startT>300){
              let step = this.moveD/82>0?
              Math.abs(this.moveD)%82>41?parseInt(this.moveD/82)+1:parseInt(this.moveD/82)
              :Math.abs(this.moveD)%82>41?parseInt(this.moveD/82)-1:parseInt(this.moveD/82);
              this.moveD = 0;
              this.offset = step>0?this.offset+step>=2?2:this.offset+step
                :this.offset+step<=2-len?3-len:this.offset+step;
            //   this.offset = step
          }else{
            this.moveD = 0;
            let step = parseInt((this.end-this.startY)/25);
            this.offset = step>0?this.offset+step>=2?2:this.offset+step
            :this.offset+step<=2-len?3-len:this.offset+step;
            // console.log(this.offset)
            //  console.log(parseInt((this.end-this.startY)/25)) 
          }
        //   console.log(this.end-this.startY)
          
      },
      cancel(){
          this.$emit('update:tipshow',false);
          this.offset = 2;
      },
      chose(){
          this.$emit('getValue',this.value[2-this.offset]);
          this.$emit('update:tipshow',false);
          this.offset = 2;
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
        .info-box{
            display:flex;
            justify-content: space-between;
        }
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
