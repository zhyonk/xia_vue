<template>
<div>
  <x-header>优惠卷列表</x-header>
  <!-- 优惠券列表 -->
    <van-coupon-list
      :coupons="coupons"
      :chosen-coupon="chosenCoupon"
      :disabled-coupons="disabledCoupons"
      @change="onChange"
      @exchange="onExchange"
    />
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
import { CouponCell, CouponList, Popup } from 'vant'
import Vue from 'vue'
Vue.use(CouponCell).use(CouponList).use(Popup)

const coupon = {
  available: 1,
  discount: 0,
  denominations: 150,
  originCondition: 0,
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000
}
export default {
  components: {
    XHeader,
    CellBox,
    Cell,
    Group,
    CouponCell,
    CouponList
  },
  data () {
    return {
      error: '',
      isShow: true,
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList: false
    }
  },
  mounted: function () {
    // 设置
    this.getMemberCard()
    var memberCardInfo = store.getters.memberCardInfo
    console.log('Info: ' + memberCardInfo)
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
      axios.get('/user/getMemberCard', {params: {openId: sessionStorage.getItem('openid')}}, {headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }}).then(function (response) {
        var memberCardInfo = response.data.data.memberCardInfo
        console.log(memberCardInfo)
        if (memberCardInfo != null && memberCardInfo !== '' && memberCardInfo.length !== 0) {
          store.commit(types.MEMBERCARDINFO, memberCardInfo)
          return memberCardInfo
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    onChange (index) {
      this.showList = false
      this.chosenCoupon = index
    },
    onExchange (code) {
      this.coupons.push(coupon)
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
.van-coupon-list__close {
    left: 0;
    bottom: 0;
    position: absolute;
    font-weight: 500;
    display: none;
}

</style>
