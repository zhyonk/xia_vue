<template>
<div style="">
    <blur :blur-amount=40 :url="url">
      <p class="center"><img :src="url"></p>
    </blur>
       <grid :show-lr-borders="false">
      <grid-item :label='head.title' v-for="head in headItem" :key="head.title" @click.native="head.click">
        <img slot="icon" v-bind:src="head.img">
      </grid-item>
    </grid>

    <group>
      <cell :title="i.title" v-for="i in itemList" :key="i.title" @click.native="i.click" is-link>
        <img slot="icon" width="20" style="display:block;margin-right:5px;" v-bind:src="i.img">
      </cell>
    </group>
    <br>
    <br>
  </div>
  
</template>


<script>
import { Blur, Grid, GridItem, GroupTitle, Cell, CellBox, CellFormPreview, Group, Badge } from 'vux'
// import auth from '../aouth/auth'
import axios from '../axios/https.js'
// import store from '@/store/store'
import router from '@/router/router'
// import * as types from '@/store/types'
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
      url: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',
      headItem: '',
      itemList: ''
    }
  },
  beforeCreate () {
    // 如果没有token的话需要重新登录
    // console.log('有token存在,不需要登录')
    // if (!auth.checkAuth()) {
    //   this.$router.push('login')
    // }
    // console.log(this.$router.params.openid)
  },
  mounted: function () {
    this.url = this.getHeadUrl()
    this.headItem = this.getHeadItem()
    this.itemList = this.getBottomItem()
  },
  methods: {
    onItemClick () {
      console.log('on item click')
    },
    getHeadUrl () {
      var openid = sessionStorage.getItem('openid')
      console.log('mine page openid: ' + openid)
      var info = sessionStorage.getItem('wechatUserInfo')
      if (info != null && info !== 'null') {
        console.log('sessionStorage中有UserInfo: ' + info)
        return JSON.parse(info).headImgUrl
      } else {
        axios.get('/wechat/getUserInfo', {params: {openid: openid}}, {headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }}).then(function (response) {
          var wechatInfo = response.data.data.wechatInfo
          sessionStorage.setItem('wechatUserInfo', JSON.stringify(wechatInfo))
          return wechatInfo.headImgUrl
        }).catch(function (error) {
          console.log(error)
        })
      }
    },
    getHeadItem () {
      var menu = this.getMineMenu()
      if (menu) {
        menu = JSON.parse(menu)
        var jsonStr = menu
        var arr = []
        this.sort(jsonStr)
        for (var p in jsonStr) { // 遍历json数组时，这么写p为索引，0,1
          var type = jsonStr[p].type
          if (type === 1) {
            var name = jsonStr[p].name
            var url = jsonStr[p].url
            var icon = jsonStr[p].icon
            var sort = jsonStr[p].sort
            var obj = {
              title: name,
              img: icon,
              click: function () {
                router.push(url)
              },
              sort: sort,
              icon: icon,
              type: type
            }
            arr.push(obj)
          }
        }
        return arr
      }
    },
    getBottomItem () {
      var menu = this.getMineMenu()
      if (menu) {
        menu = JSON.parse(menu)
        var jsonStr = menu
        var arr = []
        this.sort(jsonStr)
        for (var p in jsonStr) { // 遍历json数组时，这么写p为索引，0,1
          var type = jsonStr[p].type
          if (type === 2) {
            var name = jsonStr[p].name
            var url = jsonStr[p].url
            var icon = jsonStr[p].icon
            var sort = jsonStr[p].sort
            var obj = {
              title: name,
              img: icon,
              click: function () {
                router.push(url)
              },
              sort: sort,
              icon: icon,
              type: type
            }
            arr.push(obj)
          }
        }
        return arr
      }
    },
    getMineMenu () {
      var menu = sessionStorage.getItem('menu')
      if (menu) {
        // 说明已经获取到了menu数据了，就不重新获取了
        return menu
      } else {
        var openid = sessionStorage.getItem('openid')
        if (openid) {
          axios.get('/menu/getMineMenu', {params: {openid: openid}}, {headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }}).then(function (response) {
            console.log(response.data)
            var menuObj = response.data.data.menu
            if (menuObj != null) {
              sessionStorage.setItem('menu', JSON.stringify(menuObj))
              console.log(menuObj)
              return menuObj
            }
          }).catch(function (error) {
            console.log(error)
          })
        }
      }
      return null
    },
    sort (arr) {
      for (var j = 0; j < arr.length - 1; j++) {
        for (var i = 0; i < arr.length - 1 - j; i++) {
          if (arr[i].sort > arr[ i + 1 ].sort) {
            var temp = arr[i]
            arr[i] = arr[ i + 1 ]
            arr[ i + 1 ] = temp
          }
        }
      }
      return arr
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
