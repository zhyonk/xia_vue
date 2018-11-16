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
      <!-- <div class="am-placeholder reservationBtnGroup">
        <div class="rewardBtn am-clickable">打赏TA</div>
        <div class="reservation am-clickable">预约</div>
      </div> -->
    </div>
  </div>

</template>

<style lang="less">
@import url('./less/reserveDetail.less');
</style>
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
      isHide:true
    }
  },
  mounted: function () {
    console.log("tabbar: " + this.$refs.tabbar)
  },
  methods: {
  }
}
</script>

