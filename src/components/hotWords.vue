<template>
  <div class='hotWords'>
    <ul @touchstart='lisMove($event)'>
      <li><a href="#">汤</a></li>
      <li><a href="#">香锅</a></li>
      <li><a href="#">面</a></li>
      <li><a href="#">粥</a></li>
      <li><a href="#">肯德基</a></li>
      <li><a href="#">沙拉</a></li>
      <li><a href="#">米粉</a></li>
      <li><a href="#">披萨</a></li>
      <li><a href="#">湘菜</a></li>
      <li><a href="#">秦人美食</a></li>
      <li><a href="#">添记隆江猪脚饭</a></li>
      <li><a href="#">华莱士</a></li>
    </ul>
  </div>
</template>

<style scoped>
  .hotWords {
    background: #000;
    color: #fff;
    margin-top: -1px;
    height: 25px;
    width: 100%;
    overflow: hidden;
  }

  .hotWords ul {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 1000%;
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
  }

  .hotWords ul:after {
    content: '';
    width: 0;
    height: 0;
    display: block;
    visibility: hidden;
    overflow: hidden;
    clear: both;
  }

  .hotWords ul li {
    float: left;
    padding: 0 12px;
  }

  .hotWords li a {
    text-decoration: none;
    color: #fff;
    font-size: 12px;
  }
</style>

<script>
  export default {
  methods: {
    lisMove: function (event) {
      let ul = this.$el.children[0]
      let left = ul.style.marginLeft;
      let lis = ul.children;
      var width = 0;
      for (let li of lis) {
        width += li.offsetWidth
      }
      width -= ul.parentNode.offsetWidth;
      if (left) {
        left = parseFloat(left);
      } else {
        left = 0;
      }
      let startX = event.touches[0].clientX
      ul.ontouchmove = function (eve) {
        let X = left + eve.touches[0].clientX - startX;

        if (X > 0) {
          if (X < 30) {
            ul.style.marginLeft = X + 'px';
          } else {
            ul.style.marginLeft = 30 + 'px';
          }
        } else {
          if(width>0){
            if (X > -width - 30) {
              ul.style.marginLeft = X + 'px';
            } else {
              ul.style.marginLeft = -width - 30 + 'px';
            }
          }else {
            if(X > -30){
              ul.style.marginLeft = X + 'px';
            }else {
              ul.style.marginLeft = - 30 + 'px';
            }
          }

        }
        ul.ontouchend = function (eve) {
          if (X > 0) {
            ul.style.marginLeft = 0 + 'px';
          }else if(X < -width){
            if(width>0){
              ul.style.marginLeft = -width + 'px';
            }else {
              ul.style.marginLeft = 0 + 'px';
            }
          }
        }
      }
    }
  }
  }
</script>
