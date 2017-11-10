// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'               //引路由
import storeConfig from  './store'          //引vuex
import MintUI from 'mint-ui'                //引mint-ui
import 'mint-ui/lib/style.css'              //引mint-ui的css文件
import './assets/font/iconfont.css'         //引iconfont的图标字体
import VueResource from 'vue-resource'      //引vue-resource的文件

Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  storeConfig,                  //声明vuex
  template: '<App/>',
  components: { App }
})
