<template>
<div style="">
    <blur :blur-amount=40 :url="url">
      <p class="center"><img :src="url"></p>
    </blur>

       <grid :show-lr-borders="false">
      <grid-item :label='i.title' v-for="i in laber" :key="i.title">
        <img slot="icon" v-bind:src="i.img">
      </grid-item>
    </grid>

    <group>
      <cell :title="i.title" v-for="i in cellsrc" :key="i.title" @click.native="i.click" is-link>
        <img slot="icon" width="20" style="display:block;margin-right:5px;" v-bind:src="i.img">
      </cell>
    </group>
    <br>
    <br>
  </div>
  
</template>


<script>
import { Blur, Grid, GridItem, GroupTitle, Cell, CellBox, CellFormPreview, Group, Badge } from 'vux'
import auth from '../aouth/auth'
import axios from '../axios/https.js'
import store from '@/store/store'
import router from '@/router/router'
import * as types from '@/store/types'
export default {
  components: {
    Blur,
    Grid,
    GridItem,
    GroupTitle,
    Group,
    Cell,
    CellFormPreview,
    CellBox,
    Badge
  },
  data () {
    return {
      images: [
        'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',
        'https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg',
        'https://o3e85j0cv.qnssl.com/hot-chocolate-1068703__340.jpg'
      ],
      url: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',
      laber: [
        {
          title: '会员卡',
          img: require('../assets/images/member_card.png')
        }, {
          title: '套餐剩余',
          img: require('../assets/images/bing.png')
        }, {
          title: '消费记录',
          img: require('../assets/images/record.png')
        }, {
          title: '我的预约',
          img: require('../assets/images/reservation.png')}
      ],
      cellsrc: [{
        title: '我的红包',
        img: require('../assets/images/redpackeg.png'),
        click: function () { }
      }, {
        title: '门店消费积分',
        img: require('../assets/images/package_remaining.png'),
        click: function () { }
      }, {
        title: '线上消费积分',
        img: require('../assets/images/jifen.png'),
        click: function () {

        }
      }, {
        title: '我的订单',
        img: require('../assets/images/dingdan.png'),
        click: function () { }
      },
      {
        title: '退出登陆',
        img: require('../assets/images/dingdan.png'),
        click: function () {
          console.log(store.state)
          store.commit(types.LOGOUT)
          router.push('/login')
        }
      }
      ]
    }
  },
  beforeCreate () {
    // 如果没有token的话需要重新登录
    console.log('有token存在,不需要登录')
    if (!auth.checkAuth()) {
      this.$router.push('login')
    }
  },
  mounted: function () {
    var _this = this
    axios.post('/user/getUserInfo').then(function (response) {
      var wechatInfo = response.data.data.wechatInfo
      console.log(this)
      _this.url = wechatInfo.headImgUrl
    }).catch(function (error) {
      console.log(error)
    })
  },
  methods: {
    onItemClick () {
      console.log('on item click')
    },
    jump (url) {
      this.$router.push(url)
    }
  }
}
</script>

<style scoped>
.center {
  text-align: center;
  padding-top: 20px;
  color: #fff;
  font-size: 18px;
}
.center img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #ececec;
}
.grid-center {
  display: block;
  text-align: center;
  color: #666;
}
.weui-grids {
  background-color: #fff;
  border-right: 1px solid #D9D9D9;
}
</style>
