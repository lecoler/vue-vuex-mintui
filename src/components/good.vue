<template>
  <div>
    <balance></balance>

    <header>
      <div class='header'>
        <div class='fr'>
          <router-link to='/dingdan' tag='span'><i class='iconfont icon-gouwuche'></i></router-link>
        </div>
        <router-link to='/' tag='span'>
          <span class='mintui mintui-back'></span>
        </router-link>
      </div>
      <div class="inf">
        <div class="fl">
          <img :src="imgsrc">
        </div>
        <div class='content'>
          <div>
            <strong>{{name}}</strong>
          </div>
          <div>
            <span>{{description}}</span>
            <span>/</span>
            <span>{{deliveryTime}}分钟到达</span>
            <span>/</span>
            <span>配送费￥{{deliveryPrice}}</span>
          </div>
          <div class='tip'>
            <span>公告：{{infos[0]}}</span>
          </div>
        </div>
      </div>
      <div class='active'>
        <div>
          <i>首</i><span>新用户下单立减18元(不与其他活动同享)</span><span class='fr'>{{activeCount}}个活动></span>
        </div>
      </div>
    </header>
    <nav>
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">商品</mt-tab-item>
        <mt-tab-item id="2">评价</mt-tab-item>
        <mt-tab-item id="3">店铺</mt-tab-item>
      </mt-navbar>
    </nav>
    <main>
      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <aside>
            <ul @touchstart='lisMove($event)'>
              <li class='white'><a @click="to('#热销榜')"><i class='iconfont icon-red'></i>热销榜</a></li>
              <li v-for='item in goodsName'><a @click='to("#"+item)'>{{item}}</a></li>
            </ul>
          </aside>
          <div id='content'>
            <div class='box' v-for='(item,index) in goods'>
              <h6 :id='item.name'>{{item.name}}</h6>
              <ul>
                <li v-for='(food,i) in foods[item.name]'>
                  <div class='left'><img :src="food.icon"></div>
                  <div class='right'>
                    <h4>{{food.name}}</h4>
                    <div><span>{{food.description}}&nbsp;</span></div>
                    <span>月售{{food.sellCount}}份</span><span>/</span><span>好评率{{food.rating}}%</span>
                    <div class='price'>
                      <span class='price'>￥<strong>{{food.price}}</strong></span>
                      <btuBox :data='food.price' :name='food.name'></btuBox>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <footer>
            <div class='fl'>
              <div class='rbox'><i class='iconfont icon-gouwuche'></i></div>
            </div>
            <div class='fl'>
              <span>￥{{money}}</span>
              <p>配送费￥{{deliveryPrice}}</p>
            </div>
            <div class='fr'>
              <span>￥{{minPrice}}元起送</span>
            </div>
            <router-link to='/login' tag='div'>
              <div class='btu'><strong>立即结算</strong></div>
            </router-link>
          </footer>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <div class='ratings'>
            <div class='scroce'>
              <div class='left'>
                <p><strong>{{score}}</strong></p>
                <span>综合评价</span>
                <p>
                  <small>高于周边商家{{rankRate}}%</small>
                </p>
              </div>
              <div class='right'>
                <p><span>服务态度</span><i class='iconfont' v-for='item in serviceScoreArr' :class='item'></i><span
                  class='red'>{{serviceScore}}</span></p>
                <p><span>菜品评价</span><i class="iconfont" v-for='item in foodScoreArr' :class='item'></i><span
                  class='red'>{{foodScore}}</span>
                </p>
                <p><span>送达时间</span><span>{{deliveryTime}}分钟</span></p>
              </div>
            </div>
            <ratingsBox
              v-for='item in ratings'
              :username='item.username'
              :rateTime='item.rateTime'
              :deliveryTime='item.deliveryTime'
              :text='item.text'
              :avatar='item.avatar'
              :score='item.score'
              :recommend='item.recommend'
            ></ratingsBox>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <div class='shop'>
            <div class='activeBox'>
              <h4>活动与服务</h4>
              <div><i style='background-color: yellowgreen'>首</i><span>新用户下单立减18元(不与其他活动同享)</span></div>
              <div v-for='(item,index) in active'><i>{{+index + 1}}</i><span>{{item}}</span></div>
            </div>
            <div class="scene">
              <h4>商家实景</h4>
              <div>
                <img v-for='item in pics' :src="item">
              </div>
            </div>
            <div class="info">
              <h4>商家信息</h4>
              <p>{{name}}</p>
              <p>{{bulletin}}</p>
            </div>
            <div class="class">
              <h4>商品品类</h4>
              <span class='fr'>{{infos[1]}}</span>
            </div>
            <div class='address'>
              <h4>地址</h4>
              <p>{{infos[2]}}</p>
            </div>
            <div class="time">
              <h4>营业时间</h4>
              <span class='fr'>{{infos[3]}}</span>
            </div>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </main>

  </div>
</template>

<style scoped>
  a {
    text-decoration: none;
    color: #666;
  }

  header {
    border-bottom: 1px solid #cccccc;
    background-color: rgba(119, 103, 137, .43);
    color: #fff;
    width: 94%;
    padding: 1% 3%;
    background-image: url("../assets/banner.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right bottom;
  }

  .header {
    height: 45px;
    font-size: 28px;
    line-height: 1.2;
  }

  .inf {
    height: 80px;
    width: 100%;
  }

  .inf:after, ul:after, main:after, .scroce:after {
    content: '';
    width: 0;
    height: 0;
    display: block;
    visibility: hidden;
    clear: both;
  }

  .inf .fl {
    width: 30%;
    height: 100%;
  }

  .inf .content {
    width: 70%;
    float: left;
  }

  .inf .content span {
    font-size: 12px;
  }

  .inf img {
    height: 90%;
    margin-left: 16px;
  }

  .inf .tip {
    white-space: nowrap;
    word-break: keep-all;
    text-overflow: ellipsis;
    line-height: 1;
    overflow: hidden;
  }

  header .active {
    font-size: 12px;
  }

  .active i {
    font-style: normal;
    background-color: yellowgreen;
    padding: 2px;
    border-radius: 2px;
    margin-left: 18px;
    margin-right: 4px;
  }

  nav {
    border-bottom: 1px solid #ccc;
    margin-bottom: 2px;
    width: 100%;
    z-index: 5;
  }

  ul {
    list-style: none;
    padding: 6px 0;
    margin: 0;
  }

  aside {
    background-color: #e8e8e8;
    border-right: 1px solid #cccccc;
    width: 80px;
    font-size: 14px;
    overflow: hidden;
    float: left;
    height: 100%;
  }

  aside ul {
    width: 80px;
    padding: 0;
    transition: all .3s;
    -webkit-transition: all .3s;
  }

  aside ul .iconfont {
    color: orangered;
    margin-right: 4px;
  }

  aside li {
    padding: 18px 8px;
    border-bottom: 1px solid #cccccc;
    height: 2%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  #content {
    overflow: hidden;
    padding-bottom: 16px;
  }

  #content .box h6 {
    padding: 6px;
    margin: 0;
    color: #666;
    border-top: 1px solid #e7e1cd;
    border-bottom: 1px solid #e7e1cd;
  }

  #content li {
    height: 110px;
    padding: 6px 16px 26px;
    border-bottom: 1px solid #cccccc;
  }

  #content .iconBox {
    margin-top: 0px;
    line-height: 1.2;
  }

  #content .iconBox span {
    margin: 0 6px;
    color: #000;
    display: none;
  }

  #content .iconBox span.i {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: 1px solid #0086b3;
    font-size: 18px;
    color: #0086b3;
    line-height: 20px;
    text-align: center;
  }

  #content .iconBox span.i.blue {
    color: #fff;
    background-color: #0086b3;
    display: inline-block;
  }

  #content .left {
    width: 30%;
    height: 100%;
    float: left;
  }

  #content .left img {
    height: 65%;
  }

  #content .right {
    width: 70%;
    float: left;
  }

  #content h4 {
    color: #555;
    margin: 0;
    padding: 0;
    font-size: 16px;
  }

  #content div {
    font-size: 12px;
    color: #888;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: keep-all;
    white-space: nowrap;
    margin: 8px 0;
  }

  #content div.price {
    color: orangered;
    font-size: 16px;
    margin-top: 16px;
  }

  footer {
    background-color: rgba(61, 61, 63, .9);
    color: #fff;
    height: 45px;
    width: 96%;
    position: fixed;
    bottom: 0;
    padding: 0 2%;
    z-index: 11;
  }

  footer .fl {
    height: 100%;
    margin-right: 6px;
  }

  footer .fr {
    height: 100%;
    line-height: 45px;
  }

  footer .rbox {
    background: radial-gradient(circle, rgba(63, 63, 63, .9), rgba(0, 0, 0, .9));
    border-radius: 50%;
    height: 100%;
    line-height: 45px;
    width: 45px;
    text-align: center;
    margin-top: -8px;
  }

  footer .rbox i {
    font-size: 24px;
  }

  footer p {
    margin: 0;
    padding: 0;
    font-size: 12px;
    color: #888;
  }

  footer span {
    font-size: 16px;
    font-weight: 700;
  }

  .scroce {
    padding: 16px 12px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 16px;
    background-color: #fff;
  }

  .scroce .left {
    float: left;
    width: 34%;
    text-align: center;
  }

  .scroce .right {
    float: left;
    width: 60%;
    border-left: 1px solid #ccc;
  }

  .scroce span {
    font-size: 12px;
    margin-right: 8px;
    margin-left: 18px;
    color: #000;
  }

  .scroce p {
    color: orangered;
    font-size: 18px;
    margin: 0;
    padding: 0;
  }

  .scroce p small {
    color: #888;
    font-size: 12px;
  }

  .scroce .red {
    color: orangered;
  }

  .scroce i {
    color: orange;
  }

  .ratings {
    background-color: #e9e9e9;
  }

  .shop {
    color: #888;
    font-size: 12px;
    background-color: #e9e9e9;
  }

  .activeBox, .scene, .info, .class, .address, .time {
    width: 94%;
    padding: 8px 3%;
    border-top: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
    margin-bottom: 16px;
    background-color: #fff;
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

  .scene img {
    width: 30%;
    margin-right: 8px;
    margin-bottom: 8px;
  }

  .shop span.fr {
    margin-top: 8px;
  }


  .btu{
    position: fixed;
    background-color: #55a532;
    color: #fff;
    bottom: 0;
    right: 0;
    height: 43px;
    width: 100px;
    font-size: 18px;
    line-height:45px;
    text-align: center;
    display: none;
    border: 1px solid #63a35c;
  }

  h4 {
    margin: 0;
    padding: 8px 0;
    color: #000;
    font-size: 16px;
    display: inline-block;
  }

  .white {
    background-color: #fff;
  }

  .fl {
    float: left;
  }

  .fr {
    float: right;
  }
</style>

<script>
  import ratingsBox from './ratingsBox.vue'
  import btuBox from './btuBox.vue'
  import balance from './balance.vue'
  import store from '../store'
  import {mapState} from 'vuex'

  export default {
    store,
    computed: mapState({
      money: function (state) {
        return state.money
      }
    }),
    components: {ratingsBox, btuBox, balance},
    data() {
      return {
        imgsrc: '',
        name: '',
        bulletin: '',
        sellCount: 0,
        minPrice: 0,
        deliveryTime: 0,
        description: '',
        deliveryPrice: 0,
        score: 0,
        serviceScore: 0,
        serviceScoreArr: [],
        foodScore: 0,
        foodScoreArr: [],
        rankRate: 0,
        active: {},
        activeCount: 1,
        infos: [],
        selected: '1',
        goodsName: [],
        goods: [],
        foods: {},
        pics: [],
        infos: [],
        ratings: {},
      }
    },
    created: function () {
      this.getData()
    },
    updated: function () {
      let nav = this.$el.querySelector('nav');
      let shopCar = this.$el.querySelector('.rbox').children[0];
      let main = this.$el.querySelector('main')
      let ul = this.$el.querySelector('aside').children[0];
      let lis = ul.querySelectorAll('li');
      let boxs = main.querySelectorAll('.box');
      let topArr = [];                    //各个的li所对应内容的scrollTop值
      for (let top of boxs) {
        topArr.push(top.offsetTop + 150);
      }       //储存各个的li所对应内容的scrollTop值

      let changeBC = (index) => {
        for (let i of lis) {
          i.removeAttribute('class');
        }
        lis[index].className = 'white';
      }     //排他改变背景色，传要变色的下标

      window.addEventListener('scroll', () => {
        var scroll = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;  //获取scrollTop值
        if (scroll >= 150) {
          nav.style.position = 'fixed';
          nav.style.top = 0;
          main.style.marginTop = '50px';
          ul.style.position = 'fixed';
          ul.style.top = '50px';
        } else {
          nav.removeAttribute('style');
          ul.removeAttribute('style');
          main.removeAttribute('style');
        }    //固定侧栏
        for (let i in topArr) {
          if (+i == 0) {
            if (scroll < topArr[+i + 1]) {
              changeBC(i)
            }
            continue
          }  //处理第一个
          if (i == topArr.length - 1) {
            if (scroll >= topArr[i]) {
              changeBC(i)
            }
            break
          }     //处理最后一个
          if (scroll >= topArr[i] && scroll < topArr[+i + 1]) {
            changeBC(i)
          }
        }     //将右侧的内容与侧栏对应样式绑定

      })    //监听滚动事件

      if(this.money) {
        shopCar.style.color = 'skyblue';
        shopCar.className = 'iconfont icon-gouwucheman';
        this.$el.querySelector('.btu').style.display = 'block';
        shopCar.onclick = () => {
          if(this.$el.querySelector('.balance').style.display != 'block'){
            this.$el.querySelector('.balance').style.display = 'block';
          }else {
            this.$el.querySelector('.balance').style.display = 'none';
          }
        }
      }else {
        shopCar.removeAttribute('style');
        shopCar.className = 'iconfont icon-gouwuche';
        shopCar.onclick = null;
        this.$el.querySelector('.btu').style.display = 'none';
      }       //处理购物车
    },          //数据更新时执行
    methods: {
      getData: function () {
        this.$http.get('/static/data.json').then((success) => {
          // 响应成功回调
          success = success.body;
          console.log(success);
          this.imgsrc = success.seller.avatar;
          this.name = success.seller.name;
          this.sellCount = success.seller.sellCount;
          this.minPrice = success.seller.minPrice;
          this.deliveryTime = success.seller.deliveryTime;
          this.description = success.seller.description;
          this.deliveryPrice = success.seller.deliveryPrice;
          this.score = success.seller.score;
          this.serviceScore = success.seller.serviceScore;
          this.foodScore = success.seller.foodScore;
          this.rankRate = success.seller.rankRate;
          this.activeCount = success.seller.supports.length - 1;
          this.infos = success.seller.infos;
          this.goods = success.goods;
          this.pics = success.seller.pics;
          this.bulletin = success.seller.bulletin;
          this.infos = success.seller.infos;
          this.ratings = success.ratings;


          let changeActive = () => {
            let activeContent = success.seller.supports;
            for (let i of activeContent) {
              this.active[i.type] = i.description
            }
          }    //处理supports数据，改成active对象
          let changeGoods = () => {
            let goodsContent = this.goods;
            for (let i = 1; i < goodsContent.length; i++) {
              this.goodsName.push(goodsContent[i].name);
            }
          }     //处理goods数据，改成goodsName数组
          let changeFoods = () => {
            let foodsContent = this.goods;
            for (let i = 0; i < foodsContent.length; i++) {
              this.foods[foodsContent[i].name] = foodsContent[i].foods
            }
          }     //处理goods数据，改成foods对象
          let changeScore = (num, scoreArr) => {
            num = parseInt(num * 2) / 2;
            for (let i = 1; i <= num; i++) {
              scoreArr.push('icon-xingxing')
            }
            if (num % 1 == 0.5) {
              scoreArr.push('icon-banxing')
            }
            let need = 5 - scoreArr.length;
            for (let i = 1; i <= need; i++) {
              scoreArr.push('icon-xing-kong')
            }
          }   //处理score数据，改成scoreArr数组（储存评分星星的类名）,传入分数和接收数组
          changeScore(this.serviceScore, this.serviceScoreArr)
          changeScore(this.foodScore, this.foodScoreArr)
          changeActive()
          changeGoods()
          changeFoods()


        }, (err) => {
          // 响应错误回调
          console.log(err);
        });
      },      //ajax获取数据
      to: function (id) {
        let eleTop = document.querySelector(id).offsetTop + 150;
        window.scrollTo(0, eleTop)
      },  //跳转到页面内对应的内容
      lisMove: function (event) {
        let ul = this.$el.querySelector('aside').children[0];
        let top = ul.style.marginTop;
        var height = document.documentElement.clientHeight - 100 - ul.offsetHeight;
        if (top) {
          top = parseFloat(top);
        } else {
          top = 0;
        }
        let startY = event.touches[0].clientY;
        ul.ontouchmove = function (eve) {
          let Y = top + eve.touches[0].clientY - startY;
          if (Y > 0) {
            if (Y < 50) {
              ul.style.marginTop = Y + 'px';
            } else {
              ul.style.marginTop = 50 + 'px';
            }
          } else {
            if (Y > -height - 50) {
              ul.style.marginTop = Y + 'px';
            } else {
              ul.style.marginTop = -height - 50 + 'px';
            }
          }
          ul.ontouchend = function () {
            if (Y > 0) {
              ul.style.marginTop = 0 + 'px';
            } else if (Y < -height) {
              ul.style.marginTop = -height + 'px';
            }
          }
        }
      }  //侧栏的弹性滑动
    }
  }

</script>
