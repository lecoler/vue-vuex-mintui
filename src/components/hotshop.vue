<template>
  <div class='body'>
    <h4>推荐商家</h4>
    <shop></shop>
    <shop></shop>
    <shop></shop>
    <shop></shop>
    <div class='load'>
        <mt-spinner :type="0" color='#26a2ff'></mt-spinner>
    </div>
  </div>
</template>

<script>
  import shop from './shop.vue'

  export default {
    components: {shop}
  }

</script>

<style scoped>
  .body{
    background: #fff;
    padding: 0 2%;
    width: 96%;
  }
  .load{
    margin-left: calc(50% - 14px);
    padding: 18px  0;
  }
</style>
