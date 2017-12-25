<template>
<div>
    <div class="kd-step" :class="{active:step>0}">
        <div class='kd-step-point' :class="{active:step==1}"></div>
        <div class='kd-step-line-first'><div class='step-line'></div></div>
    </div>
    <div class="kd-step" :class="{active:step>1}">
        <div class='kd-step-point' :class="{active:step==2}"></div>
        <div class='kd-step-line'><div class='step-line'></div></div>
    </div>
    <div class="kd-step" :class="{active:step>2}">
        <div class='kd-step-point' :class="{active:step==3}"></div>
        <div class='kd-step-line'><div class='step-line'></div></div>
    </div>
    <div class="kd-step" :class="{active:step>3}">
        <div class='kd-step-point' :class="{active:step==4}"></div>
        <div class='kd-step-line'><div class='step-line'></div></div>
    </div>
    <div class="kd-step" :class="{active:step>4}">
        <div class='kd-step-point' :class="{active:step==5}"></div>
        <div class='kd-step-line-end'><div class='step-line'></div></div>
    </div>
</div>
    
</template>
<script>
export default {
  name: 'hell',
  data () {
    return {
    }
  },
  props:{
     step:{
         type:Number,
         default:1
     }
  },
  methods:{
      
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.kd-step{
    height: 200px;
    position:relative;
    padding-left:100px;
    div{
        transition:all 0.5s;
        -webkit-transition:all 0.5s;
    }
    &.active{
        .kd-step-point{
            transform: translate(0%,-50%)  scale(1);
            background: #41B883;
            &.active{
                transform: translate(0%,-50%)  scale(1.5);
            }
        } 
        .kd-step-line-first{
            .step-line{
                height:100%;
            }
        }
        .kd-step-line-end{
            .step-line{
                height:100%;
            }
        }
        .kd-step-line{
            .step-line{
                height:100%;
            }
        }
    }
    .kd-step-point{
        position:absolute;
        top:50%;
        left: 0;
        width:30px;
        height: 30px;
        transform: translate(0%,-50%)  scale(1.0);
        border-radius:50%;
        background:#efefef;
        z-index:100; 
    }
    .kd-step-line-first{
        position:absolute;
        top:50%;
        left: 0;
        width:4px;
        height: 50%;
        margin-left:15px;
        transform: translate(-50%,0%);
        background:#efefef;
        z-index:99;
        
    }
    .kd-step-line-end{
        position:absolute;
        top:0;
        left: 0;
        width:4px;
        height: 50%;
        margin-left:15px;
        transform: translate(-50%,0%);
        background:#efefef;
        z-index:99;
        
    }
    .kd-step-line{
        position:absolute;
        top:0;
        left: 0;
        width:4px;
        height: 100%;
        margin-left:15px;
        transform: translate(-50%,0%);
        background:#efefef;
        z-index:99;
    }
    .step-line{
        height:0%;
        width:100%;
        background:#41B883;
    }
}


</style>
