<template>
  <div>
    <mt_header :msg='title'></mt_header>
    <login></login>
    <tabbar :wode='redColor'></tabbar>
  </div>
</template>

<script>
  import mt_header from './Header.vue'
  import login from './login.vue'
  import tabbar from './tabbar.vue'

  export default {
    components: {mt_header, login, tabbar},
    data() {
      return {
        title: '我的',
        redColor: 'redColor'
      }
    }
  }
</script>
