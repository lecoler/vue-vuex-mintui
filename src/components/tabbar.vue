<!-- 底部菜单栏组件 -->
<template>
  <div>
    <ul id='tab-nav'>
      <router-link to='/'>
        <li id="shouye" :class='shouye'>
          <i class='iconfont icon-shouye'></i>
          <span>首页</span>
        </li>
      </router-link>
      <router-link to='/faxian'>
        <li id="faxian" :class='faxian'>
          <i class='iconfont icon-faxian'></i>
          <span>发现</span>
        </li>
      </router-link>
      <router-link to='dingdan'>
        <li id="dingdan" :class='dingdan'>
          <i class='iconfont icon-dingdan'></i>
          <span>订单</span>
        </li>
      </router-link>
      <router-link to='/wode'>
        <li id="wode" :class='wode'>
          <i class='iconfont icon-wode'></i>
          <span>我的</span>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      shouye: String,
      faxian: String,
      dingdan: String,
      wode: String
    }
  }
</script>

<style scoped>
  #tab-nav {
    position: fixed;
    padding: 0;
    margin: 0;
    bottom: 0;
    list-style: none;
    width: 100%;
    border-top: 1px solid #ccc;
    padding: 6px 0;
    background: #000;
  }

  #tab-nav li {
    float: left;
    width: 25%;
    text-align: center;
    font-size: 18px;
    color: #fff;
  }

  #tab-nav li span {
    display: block;
    width: 100%;
  }

  .iconfont {
    font-size: 32px;
  }

  #tab-nav li.redColor{
    color: #FF4500 !important;
  }
</style>
