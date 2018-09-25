<template>

  <div id="app">
     <router-view></router-view>
    <tabbar id='bottomTab'>
      <tabbar-item link="/reservation">
             <img slot="icon" src="./assets/demo/icon_nav_button.png">
            <span slot="label">预约</span>
      </tabbar-item>
      <tabbar-item link="/works">
        <img slot="icon" src="./assets/demo/icon_nav_msg.png">
        <span slot="label">作品</span>
      </tabbar-item>
      <tabbar-item selected link="/shop">
        <img slot="icon" src="./assets/demo/icon_nav_article.png">
        <span slot="label">商品</span>
      </tabbar-item> 
      <tabbar-item  link="/mine">
        <img slot="icon" src="./assets/demo/icon_nav_cell.png">
        <span slot="label">我的</span>
      </tabbar-item> 
    </tabbar>
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
  TabItem
} from 'vux'

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
    ViewBox
  },
  methods: {
    onIndexChange: function () {},
    onItemClick: function () {}
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
