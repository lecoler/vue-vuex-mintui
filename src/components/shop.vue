<!-- 首页上每家店组件(该组件是多余的,其存在仅仅为了处理数据) -->
<template>
  <div>
    <shopBox
      :imgsrc='imgsrc'
      :name='name'
      :sellCount='sellCount'
      :minPrice='minPrice'
      :deliveryTime='deliveryTime'
      :description='description'
      :deliveryPrice='deliveryPrice'
      :score='score'
      :active='active'
      :activeCount='activeCount'
      :scoreArr='scoreArr'
    ></shopBox>
  </div>

</template>

<script>
  import shopBox from './shopBox.vue'

  export default {
    data() {
      return {
        imgsrc: '',
        name: '',
        sellCount: 0,
        minPrice: 0,
        deliveryTime: 0,
        description: '',
        deliveryPrice: 0,
        score: 0,
        active: {},
        activeCount: 1,
        scoreArr: []
      }
    },
    components: {shopBox},
    created: function () {
      this.getData()
    },
    methods: {
      getData: function () {        //ajax请求数据
        this.$http.get('/static/data.json').then((success) => {
          // 响应成功回调
          success = success.body;
          this.imgsrc = success.seller.avatar;
          this.name = success.seller.name;
          this.sellCount = success.seller.sellCount;
          this.minPrice = success.seller.minPrice;
          this.deliveryTime = success.seller.deliveryTime;
          this.description = success.seller.description;
          this.deliveryPrice = success.seller.deliveryPrice;
          this.score = success.seller.score;
          this.activeCount = success.seller.supports.length-1;


          let changeActive = () =>{               //处理数据active
            let activeContent = success.seller.supports;
            for(let i of activeContent){
              if(i.type == activeContent.length-2){
                break;
              }
              this.active[i.type]=i.description
            }
          }
          let changeScore = () =>{                  //处理score,将其转换成星星的样式,以数组储存
            let num = success.seller.score;
            num = parseInt(num*2)/2;
            for(let i = 1; i<=num;i++){
              this.scoreArr.push('icon-xingxing')
            }
            if(num%1 == 0.5){
              this.scoreArr.push('icon-banxing')
            }
            let need = 5 - this.scoreArr.length;
            for(let i = 1; i<=need;i++){
              this.scoreArr.push('icon-xing-kong')
            }
          }
          changeScore()
          changeActive()




        }, (err) => {
          // 响应错误回调
          console.log(err);
        });
      }
    }
  }

</script>
