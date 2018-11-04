<template>

  <div id="app">
     <router-view></router-view>
    <tabbar id='bottomTab'>
      <tabbar-item selected v-bind:link="reservationLink">
             <img slot="icon" src="./assets/demo/icon_nav_button.png">
            <span slot="label">预约</span>
      </tabbar-item>
      <tabbar-item link="/works">
        <img slot="icon" src="./assets/demo/icon_nav_msg.png">
        <span slot="label">作品</span>
      </tabbar-item>
      <tabbar-item  link="/shop">
        <img slot="icon" src="./assets/demo/icon_nav_article.png">
        <span slot="label">商品</span>
      </tabbar-item> 
      <tabbar-item  link="/mine">
        <img slot="icon" src="./assets/demo/icon_nav_cell.png">
        <span slot="label">我的</span>
      </tabbar-item> 
    </tabbar>
    <loading v-model="isLoading"></loading>
  </div>
</template>

<script>
import {
  ViewBox,
  Tabbar,
  TabbarItem,
  Group,
  Cell,
  XHeader,
  Sticky,
  Tab,
  TabItem,
  Loading
} from 'vux'
import { mapState } from 'vuex'

export default {
  name: 'app',
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell,
    XHeader,
    Sticky,
    Tab,
    TabItem,
    ViewBox,
    Loading
  },
  mounted: function () {
    var openId = sessionStorage.getItem('openid')
    console.log('在app.vue中的openid：' + openId)
  },
  methods: {
    onIndexChange: function () {},
    onItemClick: function () {}
  },
  data () {
    return {
      reservationLink: '/reservation'
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.vux.isLoading
    })
  }
}
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";

body {
  background-color: #fbf9fe;
}
#bottomTab {
  position: fixed;
}
</style>
