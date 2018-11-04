<template>
<div>
  <x-header>我的会员卡</x-header>
  <!-- <div class="am-page-empty class-fullcenter am-clickable" style="display: block;">
    <div>
    <img src="../assets/images/card_space.png">
    <p>您目前没有任何
    <em class="v4_myCard">会员卡</em>，轻触屏幕可查看
    <em class="v4_myCard">会员卡</em>类型</p>
    </div>
  </div> -->
  <div class="wps" style="display: block;"> 
    <figure>
      <span class="span_img"> 
        <img class="headImage" src="http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqNeOZ9Nibv3jTRXZsvtlsILiazVXhGLicLa6emMCgx9X2DY0rjqQmicOGD3ly0p1LIedyfoXGYcPPSqA/132">
        <img  src="../assets/images/card_bg_01.png"> 
            <div class="ar_btn_left02" @click="backPre"></div>
            <div class="logo_u01"></div>
            <div class="price">
                <h3>会员卡号:{{cardNumber}}</h3>
            </div>
      </span>
    </figure> 
    <div class="card_cm">
        <span class="card_mod" >
          <i></i>
          <!-- <vue-q-art class="qcimg" :config="config" :downloadButton="downloadButton"></vue-q-art> -->
          <div id="qrcode" ref="qrcode"></div>
          </span>
          <ul>
           <a href="carduser.html">
            <li>
                <em>¥</em>会员储值卡余额 ¥{{balance}}
                <i></i>
            </li>
            </a>
            <li>
                <em>惠</em>会员日特价优惠活动进行中
               <i>
               </i>
            </li>
          </ul>
    </div>
  </div>
  <br/>
  <br/>
  <br/>
</div>

</template>

<script>
// import net from '../utils/net'
import { XHeader } from 'vux'
// import auth from '../aouth/auth'
import store from '@/store/store'
import * as types from '@/store/types'
// import { Button, Cell } from 'vant'
import axios from '../axios/https.js'
import router from '../router/router.js'
// import VueQArt from 'vue-qart'
import QRCode from 'qrcodejs2'

export default {
  components: {
    XHeader,
    // VueQArt,
    QRCode
  },
  data () {
    return {
      error: '',
      cardNumber: '',
      imgsrc: null,
      balance: ''
    }
  },
  mounted: function () {
    this.cardNumber = this.$route.params.cardNumber
    this.qrcoder(this.$route.params.cardNumber)
    this.getMemberCard()
  },
  methods: {
    backPre () {
      router.go(-1)
    },
    getMemberCard () {
      var _this = this
      axios.get('/user/getMemberCardByNumber', {params: {number: this.$route.params.cardNumber}}, {headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }}).then(function (response) {
        var memberCardInfo = response.data.data.memberCardInfo
        console.log('memberCardInfo:' + memberCardInfo.length)
        if (memberCardInfo != null && memberCardInfo !== '') {
          store.commit(types.MEMBERCARDINFO, memberCardInfo)
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
          console.log('info: ' + memberCardInfo)
          _this.balance = memberCardInfo.remainderPrice
          return memberCardInfo
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    qrcoder (number) {
      let qrcode = new QRCode('qrcode', {
        width: 150,
        height: 150,
        text: number
      })
      this.imgsrc = qrcode
      console.log(qrcode)
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
figure span.span_img {
    display: block;
    position: relative;
}
figure span img {
    width: 100%;
}
.wps {
    display: block;
    width: 320px;
    width: 100%;
    margin: 0 auto;
}
figure {
    display: block;

}
.ar_btn_left02 {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 15px;
    left: 20px;
    background: url(../assets/images/ar-left02.png) no-repeat;
    background-size: 25px 25px;
}
.logo_u01 {
    width: 108px;
    height: 20px;
    -webkit-box-sizing: border-box;
    position: absolute;
    top: 20px;
    right: 20px;
    background: url(../assets/images/logo_u01.png) no-repeat;
    background-size: 108px 20px;
}
.price {
    font-size: 14px;
    color: #fff;
    padding: 10px 15px;
    -webkit-box-sizing: border-box;
    position: absolute;
    bottom: 0px;
    left: 0px;
}
.card_cm {
    margin: 0 10px 20px 10px;
    min-width: 300px;
    overflow: hidden;
}
.card_cm .card_mod {
    display: block;
    background: #fff;
    border-radius: 0 0 3px 3px;
    -moz-border-radius: 0 0 3px 3px;
    -webkit-border-radius: 0 0 3px 3px;
    border: 1px solid #ddd;
    border-top: 0;
    min-width: 220px;
    padding: 25px 39px;
    overflow: hidden;
    position: relative;
    height: 150px;
}
.card_cm .card_mod i {
    display: block;
    position: absolute;
    right: 0px;
    bottom: 0px;
    width: 30px;
    height: 30px;
    background: url(../assets/images/ewm_tip.png) no-repeat;
    background-size: 30px 30px;
}
.qcimg {
    width: 100%;
    border: 0;
}
a {
    color: #000;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.3);
}
.card_cm ul li {
    display: block;
    position: relative;
    min-width: 278px;
    border: 1px solid #ddd;
    border-radius: 3px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    height: 30px;
    line-height: 30px;
    background: #fff;
    margin-top: 10px;
    vertical-align: top;
    padding: 10px;
    font-size: 14px;
    color: #333;
}
.card_cm ul li em {
    display: inline-block;
    float: left;
    width: 30px;
    height: 30px;
    font-style: normal;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    color: #fff;
    background: #539608;
    margin-right: 5px;
    border-radius: 3px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
}
.card_cm ul li i {
    width: 8px;
    height: 14px;
    display: block;
    position: absolute;
    top: 18px;
    right: 10px;
    background: url(../assets/images/card-cm-right.png) no-repeat;
    background-size: 8px 14px;
}
.headImage {
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid #ececec;
  top: 20%;
  left: 30%;
}
#qrcode{
    position: absolute;
    top: 10%;
    left: 30%;
}
</style>
