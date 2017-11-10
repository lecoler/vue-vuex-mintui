<!-- 登录 -->
<template>
  <div>
    <mt-header title="返回" class='back'>
      <div @click='back()' slot="left">
        <mt-button icon="back"></mt-button>
      </div>
    </mt-header>
    <div class='box'>
      <span>请先登录</span>
      <a href="#">立即注册</a>
    </div>
    <mt-navbar v-model='selected'>
      <mt-tab-item id="1">手机验证登录</mt-tab-item>
      <mt-tab-item id="2">帐号登录</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model='selected' swipeable>
      <mt-tab-container-item id="1">
        <div class='ul'>
          <div class='lis'>
            <i class='iconfont icon-shouji'></i>
            <input type="tel" placeholder='请输入手机号码'>
            <button>获取验证码</button>
          </div>
          <div class='lis'>
            <i class='iconfont icon-wancheng'></i>
            <input type="number" placeholder='请输入验证码'>
          </div>
          <div class='lis'>
            <p>未注册过的手机号码将自动注册</p>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div class='ul'>
          <div class='lis'>
            <i class='iconfont icon-touxiang'></i>
            <input type="text" placeholder='请输入帐号(手机/邮箱/用户名)'>
          </div>
          <div class='lis'>
            <i class='iconfont icon-mima'></i>
            <input type="password" placeholder='请输入密码'>
          </div>
          <div class='lis'>
            <a href='#'>忘记密码</a>
          </div>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-button type="default" class='login'>登录</mt-button>
    <p class='node'>
      <span>说明:注册/登录说明您已同意</span>
      <a href="#"> 《协议》 </a>
    </p>
  </div>
</template>

<style scoped>
  .back{
    background: #000000;
    color: #ffffff;
    font-size: 18px;
    /*margin-top: -45px;*/
    height: 45px;
  }
  .box {
    background: #e9e9e9;
    color: #333;
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    margin: 0;
    font-size: 18px;
  }

  .box a {
    float: right;
    font-size: 12px;
    margin-right: 16px;
    text-decoration: none;
    color: #666;
  }

  .ul{
    border-bottom: 1px solid #ccc;
    padding-bottom: 25px;
  }

  .lis {
    width: 100%;
    padding: 0;
    margin: 0;
    position: relative;
  }

  .lis i {
    position: absolute;
    font-size: 24px;
    left: 8%;
    top: 20%;
  }

  .lis input {
    width: 70%;
    height: 35px;
    margin: 2% 10%;
    outline: 0;
    border: 0;
    border-bottom: 1px solid #ccc;
    padding: 6px 18px;
    font-size: 16px;
  }

  .lis button {
    position: absolute;
    right: 8%;
    top: 20%;
    border-radius: 5px;
    outline: 0;
    border: 1px solid #bd2c00;
    height: 28px;
    padding: 0 6px;
    color: #fff;
    background: #df5000;
  }

  .lis p {
    margin: 4% 10% 0;
    font-size: 12px;
    color: #666;
  }
  .lis a{
    font-size: 12px;
    float: right;
    text-decoration: none;
    color: #DAA520;
    margin-right: 16px;
  }
  .login{
    display: block;
    width: 80%;
    margin: 16px auto 0;
    background: orangered;
    color: #fff;
    font-size: 18px;
  }

  p.node{
    position: fixed;
    bottom: 75px;
    font-size: 12px;
    left: calc(50%/2);
  }
  p.node a{
    color: #DAA520;
  }

</style>

<script>
  export default {
    data() {
      return {
        selected: '1'       //<mt-tab-container-item>
      }
    },
    methods: {
      back() {            //回到上一天历史浏览记录
        history.back()        
      }
    }
  }
</script>
