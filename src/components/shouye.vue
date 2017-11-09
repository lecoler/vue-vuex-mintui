<template>
  <div class='body'>
    <div class='header'>
      <router-link to='/shouye/location'>
        <div class='box'>
          <i class='iconfont icon-dingwei'></i>
          <span>{{location}}</span>
        </div>
      </router-link>
    </div>
    <searched :msg='searchText'></searched>
    <hotWords></hotWords>
    <tabNav></tabNav>
    <img src="../assets/banner.jpg" class='banner'>
    <hotshop></hotshop>
    <tabbar :shouye='redColor'></tabbar>
  </div>
</template>

<style scoped>
  .body{
    background: rgba(0,0,0,.1);
    padding: 0 0 75px 0;
  }
  .header {
    height: 45px;
    background-color: #000;
    background-image: url("../assets/banner.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right bottom;
    color: #fff;
    /*margin-top: -45px;*/
    position: relative;

  }

  .box {
    border: 1px solid #fff;
    border-radius: 20px;
    margin: 7.5px 6px;
    display: inline-block;
    padding: 6px;
    overflow: hidden;
    max-width: 50%;
    white-space: nowrap;
    word-break: keep-all;
    text-overflow: ellipsis;
    line-height: 1;
    position: relative;
    background: rgba(255, 255, 255, .2);
    color: #fff;
  }

  .box i {
    color: #87CEEB;
    font-size: 18px;
  }

  .banner{
    margin: 2%;
    width: 95%;
    height: 120px;
    border: 1px solid #ccc;
    border-radius: 18px;
  }
</style>

<script>
  import searched from './search.vue'
  import hotWords from './hotWords.vue'
  import tabNav from './nav.vue'
  import hotshop from './hotshop.vue'
  import tabbar from './tabbar.vue'


  export default {
    components: {searched, hotWords, tabNav, hotshop, tabbar},
    data() {
      return {
        location: '正在定位...',
        searchText: '请输入商家名、商品名称',
        redColor: 'redColor'
      }
    }
  }

</script>
