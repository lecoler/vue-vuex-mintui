<template>
  <div class='search'>
    <i class='mintui mintui-search'></i>
    <input type="text" :placeholder=msg v-model='search'>
    <button @click='delAll()'>取消</button>
  </div>
</template>

<style scoped>
  .search {
    background: #000;
    height: 50px;
    color: #fff;
    position: relative;
    text-align: center;
    margin-top: -1px;
  }

  .search input {
    font-size: 16px;
    width: 60%;
    outline: 0;
    border: 1px solid #ccc;
    margin-top: 6px;
    padding: 6px 28px;
  }

  .search button {
    color: #87CEEB;
    position: absolute;
    background: #fff;
    line-height: 30px;
    margin-top: 7px;
    top: 0;
    right: calc(20% - 19px);
    border: 0;
    height: 30px;
    padding: 0 6px;
    display: none;
  }

  .search i {
    font-size: 18px;
    position: absolute;
    color: #555;
    top: 12px;
    margin-left: 6px;
  }
</style>

<script>
  export default {
    data() {
      return {
        search: ''
      }
    },
    props: {
      msg: String
    },
    methods: {
      delAll: function () {
        this.search = ''
      }
    },
    updated: function () {
      let btu = document.querySelector('.search').querySelector('button');
      if (this.search) {
        btu.style.display = 'block';
      } else {
        btu.style.display = 'none';
      }
    }
  }
</script>
