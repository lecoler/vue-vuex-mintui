<!-- 评论组件 -->
<template>
  <div class='ratingsBox'>
    <div class="header">
      <img :src="avatar" class='touxiang'>
      <p>{{username}}<span>{{time}}</span></p>
      <p><i class='iconfont' v-for='item in scoreArr' :class='item'></i><span id='deliveryTime'>{{deliveryTime}}分钟到达</span>
      </p>
    </div>
    <div class='main'>
      <p>{{text}}</p>
      <img :src="url">
    </div>
    <div class="footer">
      <span v-for='item in recommend'>{{item}}</span>
    </div>
  </div>
</template>

<style scoped>
  .ratingsBox {
    padding: 16px;
    border-top: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
    margin-bottom: 16px;
    background-color: #fff;
  }

  .header .touxiang {
    float: left;
    display: inline-block;
    width: 45px;
    height:45px;
    border-radius: 50%;
    margin-right: 8px;
    margin-bottom: 8px;
  }

  .header i {
    color: orange;
    font-size: 16px;
  }

  .main p {
    text-indent: 2em;
    margin-top: 16px;
  }

  .main img {
    width: 80px;
    height: 80px;
    padding-top: 8px;
    padding-right: 8px;
    text-indent: 2em;
  }

  .footer span {
    margin-top: 16px;
    display: inline-block;
    border: 1px solid #cccccc;
    height: 30px;
    width: 60px;
    text-align: center;
    line-height: 30px;
    white-space: nowrap;
    word-break: keep-all;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-right: 8px;
    padding: 6px;
  }

  p {
    margin: 0;
    padding: 0;
    font-size: 16px;
  }

  span {
    color: #888;
    font-size: 12px;
  }
</style>

<script>
  export default {
    props: ['username', 'rateTime', 'deliveryTime', 'text', 'avatar', 'score', 'recommend'],      //接收数据
    data() {
      return {
        time: '',           //初始化评论时间
        scoreArr: [],       //初始化评分的星星样式数组
        url:''              //初始化评论的图片路径
      }
    },
    mounted: function () {      
      this.time = new Date(this.rateTime).toLocaleDateString();           //将数据中时间转换成本地的时间格式显示
      if (!this.deliveryTime) {                                           //判断是否有配送到的时间
        this.$el.querySelector('#deliveryTime').innerHTML = '&nbsp;'
      }
      let changeScore = (num, scoreArr) => {            //处理score数据，改成scoreArr数组（储存评分星星的类名）,传入分数和接收数组
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
      }   
      changeScore(this.score,this.scoreArr)


    }
  }
</script>
