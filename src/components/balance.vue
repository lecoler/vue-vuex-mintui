<template>
  <div class='balance' @click.stop='hidden()'>
    <div class='balanceBox' @click='stop($event)'>
      <span hidden>{{$store.state.number}}</span>       <!-- 用于绑定数据更新时,页面重新渲染 -->
      <ul>
        <li v-for='item in names' :id='item' v-show='number[item] > 0'>     <!-- 数量>0,显示;否则display:none -->
          <span>{{item}}</span>
          <div class="iconBox fr">
            <span class="i" @click='reduce({data:price[item],name:item})'>-</span>
            <span>{{number[item]}}</span>
            <span class="i blue" @click='add({data:price[item],name:item})'>+</span>
          </div>
          <span class='fr'><strong>￥{{price[item] * number[item]}}</strong></span>
        </li>
      </ul>

    </div>

  </div>
</template>


<style scoped>
  .balance {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 10;
    display: none;
  }

  .balanceBox {
    position: fixed;
    background-color: #fff;
    bottom: 45px;
    width: 100%;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 16px;
  }

  li {
    margin-top: 10px;
  }

  li span {
    color: darkorange;
    font-size: 16px;
    margin-right: 8px;
  }

  .fr {
    float: right;
    font-size: 14px;
  }

  .iconBox {
    margin-top: 0px;
    line-height: 1.2;
    float: right;
  }

  .iconBox span {
    margin: 0 6px;
    color: #000;
  }

  .iconBox span.i {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: 1px solid #0086b3;
    font-size: 18px;
    color: #0086b3;
    line-height: 20px;
    text-align: center;
    display: inline-block;
  }

  .iconBox span.i.blue {
    color: #fff;
    background-color: #0086b3;
    display: inline-block;
  }
</style>


<script>
  import store from '../store'
  import btuBox from './btuBox.vue'
  import {mapState, mapActions} from 'vuex'
  import Vue from 'vue'


  export default {
    store,
    data() {
      return {
        names: {}         //初始化商品名{商品名:商品名}
      }
    },
    components: {btuBox},
    methods: {
      hidden() {
        let box = this.$el
        box.style.display = 'none'
      },
      stop(event) {                 //阻止冒泡
        event.stopPropagation()
      },
      ...mapActions(['add', 'reduce'])

    },
    computed: mapState(['number', 'price']),

    updated() {
      let arr = this.number;
      for (let key in arr) {
        Vue.set(this.names, key, key)         //在对象names添加'商品名:商品名'
      }
    }

  }
</script>
