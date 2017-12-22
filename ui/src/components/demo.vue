<template>
  <div class="demo">
      <ul>
          <li @click='go(1)'>模态框</li>
          <li @click='go(2)'>自定义键盘</li>
          <li @click='go(3)'>提示框</li>
          <li @click='go(4)'>联动选择器</li>
          <li @click='go(5)'>下拉刷新</li>
      </ul>
  </div>
</template>

<script>

export default {
  name: 'demo1',
  data () {
    return {
        
    }
  },
  methods:{
      go(i){
          if(i==1){
              this.$router.push({name:'dialog'})
          }
          if(i==2){
              this.$router.push({name:'keyboard'})
          }
          if(i==3){
              this.$router.push({name:'tip'})
          }
          if(i==4){
              this.$router.push({name:'picker'})
          }
          if(i==5){
              this.$router.push({name:'pullDown'})
          }
      }
  },
  components:{
    
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
                border-top:1px solid #aaa;
            }
            li{
                list-style: none;
                line-height:1.2rem;
                border-bottom:1px solid #aaa;
            }
        }
    }

</style>
