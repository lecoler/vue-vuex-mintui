<template>
  <div class='body'>
    <mt_header :msg='title'></mt_header>
    <ul class='box'>
      <li class='left'><a href="#"><p><strong>特价优惠</strong><span>天天特价优惠不断</span></p><img src="../assets/tejia.jpg"></a></li>
      <li class=right><a href="#"><p style='color: orangered'><strong>有红包快抢</strong><span>礼包福利领不停</span></p><img src="../assets/hongbao.jpg"></a></li>
      <li class=left><a href="#"><p style='color: goldenrod;'><strong>推荐有奖</strong><span>5元现金拿不停</span></p><img src="../assets/lihe.jpg"></a></li>
      <li class=right><a href="#"><p style='color: skyblue;'><strong>必吃爆料</strong><span>最实惠的外卖指南</span></p><img src="../assets/waimai.jpg"></a></li>
    </ul>
    <a href="#"><img src="../assets/banner2.jpeg" class='banner'></a>
    <tabbar :faxian='redColor'></tabbar>
  </div>
</template>

<style scoped>
  .body{
    margin-top: 45px;
    height: 100%;
    width: 100%;
    background: #efefef;
  }
  .box {
    list-style: none;
    width: 100%;
    padding: 0;
    margin: 0;
  }
  .left{
    float: left;
  }
  .right{
    float: right;
  }
  .box li {
    width: 45%;
    border: 1px solid #ccc;
    margin-bottom: 6px;
    overflow: hidden;
    padding: 2%;
    background: #fff;
  }

  .box li a {
    text-decoration: none;
    color: #bd2c00;
    font-size: 18px;
  }

  .box li p{
    float: left;
  }

  .box li p span{
    display: block;
    font-size: 14px;
  }
  .box li img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid #ccc;
    margin: 6px 16px;
    float: right;
  }

  .banner{
    width: 100%;
    height: 140px;
  }
</style>


<script>
  import mt_header from './Header.vue'
  import tabbar from './tabbar.vue'

  export default {
    components: {mt_header, tabbar},
    data() {
      return {
        title: '发现',            //mt_header 标题
        redColor: 'redColor'      //底部tabbar对应的字体图标颜色
      }
    }
  }
</script>
