<template>
    <div>
        <!-- <swiper :list="demo03_list" auto style="width:100%;margin:0 auto;" height="200px" dots-class="custom-bottom" dots-position="center"> </swiper>-->
        <!-- <swiper :list="demo02_list" style="width:85%;margin:0 auto;" :aspect-ratio="300/800" dots-position="center"></swiper> -->
        <swiper :list="demo01_list"
                v-model="demo02_index"
                :min-moving-distance="150"
                @on-index-change="demo01_onIndexChange"
                style="z-index:1"></swiper>
        <div>
            <sticky ref="sticky"
                    :check-sticky-support="false"
                    :disabled="disabled">
                <div class="barberList_storeInfo">
                    <div class="container">
                        <div class="img am-clickable"><img style="background-color: rgb(204, 204, 204);"
                                 :src="shopImg"></div>
                        <a class="call"
                           :href="shopHrefTel"></a>
                        <div class="content">
                            <div class="name">{{ shopName }}</div>
                            <div class="adress">{{ shopAddress }}</div>
                            <div class="tel">{{shopPhone}}</div>
                        </div>
                    </div>
                    <div class="barberList_bg"></div>
                </div>
            </sticky>
        </div>
        <div id="taobao-best"
             style="width: 100%">
            <!-- Swiper -->
            <div class="swiper-container show-swiper swiper-container-horizontal swiper-container-ios shejishi-container "
                 style="z-index: 3">
                <div class="swiper-wrapper shejishi-wrapper"
                     style="transition-duration: 0ms; transform: translate3d(37px, 0px, 0px);">
                    <div class="swiper-slide swiper-slide-active shejishi-slide"
                         style="margin-right: 17px;">
                        <div class="goods"
                             style="transform: scale3d(1.1, 1.1, 1); transition-duration: 0ms;width: 158px;height:230px">
                            <a link="/reserveDetail">
                                <div class="c-top">
                                    <div class="img">
                                        <img src="../assets/uploads/001.jpg"
                                             width="100%">
                                    </div>
                                </div>
                                <div class="detail">
                                    <!-- <h2>夏惠敏老师</h2>  -->
                                    <!--<p>一把可以切水果</p>-->
                                    <ul>
                                        <li>蔻丹</li>
                                        <li> </li>
                                    </ul>
                                    <div class="btn">立即预约</div>
                                </div>
                            </a>

                        </div>
                    </div>
                    <div class="swiper-slide swiper-slide-next shejishi-slide"
                         style="margin-right: 17px;">
                        <div class="goods"
                             style="transform: scale3d(1, 1, 1); transition-duration: 0ms;width: 158px;height:230px">
                            <a href="#springUrl('/game/report/oWHgww6RA28kbYUwlwvhs64sw_9s')">
                                <div class="c-top">
                                    <!--<div class="date">-->
                                    <!--<div class="year">2017.12</div>-->
                                    <!--<div class="day">15</div>-->
                                    <!--<div class="oldyear">丁酉年</div>-->
                                    <!--<div class="oldday">十月廿八</div>-->
                                    <!--</div>-->
                                    <div class="img">
                                        <img src="../assets/uploads/002.jpg"
                                             width="100%">
                                    </div>
                                </div>
                                <div class="detail">
                                    <!--<p>一把可以切水果</p>-->
                                    <ul>
                                        <li>彩绘美甲</li>
                                        <li> </li>
                                    </ul>
                                    <div class="btn">立即预约</div>
                                </div>
                            </a>

                        </div>
                    </div>
                    <div class="swiper-slide shejishi-slide"
                         style="margin-right: 17px;">
                        <div class="goods"
                             style="transform: scale3d(1, 1, 1); transition-duration: 0ms;width: 158px;height:230px">
                            <a href="#">
                                <div class="c-top">
                                    <!--<div class="date">-->
                                    <!--<div class="year">2017.12</div>-->
                                    <!--<div class="day">15</div>-->
                                    <!--<div class="oldyear">丁酉年</div>-->
                                    <!--<div class="oldday">十月廿八</div>-->
                                    <!--</div>-->
                                    <div class="img">
                                        <img src="../assets/uploads/001.jpg"
                                             width="100%">
                                    </div>
                                </div>
                                <div class="detail">
                                    <!-- <h2>夏惠敏老师</h2> -->
                                    <!--<p>一把可以切水果</p>-->
                                    <ul>
                                        <li>贴片美甲</li>
                                        <li> </li>
                                    </ul>
                                    <div class="btn">立即预约</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="swiper-slide shejishi-slide"
                         style="margin-right: 17px;">
                        <div class="goods"
                             style="transform: scale3d(1, 1, 1); transition-duration: 0ms;width: 158px;height:230px">
                            <a href="#">
                                <div class="c-top">
                                    <!--<div class="date">-->
                                    <!--<div class="year">2017.12</div>-->
                                    <!--<div class="day">15</div>-->
                                    <!--<div class="oldyear">丁酉年</div>-->
                                    <!--<div class="oldday">十月廿八</div>-->
                                    <!--</div>-->
                                    <div class="img">
                                        <img src="../assets/uploads/002.jpg"
                                             width="100%">
                                    </div>
                                </div>
                                <div class="detail">
                                    <!-- <h2>雕花美甲</h2> -->
                                    <!--<p>一把可以切水果</p>-->
                                    <ul>
                                        <li>雕花美甲</li>
                                        <li> </li>
                                    </ul>
                                    <div class="btn">立即预约</div>
                                </div>
                            </a>

                        </div>
                    </div>
                    <div class="swiper-slide shejishi-slide"
                         style="margin-right: 17px;">
                        <div class="goods"
                             style="transform: scale3d(1, 1, 1); transition-duration: 0ms;width: 158px;height:230px">
                            <a href="#">
                                <div class="c-top">
                                    <!--<div class="date">-->
                                    <!--<div class="year">2017.12</div>-->
                                    <!--<div class="day">15</div>-->
                                    <!--<div class="oldyear">丁酉年</div>-->
                                    <!--<div class="oldday">十月廿八</div>-->
                                    <!--</div>-->
                                    <div class="img">
                                        <img src="../assets/uploads/001.jpg"
                                             width="100%">
                                    </div>
                                </div>
                                <div class="detail">
                                    <!-- <h2>夏惠敏老师</h2> -->
                                    <!--<p>一把可以切水果</p>-->
                                    <ul>
                                        <li>光疗甲</li>
                                        <li> </li>
                                    </ul>
                                    <div class="btn">立即预约</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="swiper-slide last-slide shejishi-slide"
                         style="margin-right: 17px;">
                        <span class="icon"></span>
                        <p class="text">左滑查看更多</p>
                    </div>
                </div>
            </div>
            <div class="mask"
                 style="z-index: 2"></div>
            <div class=" shejishi-container swiper-container bg-swiper swiper-container-fade swiper-container-horizontal swiper-container-ios"
                 style="position: absolute;z-index: 1">
                <div class="swiper-wrapper"
                     style="transition-duration: 0ms;">
                    <div class="swiper-slide swiper-slide-active shejishi-slide"
                         style="width: 320px; opacity: 1; transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;"><img src="../assets/uploads/blur001.jpg"></div>
                    <div class="swiper-slide swiper-slide-next shejishi-slide"
                         style="width: 320px; opacity: 0; transform: translate3d(-320px, 0px, 0px); transition-duration: 0ms;"><img src="../assets/uploads/blur002.jpg"></div>
                    <div class="swiper-slide shejishi-slide"
                         style="width: 320px; opacity: 0; transform: translate3d(-640px, 0px, 0px); transition-duration: 0ms;"><img src="../assets/uploads/blur003.jpg"></div>
                    <div class="swiper-slide shejishi-slide"
                         style="width: 320px; opacity: 0; transform: translate3d(-1280px, 0px, 0px); transition-duration: 0ms;"><img src="../assets/uploads/blur004.jpg"></div>
                    <div class="swiper-slide shejishi-slide"
                         style="width: 320px; opacity: 0; transform: translate3d(-1920px, 0px, 0px); transition-duration: 0ms;"><img src="../assets/uploads/blur005.jpg"></div>

                </div>
            </div>
        </div>
        <!-- <yd-list theme="5"> 
        <yd-list-item v-for="item in list" :key="item.key">
            <img slot="img" :src="item.img">
            <span slot="title">{{item.title}}</span>
            <yd-list-other slot="other">
                <div>
                    <span class="demo-list-price"><em>¥</em>{{item.price}}</span>
                    <span class="demo-list-del-price">¥{{item.w_price}}</span>
                </div>
                <div>content</div>
            </yd-list-other>
        </yd-list-item>
    </yd-list> -->
        <div class="barberList_ul1">
            <scroller style="position: relative;"
                      :on-refresh="refresh"
                      :on-infinite="infinite"
                      :noDataText="noDataText">
                <div style="height: 1px;"></div>
                <li class="am-clickable"
                    v-for="i in listdata"
                    :key=i.opneId>
                    <div class="l1">
                        <div class="img am-clickable">
                            <img style="background-color: rgb(204, 204, 204);"
                                 v-bind:src="i.headImgUrl">
                        </div>
                        <div class="name">{{ i.userName }}</div>
                        <div class="level">{{ i.positionName }}</div>
                        <div class="price_label"
                             style="display: block;">
                            <span class="label">剪发价</span>
                            <span class="price">￥
                                <strong>{{ i.productPrice }}</strong>
                            </span>
                        </div>
                    </div>
                    <div class="l2">
                        <div class="reservation_btn am-clickable">预约</div>
                        <div class="tags">
                            <span class="tag"
                                  v-for="tag in i.tagNameList"
                                  :key="tag.userTagId">{{tag.tagName}}</span>
                        </div>
                        <div class="numbers">
                            <div class="comment">
                                <div class="n">好评率:
                                    <span class="num">{{ i.praiseAverage }}%</span>
                                </div>
                            </div>
                            <div class="rvCount">
                                <div class="n">已被约:
                                    <span class="num">{{ i.record }}</span>
                                </div>
                            </div>
                            <div class="archiveCount">
                                <div class="n">作品集:
                                    <span class="num">{{ i.workRecordCount }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </scroller>
        </div>
        <br />
        <br />
        <br />
    </div>

</template>
<style lang="less">
@import url('./less/style1.less');
@import url('./less/swiper.min.less');
</style>
<script>
import { ViewBox, Tabbar, TabbarItem, Group, Cell, XHeader, Sticky, Tab, TabItem, Swiper } from 'vux'
import store from '@/store/store'
import * as types from '@/store/types'
import axios from '../axios/https.js'
import Vue from 'vue'
import Swiperjs from 'swiper'
// import {ListTheme, ListItem, ListOther} from 'vue-ydui/dist/lib.rem/list'
// import 'vue-ydui/dist/ydui.base.css'
import {ListTheme, ListItem, ListOther} from 'vue-ydui/dist/lib.px/list'
Vue.component(ListTheme.name, ListTheme)
Vue.component(ListItem.name, ListItem)
Vue.component(ListOther.name, ListOther)
export default {
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
    Swiper,
    ListOther,
    ListItem,
    ListTheme,
    Swiperjs
    // VScroll
  },
  data () {
    return {
      disabled: typeof navigator !== 'undefined' && /iphone/i.test(navigator.userAgent) && /ucbrowser/i.test(navigator.userAgent),
      demo01_list: [],
      shopName: '',
      shopAddress: '',
      shopPhone: '',
      shopHrefTel: '',
      shopImg: '',
      demo02_index: 1,
      offset: 0,
      listdata: [], // 下拉更新数据存放数组
      noDataText: '我们也是有底线的',
      list: [
              {img: '//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg', title: '标题111标题标题标题标题', price: 156.23, w_price: 89.36},
              {img: '//img1.shikee.com/try/2016/06/21/10172020923917672923.jpg', title: '标题222标题标题标题标题', price: 256.23, w_price: 89.36},
              {img: '//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg', title: '标题333标题标题标题标题', price: 356.23, w_price: 89.36},
              {img: '//img1.shikee.com/try/2016/06/25/14244120933639105658.jpg', title: '标题444标题标题标题标题', price: 456.23, w_price: 89.36},
              {img: '//img1.shikee.com/try/2016/06/26/12365720933909085511.jpg', title: '标题555标题标题标题标题', price: 556.23, w_price: 89.36},
              {img: '//img1.shikee.com/try/2016/06/19/09430120929215230041.jpg', title: '标题666标题标题标题标题', price: 656.23, w_price: 89.36}
      ]
    }
  },
  mounted: function () {
      // 设置
    var shopInfo = sessionStorage.getItem('shopInfo')
    shopInfo = JSON.parse(shopInfo)
    if (shopInfo) {
      this.shopName = shopInfo.shopName
      this.shopAddress = shopInfo.shopAddressDetail
      this.shopPhone = shopInfo.shopPhone
      this.shopHrefTel = 'Tel:' + shopInfo.shopPhone
      this.shopImg = shopInfo.shopImg
    }
    var _this = this
    if (shopInfo == null || shopInfo === 'null') {
      axios.get('/menu/getShopDetail', {params: {openid: this.$route.query.openid}}, { headers: {'Content-Type': 'application/x-www-form-urlencoded'
      }}).then(function (response) {
        shopInfo = response.data.data.shopInfo
        sessionStorage.setItem('shopInfo', JSON.stringify(shopInfo))
        _this.shopName = shopInfo.shopName
        _this.shopAddress = shopInfo.shopAddressDetail
        _this.shopPhone = shopInfo.shopPhone
        _this.shopHrefTel = 'Tel:' + shopInfo.shopPhone
        _this.shopImg = shopInfo.shopImg
      }).catch(function (error) {
        console.log(error)
      })
    }
    if (this.$route.query.token && this.$route.query.openid !== 'null') {
      store.commit(types.OPENID, this.$route.query.openid)
      store.commit(types.LOGIN, this.$route.query.token)
      axios.get('/wechat/getUserInfo', {params: {openid: this.$route.query.openid}}, {headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }}).then(function (response) {
        var wechatInfo = response.data.data.wechatInfo
        sessionStorage.setItem('wechatUserInfo', JSON.stringify(wechatInfo))
        return wechatInfo.headImgUrl
      }).catch(function (error) {
        console.log(error)
      })
      axios.get('/menu/getMineMenu', {params: {openid: this.$route.query.openid}}, {headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }}).then(function (response) {
        var menuObj = response.data.data.menu
        sessionStorage.setItem('menu', JSON.stringify(menuObj))
        return menuObj
      }).catch(function (error) {
        console.log(error)
      })
    }
    this.getBannerBaseList()
    this.getUserCard()

    var swiperBg = new Swiperjs('.show-swiper', {
      slidesPerView: 'auto',
      watchSlidesProgress: !0,
      slidesOffsetBefore: 37,
      spaceBetween: 10,
        // width:180,
      resistanceRatio: 1,
      controller: {
        control: new Swiperjs('.bg-swiper', {
          effect: 'fade',
          fadeEffect: {
            crossFade: !1
          }
        })
      },
      on: {
        progress: function (b) {
          for (var i = 0; i < this.slides.length; i++) {
            var slide = this.slides.eq(i)
            var slideProgress = this.slides[i].progress
            var prevIndent = i === 4 ? 0.3228 : 0.0898
            var scale = Math.abs(slideProgress + prevIndent) < 1 ? 0.1 * (1 - Math.abs(slideProgress + prevIndent)) + 1 : 1
            slide.find('.goods').transform('scale3d(' + scale + ',' + scale + ',1)')
          }
        },
        setTransition: function (b) {
          for (var a = 0; a < this.slides.length; a++) this.slides.eq(a).find('.goods').transition(b)
        },
        touchMove: function () {
          this.controller.control = this.progress < 0.01 ? '' : swiperBg
        },
        touchEnd: function () {
          this.translate < -1515 && alert('\u8df3\u8f6c')
        }
      }
    })
  },
  beforeCreate () {
    // 如果没有token的话需要重新登录
    // console.log('有token存在,不需要登录')
    // if (!auth.checkAuth()) {
    //   this.$router.push('login')
    // }
    // console.log(this.$router.params.openid)
  },
  methods: {
    demo01_onIndexChange (index) {
      this.demo01_index = index
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
    },
    getBannerBaseList () {
      var bannerList = store.getters.bannerList
      var openid = store.getters.openid
      var _this = this
      if (bannerList === '' || bannerList == null) {
        axios.get('/menu/getBannerList', {params: {openid: openid}}, {headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }}).then(function (response) {
          var bannerListObj = response.data.data.bannerList
          store.commit(types.BANNER, JSON.stringify(bannerListObj))
          var jsonStr = bannerListObj
          var arr = []
          jsonStr = _this.sort(jsonStr)
          for (var p in jsonStr) { // 遍历json数组时，这么写p为索引，0,1
            var title = jsonStr[p].title
            var url = jsonStr[p].url
            var img = jsonStr[p].img
            var sort = jsonStr[p].sort
            var obj = {
              title: title,
              img: img,
              url: url,
              sort: sort
            }
            arr.push(obj)
          }
          _this.demo01_list = arr
        }).catch(function (error) {
          console.log(error)
        })
      } else {
        var jsonStr = JSON.parse(bannerList)
        var arr = []
        jsonStr = _this.sort(jsonStr)
        for (var p in jsonStr) { // 遍历json数组时，这么写p为索引，0,1
          var title = jsonStr[p].title
          var url = jsonStr[p].url
          var img = jsonStr[p].img
          var sort = jsonStr[p].sort
          var obj = {
            title: title,
            img: img,
            url: url,
            sort: sort
          }
          arr.push(obj)
        }
        _this.demo01_list = arr
      }
    },
    getWorkUserCardList (offset, fn) {
      var openid = store.getters.openid
      var _this = this
      axios.get('/menu/getUserCardList', {params: {openid: openid, offset: offset, limit: 10}}, {headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }}).then(function (response) {
        var workUserCardList = response.data.data.workUserCardList
        store.commit(types.WORKUSERLIST, JSON.stringify(workUserCardList))
        var jsonStr = workUserCardList
        console.log('jsonStr: ' + jsonStr)
        var arr = []
        for (var p in jsonStr) { // 遍历json数组时，这么写p为索引，0,1
          var userPhone = jsonStr[p].userPhone
          var userName = jsonStr[p].userName
          var headImgUrl = jsonStr[p].headImgUrl
          var praiseAverage = jsonStr[p].praiseAverage
          var productPrice = jsonStr[p].productPrice
          var sales = jsonStr[p].sales
          var record = jsonStr[p].record
          var positionName = jsonStr[p].positionName
          var workRecordCount = jsonStr[p].workRecordCount
          var tagNameList = jsonStr[p].tagNameList
          var obj = {
            userPhone: userPhone,
            userName: userName,
            headImgUrl: headImgUrl,
            praiseAverage: praiseAverage,
            productPrice: productPrice,
            sales: sales,
            record: record,
            tagNameList: tagNameList,
            positionName: positionName,
            workRecordCount: workRecordCount
          }
          arr.push(obj)
        }
        console.log(arr)
        if (arr.length < 10) {
          _this.offset = 0
          fn(true)
          _this.listdata = arr
          return
        } else {
          if (fn) {
            fn()
          }
        }
        if (offset === 1) {
          _this.listdata = arr
        } else {
          _this.listdata = _this.listdata.concat(arr)
        }
        console.log('arr: ' + _this.listdata)
        // this.listdata = arr
      }).catch(function (error) {
        console.log(error)
      })
    },
    getUserCard () {
      var openid = store.getters.openid
      var _this = this
      axios.get('/menu/getUserCardList', {params: {openid: openid, offset: 1, limit: 10}}, {headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }}).then(function (response) {
        var workUserCardList = response.data.data.workUserCardList
        store.commit(types.WORKUSERLIST, JSON.stringify(workUserCardList))
        var jsonStr = workUserCardList
        console.log('jsonStr: ' + jsonStr)
        var arr = []
        for (var p in jsonStr) { // 遍历json数组时，这么写p为索引，0,1
          var userPhone = jsonStr[p].userPhone
          var userName = jsonStr[p].userName
          var headImgUrl = jsonStr[p].headImgUrl
          var praiseAverage = jsonStr[p].praiseAverage
          var productPrice = jsonStr[p].productPrice
          var sales = jsonStr[p].sales
          var record = jsonStr[p].record
          var positionName = jsonStr[p].positionName
          var workRecordCount = jsonStr[p].workRecordCount
          var tagNameList = jsonStr[p].tagNameList
          var obj = {
            userPhone: userPhone,
            userName: userName,
            headImgUrl: headImgUrl,
            praiseAverage: praiseAverage,
            productPrice: productPrice,
            sales: sales,
            record: record,
            tagNameList: tagNameList,
            positionName: positionName,
            workRecordCount: workRecordCount
          }
          arr.push(obj)
        }
        _this.listdata = arr
      }).catch(function (error) {
        console.log(error)
      })
    },
    refresh (done) {
      this.offset = 0
      this.getWorkUserCardList(1, done)
    },
    infinite (done) {
      this.offset++
      this.getWorkUserCardList(this.offset, done)
    }
  }
}
</script>
<style scoped>
.barberList_storeInfo {
    padding: 0 0 4px 0;
    position: relative;
    z-index: 2;
}
.barberList_storeInfo .container {
    background: #fff;
    padding: 11px 11px 6px 11px;
}
.barberList_storeInfo .img {
    width: 58px;
    height: 58px;
    float: left;
    overflow: hidden;
    background: url(../assets/images/img_bg.png) no-repeat center center;
        background-size: auto auto;
    background-size: 58px 58px;
    border-radius: 2px;
}
.barberList_storeInfo .img img {
    height: 58px;
    border-radius: 2px;
}
.barberList_storeInfo .call {
    float: right;
    width: 40px;
    height: 40px;
    background: #e768ae url(../assets/images/main_sprite.png) no-repeat 0 -278px;
        background-color: rgb(231, 104, 174);
        background-size: auto auto;
    background-size: 56px 1151px;
    border-radius: 20px;
    margin-top: 12px;
}
.barberList_storeInfo .content {
    margin-left: 65px;
    min-height: 58px;
    line-height: 18px;
    font-size: 11px;
    color: #999;
}
.barberList_storeInfo .name {
    font-size: 13px;
    line-height: 18px;
    height: 18px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #222;
    padding: 0 0 4px 5px;
}
.barberList_storeInfo .adress {
    line-height: 20px;
    height: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.barberList_storeInfo .barberList_bg {
    width: 100%;
    height: 8px;
    position: absolute;
    left: 0;
    bottom: -4px;
    background: url(../assets/images/store_bottom.png) repeat-x left bottom;
        background-size: auto auto;
    background-size: 14px 8px;
}
.barberList_storeInfo .tel::before {
    margin-top: -1px;
    content: "";
    width: 20px;
    height: 20px;
    float: left;
    background: url(../assets/images/main_sprite.png) no-repeat -30px -988px;
        background-size: auto auto;
    background-size: 56px 1151px;
}

/* 理发师卡片 */
.barberList_ul1 li {
    padding: 10px 15px;
    position: relative;
    list-style:none;
}
.barberList_ul1 {
    padding: 12px 0;
}
.theme1 .barberList_ul1 .l1 {
    background-color: #fff;
}

.barberList_ul1 .l1 {
    background-color: #f4e1e1;
    padding: 8px;
    height: 58px;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    list-style:none;
}
.barberList_ul1 .img {
    width: 73px;
    height: 73px;
    background: #ddd url(../assets/images/empBg.png) no-repeat center center;
        background-size: auto auto;
    background-size: contain;
    border: 3px solid #fff;
    border-radius: 40px;
    float: left;
    position: relative;
    z-index: 1;
    overflow: hidden;
}
.barberList_ul1 .img img {
    width: 73px;
    border-radius: 37px;
}
.barberList_ul1 .name {
    margin-left: 90px;
    color: #a14545;
    line-height: 30px;
    font-size: 14px;
    padding-top: 5px;
}
.theme1 .barberList_ul1 .level, .theme1 .barberList_ul1 .name, .theme1 .barberList_ul1 .price_label {
    color: #a14545;
}
.barberList_ul1 .level {
    margin-left: 90px;
    color: #bd7f7f;
    font-size: 11px;
    line-height: 16px;
}
.barberList_ul1 .price_label {
    position: absolute;
    right: 30px;
    top: 25px;
    color: #bd7f7f;
}
.barberList_ul1 .price_label {
    color: #a14545;
}
.barberList_ul1 .price_label .label {
    font-size: 10px;
}
.barberList_ul1 .price {
    color: #ed7086;
    font-style: italic;
    position: relative;
    top: 1px;
}
.barberList_ul1 .price strong {
    font-size: 20px;
    font-weight: 400;
}
.barberList_ul1 .l2 {
    padding: 10px 14px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
}

.barberList_ul1 .l2 {
    background-color: #fff;
    position: relative;
}
.theme1 .barberList_ul1 .reservation_btn {
    background: #ff2146;
    width: 48px;
    border-radius: 30px;
    line-height: 20px;
    z-index: 1;
}
.barberList_ul1 .reservation_btn {

    background: url(../assets/images/main_sprite.png) no-repeat 0 0;
    background-size: 56px 1151px;
    width: 51px;
    height: 48px;
    position: absolute;
    right: 10px;
    top: -24px;
    line-height: 48px;
    font-size: 12px;
    color: #fff;
    text-align: center;

}
.barberList_ul1 .tags {
    min-height: 25px;
    line-height: 25px;
    font-size: 12px;
    padding: 5px 36px 2px 0;
}
.barberList_ul1 .numbers {
    display: -webkit-box;
    margin-top: 2px;
    height: 12px;
    font-size: 11px;
    text-align: center;
}
.barberList_ul1 .numbers>div {
    border-right: 1px solid #eee;
}

.barberList_ul1 .comment {
    -webkit-box-flex: 1;
    color: #ec6969;
}
.barberList_ul1 .n {
    display: inline-block;
}
.barberList_ul1 .num {
    font-size: 12px;
}
.barberList_ul1 .rvCount {
    -webkit-box-flex: 1;
    color: #999;
}
.barberList_ul1 .n {
    display: inline-block;
}
.barberList_ul1 .num {
    font-size: 12px;
}
.barberList_ul1 .numbers>div:last-child {
    border-right: none;
}

.barberList_ul1 .numbers>div {
    border-right: 1px solid #eee;
}
.barberList_ul1 .archiveCount {
    -webkit-box-flex: 1;
    color: #999;
}
.barberList_ul1 .n {
    display: inline-block;
}
.barberList_ul1 .tag {
    display: inline-block;
    white-space: nowrap;
    line-height: 25px;
    height: 25px;
    padding: 0 8px;
    color: #747474;
    border-radius: 13px;
    background-color: #eee;
    margin: 0 8px 5px 0;
}
.yd-list-theme1 .yd-list-item .yd-list-title {
    word-wrap: normal;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: justify;
    height: 18px;
}
.yd-list-title {
    color: #505050;
    font-size: 13px;
    text-align: justify;
    font-weight: 800;
}
.yd-list-other {
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: end;
    -webkit-align-items: flex-end;
    -ms-flex-align: end;
    align-items: flex-end;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    color: #999;
}

</style>