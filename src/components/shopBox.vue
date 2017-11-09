<template>
  <div class='box'>
    <router-link to='/shouye/good'>
      <div class="img fl">
        <img :src="imgsrc">
      </div>
    </router-link>
    <div class="content fr">
      <div class='fl'>
        <router-link to='/shouye/good'>
        <span class='title'>{{name}}</span>
        <div>
          <i class='iconfont' v-for='item in scoreArr' :class='item'></i>
          <span>{{score}}</span>
          <span>月售{{sellCount}}单</span>
          <span class='fr tip'>{{description}}</span>
        </div>
        <div>
          <span>￥{{minPrice}}起送 | 配送费￥{{deliveryPrice}}</span>
          <span class='fr'>{{deliveryTime}}分钟</span>
        </div>
        </router-link>
        <div class='draw'></div>
        <div class="activeBox">
          <div><i style='background: yellowgreen'>新</i><span>新用户下单立减18元</span><span class='fr' @click='pull()'>{{activeCount}}个活动 <i id='btu'></i></span></div>
          <div v-for='item in active'><i>折</i><span>{{item}}</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  a{
    text-decoration: none;
    color: #888;
  }
  .box {
    padding-top: 18px;
    border-bottom: 1px solid #cccccc;
    padding-bottom: 18px;
  }

  .box:after {
    content: '';
    width: 0;
    height: 0;
    display: block;
    visibility: hidden;
    clear: both;
    overflow: hidden;
  }

  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  .img img {
    width: 90%;
    height: 90%;
  }

  .img {
    width: 25%;
    overflow: hidden;
  }

  .content {
    width: 75%;
    font-size: 12px;
    color: #888;
  }

  .content .fl {
    width: 100%;
  }

  .title {
    font-size: 18px;
    font-weight: 700;
    color: #333;
  }

  .tip {
    background: #0086b3;
    padding: 2px;
    color: #fff;
    border-radius: 3px;
  }

  .content i {
    color: orange;
  }

  .content div {
    margin-bottom: 6px;
  }

  div.draw {
    margin: 18px 0;
    border-top: 1px dashed #888;
  }

  div.activeBox {
    transition: height .3s;
    -webkit-transition: height .3s;
    overflow: hidden;
    height: 50px;
  }

  .activeBox > div > i {
    display: inline-block;
    height: 18px;
    width: 18px;
    line-height: 18px;
    color: #fff;
    background: deeppink;
    font-style: normal;
    text-align: center;
    border-radius: 3px;
    margin: 0 6px 6px 0;
  }

  .activeBox .fr {
    margin-right: 18px;
    position: relative;
  }

  .activeBox .fr i {
    content: '';
    display: inline-block;
    border: 4px solid transparent;
    border-top-color: #888;
    position: absolute;
    top: 4px;
    right: -12px;
    transition: all .3s;
    -webkit-transition: all .3s;
  }
</style>


<script>
  export default {
    props: {
      imgsrc: String,
      name: String,
      sellCount: Number,
      minPrice: Number,
      deliveryTime: Number,
      description: String,
      deliveryPrice: Number,
      score: Number,
      active: Object,
      activeCount: Number,
      scoreArr: Array
    },
    methods: {
      pull: function () {
        let btu = this.$el.querySelector('#btu');
        let activeBox = this.$el.querySelector('.activeBox');
        let height = activeBox.children;
        height = height.length * 30;
        console.log(activeBox);
        if (btu.style.transform == 'rotate(180deg)') {
          btu.style.transform = 'rotate(0deg)';
          activeBox.style.height = '50px';
        } else {
          btu.style.transform = 'rotate(180deg)';
          activeBox.style.height = height + 'px';
        }
      }
    }
  }
</script>
