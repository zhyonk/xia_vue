<template>
 <div  >
<!-- <swiper :list="demo03_list" auto style="width:100%;margin:0 auto;" height="200px" dots-class="custom-bottom" dots-position="center"> </swiper>-->
<!-- <swiper :list="demo02_list" style="width:85%;margin:0 auto;" :aspect-ratio="300/800" dots-position="center"></swiper> -->
 <swiper :list="demo01_list" v-model="demo02_index" :min-moving-distance="150" @on-index-change="demo01_onIndexChange"></swiper>
    

    <div>
      <sticky
        ref="sticky"
        :check-sticky-support="false"
        :disabled="disabled">
<!--         <tab :line-width="1">
          <tab-item selected>正在正映</tab-item>
          <tab-item>即将上映</tab-item>
        </tab> -->
        <div class="barberList_storeInfo">
          <div class="container">
          <div class="img am-clickable"><img style="background-color: rgb(204, 204, 204);" :src="shopImg"></div>
          <a class="call" :href="shopHrefTel"></a>
          <div class="content">
            <!-- <div class="name">{{ shopName }}</div> -->
            <div class="adress">{{ shopAddress }}</div>
            <div class="tel">{{shopPhone}}</div>
          </div>
          </div>
          <div class="barberList_bg"></div>
        </div>

      </sticky>
    </div>
    <div class="barberList_ul1"><li class="am-clickable">
<div class="l1">
  <div class="img am-clickable"><img style="background-color: rgb(204, 204, 204);" src="http://resourcemyk.meiguanjia.net//artisan/176810/2604124_s.jpg?t=1528889398731"></div>
  <div class="name">阿洛</div>
  <div class="level">设计师</div>
  <div class="price_label" style="display: block;">
    <span class="label">剪发价</span>
    <span class="price">￥<strong>48</strong></span>
  </div>
  </div>
  <div class="l2">
  <div class="reservation_btn am-clickable">预约</div>
  <div class="tags" style="display: block;">点击头像可以了解更多信息哦~</div>
  <div class="numbers">
  <div class="comment">
  <div class="n">好评率:
     <span class="num">100%</span>
  </div>
  </div>
  <div class="rvCount">
  <div class="n">已被约:
    <span class="num">25</span>
  </div>
  </div>
  <div class="archiveCount">
  <div class="n">作品集:
  <span class="num">0</span>
  </div>
  </div>
  </div>
  </div>
  </li><li class="am-clickable">
  <div class="l1">
  <div class="img am-clickable"><img style="background-color: rgb(204, 204, 204);" src="http://resourcemyk.meiguanjia.net//artisan/176810/2748754_s.jpg?t=1533819967372"></div>
  <div class="name">梦豪</div>
  <div class="level">高级美容师</div>
  <div class="price_label" style="display: none;">
  <span class="label">剪发价</span>
  <span class="price">￥
  <strong></strong>
  </span>
  </div>
  </div>
  <div class="l2">
  <div class="reservation_btn am-clickable">预约</div>
  <div class="tags" style="display: block;">点击头像可以了解更多信息哦~</div>
  <div class="numbers">
  <div class="comment">
  <div class="n">好评率:
  <span class="num">--</span>
  </div>
  </div>
  <div class="rvCount">
  <div class="n">已被约:
  <span class="num">6</span>
  </div>
  </div>
  <div class="archiveCount">
  <div class="n">作品集:
  <span class="num">0</span>
  </div>
  </div>
  </div>
  </div>
  </li><li class="am-clickable">
  <div class="l1">
  <div class="img am-clickable"><img style="background-color: rgb(204, 204, 204);" src="http://resourcemyk.meiguanjia.net//artisan/176810/2249914_s.jpg?t=1514368630461"></div>
  <div class="name">可晴</div>
  <div class="level">高级美容师</div>
  <div class="price_label" style="display: none;">
  <span class="label">剪发价</span>
  <span class="price">￥
  <strong></strong>
  </span>
  </div>
  </div>
  <div class="l2">
  <div class="reservation_btn am-clickable">预约</div>
  <div class="tags" style="display: block;">点击头像可以了解更多信息哦~</div>
  <div class="numbers">
  <div class="comment">
  <div class="n">好评率:
  <span class="num">--</span>
  </div>
  </div>
  <div class="rvCount">
  <div class="n">已被约:
  <span class="num">29</span>
  </div>
  </div>
  <div class="archiveCount">
  <div class="n">作品集:
  <span class="num">2</span>
  </div>
  </div>
  </div>
  </div>
  </li><li class="am-clickable">
  <div class="l1">
  <div class="img am-clickable"><img style="background-color: rgb(204, 204, 204);" src="http://resourcemyk.meiguanjia.net//artisan/176810/2249913_s.jpg?t=1532159144838"></div>
  <div class="name">筱曼</div>
  <div class="level">美容经理</div>
  <div class="price_label" style="display: none;">
  <span class="label">剪发价</span>
  <span class="price">￥
  <strong></strong>
  </span>
  </div>
  </div>
  <div class="l2">
  <div class="reservation_btn am-clickable">预约</div>
  <div class="tags" style="display: block;">点击头像可以了解更多信息哦~</div>
  <div class="numbers">
  <div class="comment">
  <div class="n">好评率:
  <span class="num">--</span>
  </div>
  </div>
  <div class="rvCount">
  <div class="n">已被约:
  <span class="num">37</span>
  </div>
  </div>
  <div class="archiveCount">
  <div class="n">作品集:
  <span class="num">6</span>
  </div>
  </div>
  </div>
  </div>
  </li><li class="am-clickable">
  <div class="l1">
  <div class="img am-clickable"><img style="background-color: rgb(204, 204, 204);" src="http://resourcemyk.meiguanjia.net//artisan/176810/1692246_s.jpg?t=1493394437422"></div>
  <div class="name">5号阿文</div>
  <div class="level">首席</div>
  <div class="price_label" style="display: block;">
  <span class="label">剪发价</span>
  <span class="price">￥<strong>78</strong></span>
  </div>
  </div>
  <div class="l2">
  <div class="reservation_btn am-clickable">预约</div>
  <div class="tags" style="display: block;">点击头像可以了解更多信息哦~</div>
  <div class="numbers">
  <div class="comment">
  <div class="n">好评率:
  <span class="num">100%</span>
  </div>
  </div>
  <div class="rvCount">
  <div class="n">已被约:
  <span class="num">296</span>
  </div>
  </div>
  <div class="archiveCount">
  <div class="n">作品集:
  <span class="num">3</span>
  </div>
  </div>
  </div>
  </div>
  </li><li class="am-clickable">
  <div class="l1">
  <div class="img am-clickable"><img style="background-color: rgb(204, 204, 204);" src="http://resourcemyk.meiguanjia.net//artisan/176810/2748744_s.jpg?t=1532158909115"></div>
  <div class="name">梦婷</div>
  <div class="level">高级美容师</div>
  <div class="price_label" style="display: none;">
  <span class="label">剪发价</span>
  <span class="price">￥
  <strong></strong>
  </span>
  </div>
  </div>
  <div class="l2">
  <div class="reservation_btn am-clickable">预约</div>
  <div class="tags" style="display: block;">点击头像可以了解更多信息哦~</div>
  <div class="numbers">
  <div class="comment">
  <div class="n">好评率:
  <span class="num">--</span>
  </div>
  </div>
  <div class="rvCount">
  <div class="n">已被约:
  <span class="num">25</span>
  </div>
  </div>
  <div class="archiveCount">
  <div class="n">作品集:
  <span class="num">0</span>
  </div>
  </div>
  </div>
  </div>
  </li><li class="am-clickable">
  <div class="l1">
  <div class="img am-clickable"><img style="background-color: rgb(204, 204, 204);" src="http://resourcemyk.meiguanjia.net//artisan/176810/1983554_s.jpg?t=1492949367541"></div>
  <div class="name">9号陈坤</div>
  <div class="level">设计师</div>
  <div class="price_label" style="display: block;">
  <span class="label">剪发价</span>
  <span class="price">￥<strong>48</strong></span>
  </div>
  </div>
  <div class="l2">
  <div class="reservation_btn am-clickable">预约</div>
  <div class="tags">
  <span class="tag">日系潮流发型</span><span class="tag">男士复古油头</span></div>
  <div class="numbers">
  <div class="comment">
  <div class="n">好评率:
  <span class="num">80%</span>
  </div>
  </div>
  <div class="rvCount">
  <div class="n">已被约:
  <span class="num">99</span>
  </div>
  </div>
  <div class="archiveCount">
  <div class="n">作品集:
  <span class="num">1</span>
  </div>
  </div>
  </div>
  </div>
  </li><li class="am-clickable">
  <div class="l1">
  <div class="img am-clickable"><img style="background-color: rgb(204, 204, 204);" src="http://resourcemyk.meiguanjia.net//artisan/176810/1824901_s.jpg?t=1498533905429"></div>
  <div class="name">Gary</div>
  <div class="level">首席</div>
  <div class="price_label" style="display: block;">
  <span class="label">剪发价</span>
  <span class="price">￥<strong>78</strong></span>
  </div>
  </div>
  <div class="l2">
  <div class="reservation_btn am-clickable">预约</div>
  <div class="tags">
  <span class="tag">风格定制分析</span><span class="tag">酷感短发</span><span class="tag">韩式发型</span><span class="tag">各种网红造型摄影</span></div>
  <div class="numbers">
  <div class="comment">
  <div class="n">好评率:
  <span class="num">100%</span>
  </div>
  </div>
  <div class="rvCount">
  <div class="n">已被约:
  <span class="num">205</span>
  </div>
  </div>
  <div class="archiveCount">
  <div class="n">作品集:
  <span class="num">3</span>
  </div>
  </div>
  </div>
  </div>
  </li><li class="am-clickable">
  <div class="l1">
  <div class="img am-clickable"><img style="background-color: rgb(204, 204, 204);" src="http://resourcemyk.meiguanjia.net//artisan/176810/1692236_s.jpg?t=1494074077054"></div>
  <div class="name">阿奇</div>
  <div class="level">总监</div>
  <div class="price_label" style="display: block;">
  <span class="label">剪发价</span>
  <span class="price">￥<strong>118</strong></span>
  </div>
  </div>
  <div class="l2">
  <div class="reservation_btn am-clickable">预约</div>
  <div class="tags">
  <span class="tag">短发王子</span><span class="tag">人物发型风格设计专家</span></div>
  <div class="numbers">
  <div class="comment">
  <div class="n">好评率:
  <span class="num">100%</span>
  </div>
  </div>
  <div class="rvCount">
  <div class="n">已被约:
  <span class="num">463</span>
  </div>
  </div>
  <div class="archiveCount">
  <div class="n">作品集:
  <span class="num">2</span>
  </div>
  </div>
  </div>
  </div>
  </li>
  </div>
  </div>
</template>


<script>
import { ViewBox, Tabbar, TabbarItem, Group, Cell, XHeader, Sticky, Tab, TabItem, Swiper } from 'vux'
import store from '@/store/store'
import * as types from '@/store/types'
import axios from '../axios/https.js'

const baseList = [{
  url: 'javascript:',
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
  title: '送你一朵fua'
}, {
  url: 'javascript:',
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
  title: '送你一辆车'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/5.jpg', // 404
  title: '送你一次旅行',
  fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
}]
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
    Swiper
  },
  data () {
    return {
      // showSpace: false,
      disabled: typeof navigator !== 'undefined' && /iphone/i.test(navigator.userAgent) && /ucbrowser/i.test(navigator.userAgent),
      demo01_list: baseList,
      shopName: '',
      shopAddress: '',
      shopPhone: '',
      shopHrefTel: '',
      shopImg: '',
      demo02_index: 1
    }
  },
  mounted: function () {
    var shopInfo = sessionStorage.getItem('shopInfo')
    shopInfo = JSON.parse(shopInfo)
    if (shopInfo) {
      console.log(shopInfo.shopName)
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
        console.log(response.data)
        var menuObj = response.data.data.menu
        sessionStorage.setItem('menu', JSON.stringify(menuObj))
        console.log(menuObj)
        return menuObj
      }).catch(function (error) {
        console.log(error)
      })
      var bannerList = store.getters.bannerList
      console.log('store.bannerList: ' + bannerList)
      if (bannerList === '' || bannerList == null) {
        axios.get('/menu/getBannerList', {params: {openid: this.$route.query.openid}}, {headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }}).then(function (response) {
          console.log(response.data)
          var bannerListObj = response.data.data.bannerList
          store.commit(types.BANNER, JSON.stringify(bannerListObj))
          console.log(bannerListObj)
          var str = bannerListObj
          var jsonStr = str
          var arr = []
          this.sort(jsonStr)
          for (var p in jsonStr) { // 遍历json数组时，这么写p为索引，0,1
            var type = jsonStr[p].type
            if (type === 2) {
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
            console.log(arr)
            this.baseList = arr
          }
        }).catch(function (error) {
          console.log(error)
        })
      }
    }
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
</style>