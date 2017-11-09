<template>
  <div class="iconBox fr">
    <span class="i" @click='reduce({data:data,name:name}),hidden()'>-</span>
    <span>{{number}}</span>
    <span class="i blue" @click='add({data:data,name:name}),show()'>+</span>
  </div>
</template>

<style scoped>
  .iconBox {
    margin-top: 0px;
    line-height: 1.2;
    float: right;
  }

  .iconBox span {
    margin: 0 6px;
    color: #000;
    display: none;
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
  }

  .iconBox span.i.blue {
    color: #fff;
    background-color: #0086b3;
    display: inline-block;
  }
</style>

<script>
  import store from '../store'
  import {mapState, mapActions} from 'vuex'

  export default {
    store,
    props: ['data', 'name'],
    methods: {
      ...mapActions(['add', 'reduce']),
      show() {
        let spans = this.$el.querySelectorAll('span')
        if(this.number > 0){
          for (let i of spans) {
            i.style.display = 'inline-block';
          }
        }
      },
      hidden() {
        let spans = this.$el.querySelectorAll('span')
        if (this.number <= 0) {
          for (let i of spans) {
            i.removeAttribute('style');
          }
        }
      }
    },
    computed: mapState({
      number: function (state) {
        return state.number[this.name]
      }
    }),
    mounted() {
      this.show();
      this.hidden();
    },
    updated() {
      this.show();
      this.hidden();
    },

  }
</script>
