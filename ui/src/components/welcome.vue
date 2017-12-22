<template>
  <div>
     <div class="hello">
        <img src="../assets/logo.png">
        <h1>Welcome use KD-ui</h1>
        <h3 style='color:#666;'>——口袋理财**</h3>
        <button @click='go()'>去体验</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  data () {
    return {
     
    }
  },
  methods:{
      go(){
          this.$router.push({name:'demo'})
      }
  },
  components:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.hello{
  box-sizing: border-box;
  padding:20px;
  position: absolute;
  top:50%;
  left: 0;
  width:100%;
  transform: translate(0%,-50%);
  -webkit-transform: translate(0%,-50%);

  button{
    padding:12px 40px;
    background: none;
    outline:none;
    border:1px solid #41B883;/*no*/
    font-size: 0.4rem;
    color:#35495E;
    border-radius:5px;
  }
}
</style>
