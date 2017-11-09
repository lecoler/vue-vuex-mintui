import Vue from 'vue'
import Router from 'vue-router'
import shouye from '../components/shouye.vue'
import faxian from '../components/faxian.vue'
import dingdan from '../components/dingdan.vue'
import wode from '../components/wode.vue'
import login from '../components/login.vue'
import location from '../components/location.vue'
import good from '../components/good.vue'
import search from '../components/search.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shouye',
      component: shouye
    },
    {
      path: '/faxian',
      name: 'faxian',
      component: faxian
    },
    {
      path: '/dingdan',
      name: 'dingdan',
      component: dingdan
    },
    {
      path: '/wode',
      name: 'wode',
      component: wode
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/shouye/location',
      name: 'location',
      component: location
    },
    {
      path: '/shouye/good',
      name: 'good',
      component: good
    },
    {
      path: '/search',
      component: search
    }
  ]
})
