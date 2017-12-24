<template>
  <div class="demo">
    <h1>标签页</h1>
    <div>
        <h5>默认标签页</h5>
        <Tag :data='data' @ontap='ontap'></Tag>
    </div>
    <div class='content'>
        {{data[index1]}}
    </div>
    <div>
        <h5>可以横向滚动</h5>
        <Tag :data='data1' @ontap='ontap1'></Tag>
    </div>
    <div class='content'>
        {{data1[index2]}}
    </div>
  </div>
</template>

<script>
import Tag from './Tag/tag.vue'

export default {
  name: 'demo2',
  data () {
    return {
        data1:['第一天','第二天','第三天','第四天','第二天','第三天','第四天'],
        data:['第一天','第二天','第三天','第四天'],
        index1:0,
        index2:0
    }
  },
  methods:{
    ontap(i){
        this.index1 = i;
    },
    ontap1(i){
        this.index2 = i;
    }
  },
  components:{
    Tag
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.demo{
    padding:20px;
    text-align:left;
    h1{
        font-size:0.5rem;
        color:#35495E;
    }
    .content{
        height: 200px;
        box-shadow: 5px 5px 2px #efefef;
    }
    
}



</style>
