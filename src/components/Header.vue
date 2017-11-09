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
      msg: String
    },
    methods: {
      back() {
        history.back()
      }
    }
  }
</script>
