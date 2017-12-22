<template>
  <div id="app">
    <div class='t'>
      <a href="https://github.com/myprelude/jsqb-ui/tree/master/ui"><b>github</b> ★</a><br>
      <a href="http://scopeman.cn"><b>前端技术博客</b> ★</a>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang='less'>
body{
  padding:0;
  margin:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width:10rem;
  margin:0 auto;
  width:10rem;
  .t{
    line-height: 60px; 
  }
}
a{
  color:#999;
  text-decoration: none;
  font-size:32px;
}
</style>
