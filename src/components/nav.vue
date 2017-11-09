<template>
  <div>
    <mt-swipe :auto="0" class='tabNav'>
      <mt-swipe-item>
        <ul>
          <li><a href="#"><i class='iconfont icon-food deeppink'></i><span>美食</span></a></li>
          <li><a href="#"><i class='iconfont icon-tianpin orange'></i><span>甜品</span></a></li>
          <li><a href="#"><i class='iconfont icon-yinpin2 green'></i><span>饮品</span></a></li>
          <li><a href="#"><i class='iconfont icon-bianlidian skyblue'></i><span>便利店</span></a></li>
          <li><a href="#"><i class='iconfont icon-zhou red'></i><span>优质早餐</span></a></li>
          <li><a href="#"><i class='iconfont icon-chi orangered'></i><span>正餐优选</span></a></li>
          <li><a href="#"><i class='iconfont icon-waimai purple'></i><span>外卖专送</span></a></li>
          <li><a href="#"><i class='iconfont icon-icon yellowgreen'></i><span>生鲜果蔬</span></a></li>
        </ul>
      </mt-swipe-item>
      <mt-swipe-item>
        <ul>
          <li><a href="#"><i class='iconfont icon-chimianshixin skyblue'></i><span>粉面</span></a></li>
          <li><a href="#"><i class='iconfont icon-pisa orange'></i><span>披萨</span></a></li>
          <li><a href="#"><i class='iconfont icon-huoguo-copy red'></i><span>火锅料理</span></a></li>
          <li><a href="#"><i class='iconfont icon-xianhua green'></i><span>浪漫鲜花</span></a></li>
          <li><a href="#"><i class='iconfont icon-youhui orangered'></i><span>特价优惠</span></a></li>
          <li><a href="#"><i class='iconfont icon-chihuoying deeppink'></i><span>限时抢购</span></a></li>
          <li><a href="#"><i class='iconfont icon-xindian purple'></i><span>新店特惠</span></a></li>
        </ul>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<style scoped>
  .tabNav{
    height: 180px;
    background-color: #fff;
    border-bottom: 1px solid #ccc;

  }

  ul{
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  li{
    float: left;
    width: 25%;
    height: 50%;
    text-align: center;
    overflow: hidden;
  }
  a{
    text-decoration: none;
    color: #666;
    font-size: 12px;
    text-shadow: -2px -1px #888;
  }
  span{
    text-shadow: none;
  }
  .iconfont{
    font-size: 47px;
    display: block;
    margin-top: 8px;
  }
  .deeppink{
    color: deeppink;
  }
  .skyblue{
    color: skyblue;
  }
  .green{
    color: green;
  }
  .orange{
    color: orange;
  }
  .yellowgreen{
    color: yellowgreen;
  }
  .orangered{
    color: orangered;
  }
  .red{
    color: #bd2c00;
  }
  .purple{
    color: purple;
  }
</style>

