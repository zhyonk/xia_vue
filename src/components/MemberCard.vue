<template>
<div>
  <x-header>我的会员卡</x-header>
  <div v-show="isShow">
    <div class="am-page-empty class-fullcenter am-clickable" style="display: block;">
      <div>
      <!-- <img class="background" src="../assets/images/card_space.png"> -->
      <p>您目前没有任何
      <em class="v4_myCard">会员卡</em>，轻触屏幕可查看
      <em class="v4_myCard">会员卡</em>类型</p>
      </div>
    </div>
  </div>
  <div class="cardList">
    <li class ="card">
      <div class="content">
      <!-- <img src="../assets/images/hua.png" /> -->
      <p class="center">
        <img src="http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqNeOZ9Nibv3jTRXZsvtlsILiazVXhGLicLa6emMCgx9X2DY0rjqQmicOGD3ly0p1LIedyfoXGYcPPSqA/132">
      </p>
      <h1 class="cardTypeName">我的会员卡</h1>
      </div>
    </li>
  </div>
</div>

</template>

<script>
// import net from '../utils/net'
import axios from '../axios/https.js'
import { XHeader } from 'vux'
// import auth from '../aouth/auth'
import store from '@/store/store'
import * as types from '@/store/types'
// import { Button, Cell } from 'vant'

export default {
  components: {
    XHeader
  },
  data () {
    return {
      error: '',
      isShow: true
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
  background-color:red;
  list-style:none;
  margin-top: 8px;
  margin-left: 8px;
  margin-right: 8px;
  height: 10%;
  border-radius: 10px; 
  -webkit-box-shadow: 3px 3px 6px #666; 
  -moz-box-shadow: 3px 3px 6px #666; 
  box-shadow: 3px 3px 6px #666; 
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
.center img {
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
    margin: 0 88px;
    height: 40px;
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 40px;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    color: #fff;
}

</style>
