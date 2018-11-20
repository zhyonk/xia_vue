<template>
  <div>
    <div class="am-page page_barberDetail am-touchable"
         id="page_barberDetail"
         style="display: block; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);">
      <div class="am-body-wrap am-touchable"
           style="top: 0px; bottom: 41px;">
        <div class="am-body-inner"
             style="transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);">
          <div class="barberDetail_base"
               style="height: 337px;">
            <div class="blurwrap">
              <div class="blur"
                   style="background: url(http://resource.meiguanjia.net//artisan/176810/2604124_l.jpg) no-repeat center center;background-size: cover;"></div>
            </div>
            <div class="am-header">
              <div class="am-clickable am-backbutton button left">
                <div class="backIcon"></div>
              </div>
              <div class="am-clickable button right share"
                   style="display: none;">
                <div class="shareIcon"></div>
              </div>
              <p>阿洛</p>
            </div>
            <div class="barberImgWrap">
              <div class="img barberImg"><img style="background-color: rgb(204, 204, 204);"
                     src="http://resource.meiguanjia.net//artisan/176810/2604124_s.jpg"></div>
            </div>
            <ul class="textwrap"></ul>
            <div class="barberbottom"></div>
          </div>
          <div class="barberDetail_text">
            <div class="name">阿洛</div>
            <div class="level">设计师</div>
            <div class="price">剪发价:<strong>￥48</strong></div>
          </div>
          <div class="barberDetail">
            <div class="comment_desc">
              <div class="comment_desc_view am-clickable">现在还没有个人介绍！</div>
            </div>
            <div class="actions">
              <div class="archiveTimes">
                <span class="num">1组</span>
                <div class="text">作品</div>
              </div>
              <div class="reservationTimes">
                <span class="num">69次</span>
                <div class="text">被约</div>
              </div>
              <div class="rewardTimes">
                <span class="num">2</span>
                <div class="text">打赏</div>
              </div>
              <div class="reservationRate">
                <span class="num">100%</span>
                <div class="text">好评率</div>
              </div>
            </div>
          </div>
          <div class="addresstel">
            <div class="addresstelinner">
              <p class="top">丝奔国际丝奔国际蓝郡店</p>
              <p class="bottom">古墩路蓝郡11号商铺</p>
              <a href="tel:86142316"
                 class="telbtn am-clickable"></a>
            </div>
          </div>
          <div class="reservation_today am-clickable">
            <div class="reservation_todayinner">
              <p class="tit">今日预约情况</p>
              <div class="today_wrap">
                <p class="today_num">已有
                  <span>0</span>人预约</p>
                <ul>
                  <li class="rightgo"></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="barberDetail_box archive_box am-clickable">
            <div class="tit">
              <p>TA的作品</p>
              <a href="javascript:;"
                 class="am-clickable tit_right"
                 style="display: none;">更多作品</a>
            </div>
            <div class="cont">
              <ul class="clearfix">
                <div class="text">TA没有发布任何作品</div>
              </ul>
            </div>
          </div>
          <div class="barberDetail_box comment_box">
            <div class="greydiv"></div>
            <div class="tit am-clickable">
              <p>顾客评价</p>
              <a href="javascript:;"
                 class="am-clickable tit_right">3条</a>
            </div>
            <div class="greydiv"></div>
          </div>
          <div class="am-support"></div>
        </div>
      </div>
    </div>
    <div v-transfer-dom>
      <popup v-model="reservePane">
        <div class="popup2">
          <van-tabs v-model="active"
                    swipeable>
            <van-tab v-for="index in 3"
                     :key="index"
                     :title="'选项 ' + index"
                     type="line">
              <div class="reservation_timeArea">
                <checker default-item-class="timeBtn"
                         selected-item-class="selected"
                         disabled-item-class="timepassed">
                  <div class="timeHead">
                    <div class="text">上午</div>
                  </div>

                  <div class="timeList">
                    <ul>
                      <li>
                        <checker-item value='10:00'
                                      @on-item-click="onItemClick">10:00</checker-item>
                      </li>
                      <li>
                        <checker-item value='10:30'
                                      @on-item-click="onItemClick">10:30</checker-item>
                      </li>
                      <li>
                        <checker-item value='11:00'
                                      @on-item-click="onItemClick">11:00</checker-item>
                      </li>
                      <li>
                        <checker-item value='11:30'
                                      @on-item-click="onItemClick">11:30</checker-item>
                      </li>
                      <li>
                        <checker-item value='12:00'
                                      @on-item-click="onItemClick">12:00</checker-item>
                      </li>
                      <li>
                        <checker-item value='12:30'
                                      @on-item-click="onItemClick">12:30</checker-item>
                      </li>
                    </ul>

                    <div class="clear"></div>
                  </div>
                  <div class="timeHead">
                    <div class="text">下午</div>
                  </div>
                  <div class="timeList">
                    <ul>
                      <li>
                        <checker-item value='13:00'
                                      @on-item-click="onItemClick">13:00</checker-item>
                      </li>
                      <li>
                        <checker-item value='13:30'
                                      @on-item-click="onItemClick">13:30</checker-item>
                      </li>
                      <li>
                        <checker-item value='14:00'
                                      @on-item-click="onItemClick">14:00</checker-item>
                      </li>
                      <li>
                        <checker-item value='14:30'
                                      @on-item-click="onItemClick">14:30</checker-item>
                      </li>
                      <li>
                        <checker-item value='15:00'
                                      @on-item-click="onItemClick">15:00</checker-item>
                      </li>
                      <li>
                        <checker-item value='15:30'
                                      @on-item-click="onItemClick">15:30</checker-item>
                      </li>
                      <li>
                        <checker-item value='16:00'
                                      @on-item-click="onItemClick">16:00</checker-item>
                      </li>
                      <li>
                        <checker-item value='16:30'
                                      @on-item-click="onItemClick">16:30</checker-item>
                      </li>
                      <li>
                        <checker-item value='17:00'
                                      @on-item-click="onItemClick">17:00</checker-item>
                      </li>
                      <li>
                        <checker-item value='17:30'
                                      @on-item-click="onItemClick">17:30</checker-item>
                      </li>
                    </ul>
                    <div class="clear"></div>
                  </div>
                  <div class="timeHead">
                    <div class="text">晚上</div>
                  </div>
                  <div class="timeList">
                    <ul>
                      <li>
                        <checker-item value='18:00'
                                      @on-item-click="onItemClick">18:00</checker-item>
                      </li>
                      <li>
                        <checker-item value='18:30'
                                      @on-item-click="onItemClick">18:30</checker-item>
                      </li>
                      <li>
                        <checker-item value='19:00'
                                      @on-item-click="onItemClick">19:00</checker-item>
                      </li>
                      <li>
                        <checker-item value='19:30'
                                      @on-item-click="onItemClick">19:30</checker-item>
                      </li>
                      <li>
                        <checker-item disabled
                                      value='20:00'
                                      @on-item-click="onItemClick">20:00</checker-item>
                      </li>
                      <li>
                        <checker-item value='20:30'
                                      @on-item-click="onItemClick">20:30</checker-item>
                      </li>
                    </ul>
                    <div class="clear"></div>
                  </div>
                </checker>
              </div>
            </van-tab>
          </van-tabs>
        </div>
        <van-submit-bar button-text="立即预约"
                        @submit="onSubmit">
          <span style="padding-left: 50px;">
            您预约的时间为:
            <span style="color: #ff2146;">{{leftText}}</span>
          </span>
        </van-submit-bar>
      </popup>
    </div>
    <van-goods-action>
      <van-goods-action-big-btn text="打赏"
                                @click="onClickBigBtn" />
      <van-goods-action-big-btn text="预约"
                                primary
                                @click.native="reservePane = true" />
    </van-goods-action>
    <toast v-model="timeReserved"
           @on-hide="onHide"
           type="text"
           width="20em">{{clickTime}}已经被预约</toast>
  </div>

</template>

<style lang="less">
@import url('./less/reserveDetail.less');
</style>
<script>
// import net from '../utils/net'
// import { XHeader,Tabbar, TabbarItem,Popup,TransferDom,Tab,TabItem,Toast } from 'vux'
// import auth from '../aouth/auth'
import { XHeader,Tabbar, TabbarItem,Popup,TransferDom,Toast,dateFormat,Checker,CheckerItem } from 'vux'
import store from '@/store/store'
import * as types from '@/store/types'
// import { Button, Cell } from 'vant'
import axios from '../axios/https.js'
import router from '../router/router.js'
// import VueQArt from 'vue-qart'
import QRCode from 'qrcodejs2'
import Vue from 'vue'
import { SubmitBar,GoodsAction,GoodsActionBigBtn,GoodsActionMiniBtn,Tab, Tabs } from 'vant';
Vue.use(SubmitBar)
   .use(GoodsAction)
   .use(GoodsActionBigBtn)
   .use(GoodsActionMiniBtn)
   .use(Tab)
   .use(Tabs)

export default {
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    QRCode,
    Tabbar, 
    TabbarItem,
    Popup,
    Toast,
    dateFormat,
    Checker,
    CheckerItem
  },
  data () {
    return {
      isHide:true,
      reservePane:false,
      active: 2,
      demo5:1,
      timeReserved:false,
      clickTime:'_ _:_ _',
      leftText:'_ _:_ _'
    }
  },
  mounted: function () {
    var tab = document.getElementById('bottomTab')
    tab.style.visibility="hidden"
    console.log(new Date())
    console.log(dateFormat(new Date(), 'MM/DD'))
  },
  methods: {
    onHide () {
      console.log('on hide')
    },
    onSubmit(){
      console.log("click")
    },
    onClickMiniBtn() {
      Toast('点击图标');
    },
    onClickBigBtn() {
      Toast('点击按钮');
    },
    onItemClick (value, disabled) {
      this.clickTime = value
      this.leftText = value
      console.log(value, disabled)
      if (disabled) {
        this.timeReserved = true
        this.leftText = '_ _:_ _'
      }
    }
    
  }
}
</script>

<style>
.popup2 {
  padding-bottom:15px;
  height:500px;
}
.theme1 {
    color: #222;
}
.reservation_timeArea .timeHead {
    height: 25px;
    position: relative;
    text-align: center;
}
.reservation_timeArea .text {
    line-height: 28px;
    height: 40px;
    width: 40px;
    background: #fff;
    color: #bbb;
    font-size: 11px;
    display: inline-block;
    border-radius: 50px 50px 0 0;
    border-top: #e5e5e5 1px solid;
    position: absolute;
    top: 5px;
    left: 50%;
    margin-left: -20px;
}
.reservation_timeArea .timeList {
    background: #fff;
    padding: 10px 0 0 0;
    border-top: #e5e5e5 1px solid;
}
body {
    font-family: Helvetica,"微软雅黑","华文细黑","黑体";
    font-size: 14px;
    background: #fff;
    color: #555;
}
ul {
  list-style: none;
    margin: 0;
    padding: 0;
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
}
.reservation_timeArea .timeList li {
    float: left;
    width: 25%;
    margin-bottom: 10px;
    list-style: none;
}
.reservation_timeArea .timeList .timeBtn.timepassed {
    color: #bbb;
    background-color: #eee;
    border-color: #eee;
}

.reservation_timeArea .timeList .timeBtn {
    height: 30px;
    margin: 0 10px;
    text-align: center;
    line-height: 30px;
    border: 1px solid #ddd;
    background: #fff;
    border-radius: 30px;
    font-size: 12px;
    position: relative;
}
.clear {
    clear: both;
}
.reservation_timeArea .timeHead {
    height: 25px;
    position: relative;
    text-align: center;
}
.reservation_timeArea .text {
    line-height: 28px;
    height: 40px;
    width: 40px;
    background: #fff;
    color: #bbb;
    font-size: 11px;
    display: inline-block;
    border-radius: 50px 50px 0 0;
    border-top: #e5e5e5 1px solid;
    position: absolute;
    top: 5px;
    left: 50%;
    margin-left: -20px;
}
.reservation_timeArea .timeList .timeBtn.selected{
  border-color: #ff2146;
}
.reservation_timeArea .timeList .timeBtn.selected {
    border-color: #ff2146;
    background: #ff2146;
    color: #fff;
}
.reservation_timeArea .timeList .timeBtn {
    height: 30px;
    margin: 0 10px;
    text-align: center;
    line-height: 30px;
    border: 1px solid #ddd;
    background: #fff;
    border-radius: 30px;
    font-size: 12px;
    position: relative;
    display: block;
}
.reservation_timeArea .timeList .timeBtn.selected::after {
    content: "";
    height: 15px;
    width: 15px;
    background: url(../assets/uploads/reservation_choose.png) no-repeat center center;
    background-size: contain;
    position: absolute;
    right: -7px;
    bottom: -4px;
}
.van-submit-bar__price {
    display: none;
}
</style>
