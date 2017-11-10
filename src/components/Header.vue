<template>
  <div>
    <mt-header fixed :title=msg class='header'>
      <div @click='back()' slot='left'>
        <mt-button icon="back"></mt-button>
      </div>
    </mt-header>
  </div>
</template>

<style scoped>
  .header {
    font-size: 18px;
    background: #000;
    border-bottom: 1px solid #ccc;
    height: 45px;
    color: #fff;
    text-align: center;
  }
</style>

<script>
  export default {
    props: {
      msg: String           //接受title的值
    },
    methods: {
      back() {            //返回上一条历史浏览记录
        history.back()
      }
    }
  }
</script>
