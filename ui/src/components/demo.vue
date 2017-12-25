<template>
  <div class="demo">
      <ul>
          <li @click='go(1)'>模态框</li>
          <li @click='go(2)'>自定义键盘</li>
          <li @click='go(3)'>提示框</li>
          <li @click='go(4)'>联动选择器</li>
          <li @click='go(5)'>下拉刷新</li>
          <li @click='go(6)'>上拉加载</li>
          <li @click='go(7)'>轮播器</li>
          <li @click='go(8)'>标签页</li>
          <li @click='go(9)'>switch开关</li>
          <li @click='go(10)'>步骤条</li>
          <li @click='go(11)'>表单控件</li>
      </ul>
      <Record :demodata='demodata' session='demoData'></Record>
  </div>
</template>

<script>
import Record from './Record/record.vue'
export default {
  name: 'demo1',
  data () {
    return {
        demodata:[]
    }
  },
  mounted(){
      if(window.sessionStorage.getItem('demoData')){
        this.demodata = window.sessionStorage.getItem('demoData').split('|')
      }else{
          this.demodata.push(new Date()+'第一次进入')
      }
      this.demodata.push(new Date()+'进入列表页')
  },
  methods:{
      go(i){
          if(i==1){
              this.demodata.push(new Date()+'点击模态框')
              console.log(this.demodata)
              window.sessionStorage.setItem('demoData',this.demodata.join('|'))
              this.$router.push({name:'dialog'})
          }
          if(i==2){
              this.demodata.push(new Date()+'点击键盘')
              window.sessionStorage.setItem('demoData',this.demodata.join('|'))
              this.$router.push({name:'keyboard'})
          }
          if(i==3){
              this.demodata.push(new Date()+'点击提示框')
              window.sessionStorage.setItem('demoData',this.demodata.join('|'))
              this.$router.push({name:'tip'})
          }
          if(i==4){
              this.demodata.push(new Date()+'点击选择器')
            window.sessionStorage.setItem('demoData',this.demodata.join('|'))
              this.$router.push({name:'picker'})
          }
          if(i==5){
              this.demodata.push(new Date()+'点击下拉刷新')
            window.sessionStorage.setItem('demoData',this.demodata.join('|'))
              this.$router.push({name:'pulldown'})
          }
          if(i==6){
              this.demodata.push(new Date()+'点击上拉加载')
            window.sessionStorage.setItem('demoData',this.demodata.join('|'))
              this.$router.push({name:'pullDown'})
          }
          if(i==7){
              this.demodata.push(new Date()+'轮播器')
            window.sessionStorage.setItem('demoData',this.demodata.join('|'))
              this.$router.push({name:'swiper'})
          }
          if(i==8){
              this.demodata.push(new Date()+'标签页')
            window.sessionStorage.setItem('demoData',this.demodata.join('|'))
              this.$router.push({name:'tag'})
          }
          if(i==9){
              this.demodata.push(new Date()+'switch开关')
            window.sessionStorage.setItem('demoData',this.demodata.join('|'))
              this.$router.push({name:'switch'})
          }
          if(i==10){
              this.demodata.push(new Date()+'步骤条')
            window.sessionStorage.setItem('demoData',this.demodata.join('|'))
              this.$router.push({name:'step'})
          }
          if(i==11){
              this.demodata.push(new Date()+'表单控件')
            window.sessionStorage.setItem('demoData',this.demodata.join('|'))
              this.$router.push({name:'form'})
          }

      }
  },
  components:{
    Record
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
    .demo{
        ul{
            margin:0;
            padding:0;
            margin-top:50px;
            li:nth-child(1){
                border-top:1px solid #aaa;/*no*/
            }
            li{
                list-style: none;
                line-height:1.2rem;
                border-bottom:1px solid #aaa;/*no*/
                font-size:32px;
            }
        }
    }

</style>
