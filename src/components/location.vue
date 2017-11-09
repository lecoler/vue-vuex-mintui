<template>
  <div class='body'>
    <mt_header :msg='title'></mt_header>
    <search :msg='searchText' class='searchBox'></search>
    <div class='box'>当前地址</div>
    <p><i class='iconfont icon-dingwei'></i><span>点击定位当前位置</span></p>
  </div>
</template>

<script>
  import mt_header from './Header.vue'
  import search from './search.vue'

  export default {
    components: {mt_header, search},
    data() {
      return {
        title: '选择收货地址',
        searchText: '请输入收货地址'
      }
    }
  }
</script>

<style scoped>
  .body {
    background: #fff;
    padding-bottom: 73px;
    margin-top: 45px;
  }

  .searchBox {
    top: 12px;
    background: #fff !important;
    margin-bottom: 16px;
  }

  .box {
    padding: 0 16px;
  }

  p {
    background: #efefef;
    padding: 16px;
  }

  p i {
    font-size: 24px;
    color: red;
  }
</style>
