<!-- 订单组件 -->
<template>
  <div>
    <mt_header :msg='title'></mt_header>
    <div class='box'>
      <img src="../assets/sorry.jpg">
      <p>登陆后才可查看</p>
      <router-link to='/login'>
        <mt-button type="primary" size='small' class='button'>立即登录</mt-button>
      </router-link>
    </div>
    <tabbar :dingdan='redColor'></tabbar>
  </div>
</template>

<script>
  import mt_header from './Header.vue'
  import tabbar from './tabbar.vue'

  export default {
    components: {mt_header, tabbar},
    data() {
      return {
        title: '订单',              //mt_header标题
        redColor: 'redColor'        //底部tabbar对应的图标颜色
      }
    }
  }
</script>

<style scoped>
  .box{
    text-align: center;
    margin-top: calc(50%/2);
  }
  .box img{
    height: 50%;
    width: 50%;
  }
  .box p{
    font-size: 16px;
    color: #333;
  }
  .button{
    width: 25%;
  }
</style>
