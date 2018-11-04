<template>
<div>
  <x-header>会员卡列表</x-header>
  <div class="cardList">
   <van-loading v-show="loadCardList" style="margin:auto"/>
    <li class ="card" v-for="item in cardListInfo" :key="item.memberCardNumber" @click="item.detail" :style="{ 'background-color': item.memberCardTypeColor }">
      <div class="content">
      <div class="center">
        <h1 class="cardTypeName">{{item.memberCardTypeName}}</h1>
        <img class="headImage" src="http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqNeOZ9Nibv3jTRXZsvtlsILiazVXhGLicLa6emMCgx9X2DY0rjqQmicOGD3ly0p1LIedyfoXGYcPPSqA/132">
        <h1 class="discount">{{item.discounts}}折</h1>
        <h1 class="remainder">余额 ：{{item.remainderPrice}}</h1>
        <h1 class="deadline">过期时间：2018-10-30</h1>
      </div>
      </div>
    </li>
    
  </div>
</div>

</template>

<script>
// import net from '../utils/net'
import axios from '../axios/https.js'
import { XHeader, CellBox, Cell, Group } from 'vux'
// import auth from '../aouth/auth'
import store from '@/store/store'
import * as types from '@/store/types'
// import { Button, Cell } from 'vant'
import utils from '../utils/utils.js'
import { Loading } from 'vant'
import Vue from 'vue'
import router from '../router/router.js'
Vue.use(Loading)

export default {
  components: {
    XHeader,
    CellBox,
    Cell,
    Group
  },
  data () {
    return {
      error: '',
      isShow: true,
      loadCardList: true,
      cardListInfo: []
    }
  },
  mounted: function () {
    // 设置
    // 设置
    var info = this.getMemberCard()
    this.cardListInfo = info
    if (info != null && info !== '') {
      this.loadCardList = false
      this.cardCount = '查看全部(' + info.length + ')'
    }
    var memberCardInfo = info
    console.log('Info1: ' + memberCardInfo)
    if (memberCardInfo == null) {
      console.log('memberCardInfo: not show')
      this.isShow = false
    } else {
      console.log('memberCardInfo: show')
      this.isShow = true
    }
  },
  methods: {
    getMemberCard () {
      var _this = this
      axios.get('/user/getMemberCard', {params: {openId: sessionStorage.getItem('openid')}}, {headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }}).then(function (response) {
        var memberCardInfo = response.data.data.memberCardInfo
        console.log('memberCardInfo:' + memberCardInfo.length)
        if (memberCardInfo != null && memberCardInfo !== '') {
          store.commit(types.MEMBERCARDINFO, memberCardInfo)
          for (var i in memberCardInfo) {
            memberCardInfo[i].deadline = utils.formatDate(new Date(memberCardInfo[i].deadline))
            memberCardInfo[i].detail = function () {
              router.push('/mcardDetail/' + memberCardInfo[i].memberCardNumber)
            }
          }
          _this.cardListInfo = memberCardInfo
          if (memberCardInfo != null && memberCardInfo !== '') {
            _this.loadCardList = false
            _this.cardCount = '查看全部(' + memberCardInfo.length + ')'
          }
          console.log('Info1: ' + memberCardInfo)
          if (memberCardInfo == null) {
            console.log('memberCardInfo: not show')
            _this.isShow = false
          } else {
            console.log('memberCardInfo: show')
            _this.isShow = true
          }
          return memberCardInfo
        }
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>


<style>
.panel_container.memberCards .am-page-empty p {
    font-size: 12px;
    line-height: 20px;
}
.am-page-empty p {
    position: absolute;
    line-height: 50px;
    top: 45%;
    text-align: center;
    color: #aaa;
}
.class-fullcenter img{
    position: absolute;
    height: 150px;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.cardList{
  width: 100%;
}
.card{
  list-style:none;
  margin-top: 8px;
  margin-left: 8px;
  margin-right: 8px;
  height: 10%;
  border-radius: 10px; 
  -webkit-box-shadow: 3px 3px 6px #666; 
  -moz-box-shadow: 3px 3px 6px #666; 
  box-shadow: 3px 3px 6px #666; 
  margin-bottom: 10px
}
.card .background{
  position: absolute;
  width:auto;
  height:auto;
  max-width:50%;
  max-height:50%;
  bottom: 30px;
  right: 10px;
  transform: translate(-50%, -50%);
}
.content{
  height: 90px;
  width: 100%;
  position: relative;
}
.center {
  position: relative;
  text-align: center;
  color: #fff;
  font-size: 18px;
  height: 100%;
}
.headImage {
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 4px solid #ececec;
  top: 10%;
  left: 10%;
}
.cardTypeName {
   position: absolute;
    width: auto;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    color: #fff;
    margin:auto;
    display: block;
    left:70%;
    margin-left:-125px;
    top: 10%;
}
.discount{
   position: absolute;
    width: auto;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    color: #fff;
    margin:auto;
    display: block;
    left:70%;
    margin-left:25px;
    top: 30%;
}
.remainder{
   position: absolute;
    width: auto;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    color: #fff;
    margin:auto;
    display: block;
    left:70%;
    margin-left:-125px;
    top: 50%;
}
.deadline{
   position: absolute;
    width: auto;
    text-align: center;
    font-size: 10px;
    font-weight: 400;
    color: #c55d5d;
    margin:auto;
    display: block;
    left:50%;
    margin-left:70px;
    top: 70%;
    font-style: italic
}

</style>
