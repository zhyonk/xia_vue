<template>

    <div class="am-page page_archiveList am-touchable" id="page_archiveList" style="display: block; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);">
       <tab :line-width=2 active-color='#fc378c' v-model="index">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
      <swiper v-model="index" height="800px" :show-dots="false">
        <swiper-item v-for="(item, index) in list2" :key="index">
          <div class="tab-swiper vux-center">
            <div class="archiveList clearfix falls">
              <ul class="oddul clearfix">
                <li class="falls_tit">
                  <div class="falls_header">丽人库</div>
                  <div class="falls_con">或干练，或俏皮，或灵动，你是否真的找到了你自己~</div>
                  <div class="falls_nums">6</div></li>
                <li class="am-touchable">
                  <div class="userHeader normal_header am-clickable"></div>
                  <div class="rightContent am-clickable">
                    <div class="userName clearfix">
                      <span>陈坤</span></div>
                    <div class="line2 clearfix">
                      <span class="store">丝奔国际蓝郡店</span>
                      <span class="postTime">2017-09-10</span>
                      <span class="price">￥600</span></div>
                    <div class="text am-clickable">中卷短发加上栗色，充满活力</div>
                    <ul class="photos clearfix onlyOne">
                      <li class="am-clickable" style="width: auto; height: 197px;">
                        <img pid="5BC96D25-9B23-40CD-9AF2-B501154D805A.jpg" src="http://resourcemyk.meiguanjia.net//show/s1/176810/1983554/5BC96D25-9B23-40CD-9AF2-B501154D805A_m.jpg" style="background-color: rgb(204, 204, 204);"></li>
                    </ul>
                    <div class="falls_img">
                      <div class="userHeader falls_userHeader am-clickable">
                        <img width="100%" src="http://resourcemyk.meiguanjia.net//artisan/176810/1983554_s.jpg" style="background-color: rgb(204, 204, 204);"></div>
                    </div>
                    <div class="price_name">￥600</div>
                    <div class="text falls_text">中卷短发加上栗色，充满活力</div>
                    <div class="photonumbers" style="display: block;">
                      <span>1</span></div>
                    <div class="actions">
                      <div class="left">
                        <span class="am-clickable like">1</span>
                        <span class="am-clickable comments" style="display: none;">0</span>
                        <span class="am-clickable reward">打赏TA</span></div>
                      <div class="right">
                        <span class="am-clickable reseration">预约</span></div>
                    </div>
                    <div class="commentsList" style="display: none;"></div>
                  </div>
                </li>
                <li class="am-touchable">
                  <div class="userHeader normal_header am-clickable"></div>
                  <div class="rightContent am-clickable">
                    <div class="userName clearfix">
                      <span>阿奇</span></div>
                    <div class="line2 clearfix">
                      <span class="store">丝奔国际蓝郡店</span>
                      <span class="postTime">2017-06-29</span>
                      <span class="price">￥118</span></div>
                    <div class="text am-clickable">外柔内刚的清纯短发，后面的雕刻设计在生活...</div>
                    <ul class="photos clearfix">
                      <li class="am-clickable" style="width: auto; height: 197px;">
                        <img pid="8E682C86-FAFD-42F0-A17C-1518A7D9A7D6.jpg" src="http://resourcemyk.meiguanjia.net//show/s1/176810/1692236/8E682C86-FAFD-42F0-A17C-1518A7D9A7D6_m.jpg" style="background-color: rgb(204, 204, 204);"></li>
                      <li class="am-clickable" style="width: 140px; height: 140px; display: none;">
                        <img pid="979CF853-AC8B-445A-84F7-CC7EEFC3A0F2.jpg" src="http://resourcemyk.meiguanjia.net//show/s1/176810/1692236/979CF853-AC8B-445A-84F7-CC7EEFC3A0F2_m.jpg" style="background-color: rgb(204, 204, 204);"></li>
                    </ul>
                    <div class="falls_img">
                      <div class="userHeader falls_userHeader am-clickable">
                        <img width="100%" src="http://resourcemyk.meiguanjia.net//artisan/176810/1692236_s.jpg" style="background-color: rgb(204, 204, 204);"></div>
                    </div>
                    <div class="price_name">￥118</div>
                    <div class="text falls_text">外柔内刚的清纯短发，后面的雕刻设计在生活...</div>
                    <div class="photonumbers" style="display: block;">
                      <span>2</span></div>
                    <div class="actions">
                      <div class="left">
                        <span class="am-clickable like">0</span>
                        <span class="am-clickable comments" style="display: none;">0</span>
                        <span class="am-clickable reward">打赏TA</span></div>
                      <div class="right">
                        <span class="am-clickable reseration">预约</span></div>
                    </div>
                    <div class="commentsList" style="display: none;"></div>
                  </div>
                </li>
                <li class="am-touchable">
                  <div class="userHeader normal_header am-clickable"></div>
                  <div class="rightContent am-clickable">
                    <div class="userName clearfix">
                      <span>阿军</span></div>
                    <div class="line2 clearfix">
                      <span class="store">丝奔国际蓝郡店</span>
                      <span class="postTime">2017-04-27</span>
                      <span class="price">￥48</span></div>
                    <div class="text am-clickable">经典一刀切</div>
                    <ul class="photos clearfix onlyOne">
                      <li class="am-clickable" style="width: auto; height: 197px;">
                        <img pid="62889498-A13D-46FC-B737-5A11A309990B.jpg" src="http://resourcemyk.meiguanjia.net//show/s1/176810/2248247/62889498-A13D-46FC-B737-5A11A309990B_m.jpg" style="background-color: rgb(204, 204, 204);"></li>
                    </ul>
                    <div class="falls_img">
                      <div class="userHeader falls_userHeader am-clickable">
                        <img width="100%" src="http://resourcemyk.meiguanjia.net//artisan/176810/2248247_s.jpg" style="background-color: rgb(204, 204, 204);"></div>
                    </div>
                    <div class="price_name">￥48</div>
                    <div class="text falls_text">经典一刀切</div>
                    <div class="photonumbers" style="display: block;">
                      <span>1</span></div>
                    <div class="actions">
                      <div class="left">
                        <span class="am-clickable like">0</span>
                        <span class="am-clickable comments" style="display: none;">0</span>
                        <span class="am-clickable reward" style="display: none;">打赏TA</span></div>
                      <div class="right">
                        <span class="am-clickable reseration" style="display: none;">预约</span></div>
                    </div>
                    <div class="commentsList" style="display: none;"></div>
                  </div>
                </li>
              </ul>
              <ul class="eventul">
                <li class="am-touchable">
                  <div class="userHeader normal_header am-clickable"></div>
                  <div class="rightContent am-clickable">
                    <div class="userName clearfix">
                      <span>Gary</span></div>
                    <div class="line2 clearfix">
                      <span class="store">丝奔国际蓝郡店</span>
                      <span class="postTime">2017-09-11</span>
                      <span class="price">￥580</span></div>
                    <div class="text am-clickable">本身的头发颜色巧克力色就很好看 加上发尾...</div>
                    <ul class="photos clearfix onlyOne">
                      <li class="am-clickable" style="width: auto; height: 197px;">
                        <img pid="E3BD725D-5503-48D4-83BD-A01B27152013.jpg" src="http://resourcemyk.meiguanjia.net//show/s1/176810/1824901/E3BD725D-5503-48D4-83BD-A01B27152013_m.jpg" style="background-color: rgb(204, 204, 204);"></li>
                    </ul>
                    <div class="falls_img">
                      <div class="userHeader falls_userHeader am-clickable">
                        <img width="100%" src="http://resourcemyk.meiguanjia.net//artisan/176810/1824901_s.jpg" style="background-color: rgb(204, 204, 204);"></div>
                    </div>
                    <div class="price_name">￥580</div>
                    <div class="text falls_text">本身的头发颜色巧克力色就很好看 加上发尾...</div>
                    <div class="photonumbers" style="display: block;">
                      <span>1</span></div>
                    <div class="actions">
                      <div class="left">
                        <span class="am-clickable like">1</span>
                        <span class="am-clickable comments" style="display: none;">0</span>
                        <span class="am-clickable reward">打赏TA</span></div>
                      <div class="right">
                        <span class="am-clickable reseration">预约</span></div>
                    </div>
                    <div class="commentsList" style="display: none;"></div>
                  </div>
                </li>
                <li class="am-touchable">
                  <div class="userHeader normal_header am-clickable"></div>
                  <div class="rightContent am-clickable">
                    <div class="userName clearfix">
                      <span>阿奇</span></div>
                    <div class="line2 clearfix">
                      <span class="store">丝奔国际蓝郡店</span>
                      <span class="postTime">2017-06-29</span>
                      <span class="price">￥1098</span></div>
                    <div class="text am-clickable">自然的深亚麻烟灰色</div>
                    <ul class="photos clearfix onlyOne">
                      <li class="am-clickable" style="width: auto; height: 197px;">
                        <img pid="A5AED1EC-7649-4B6B-9710-1DD52F9B083C.jpg" src="http://resourcemyk.meiguanjia.net//show/s1/176810/1692236/A5AED1EC-7649-4B6B-9710-1DD52F9B083C_m.jpg" style="background-color: rgb(204, 204, 204);"></li>
                    </ul>
                    <div class="falls_img">
                      <div class="userHeader falls_userHeader am-clickable">
                        <img width="100%" src="http://resourcemyk.meiguanjia.net//artisan/176810/1692236_s.jpg" style="background-color: rgb(204, 204, 204);"></div>
                    </div>
                    <div class="price_name">￥1098</div>
                    <div class="text falls_text">自然的深亚麻烟灰色</div>
                    <div class="photonumbers" style="display: block;">
                      <span>1</span></div>
                    <div class="actions">
                      <div class="left">
                        <span class="am-clickable like">0</span>
                        <span class="am-clickable comments" style="display: none;">0</span>
                        <span class="am-clickable reward">打赏TA</span></div>
                      <div class="right">
                        <span class="am-clickable reseration">预约</span></div>
                    </div>
                    <div class="commentsList" style="display: none;"></div>
                  </div>
                </li>
                <li class="am-touchable">
                  <div class="userHeader normal_header am-clickable"></div>
                  <div class="rightContent am-clickable">
                    <div class="userName clearfix">
                      <span>Gary</span></div>
                    <div class="line2 clearfix">
                      <span class="store">丝奔国际蓝郡店</span>
                      <span class="postTime">2017-06-07</span>
                      <span class="price" style="display: none;">￥100</span></div>
                    <div class="text am-clickable">在这炎热的夏季还要留着厚重的长发吗是时候...</div>
                    <ul class="photos clearfix">
                      <li class="am-clickable" style="width: auto; height: 197px;">
                        <img pid="00A93E86-76E1-433D-9C81-87A4D8BF707D.jpg" src="http://resourcemyk.meiguanjia.net//show/s1/176810/1824901/00A93E86-76E1-433D-9C81-87A4D8BF707D_m.jpg" style="background-color: rgb(204, 204, 204);"></li>
                      <li class="am-clickable" style="width: 140px; height: 140px; display: none;">
                        <img pid="5D2450B7-C748-420C-9098-6F4CC1E8E5A2.jpg" src="http://resourcemyk.meiguanjia.net//show/s1/176810/1824901/5D2450B7-C748-420C-9098-6F4CC1E8E5A2_m.jpg" style="background-color: rgb(204, 204, 204);"></li>
                      <li class="am-clickable" style="width: 140px; height: 140px; display: none;">
                        <img pid="E4A2DFB5-24BE-4050-B221-7A306D4FAF4C.jpg" src="http://resourcemyk.meiguanjia.net//show/s1/176810/1824901/E4A2DFB5-24BE-4050-B221-7A306D4FAF4C_m.jpg" style="background-color: rgb(204, 204, 204);"></li>
                      <li class="am-clickable" style="width: 140px; height: 140px; display: none;">
                        <img pid="944AF969-B02A-4D1C-AF78-5CB38D0CDC10.jpg" src="http://resourcemyk.meiguanjia.net//show/s1/176810/1824901/944AF969-B02A-4D1C-AF78-5CB38D0CDC10_m.jpg" style="background-color: rgb(204, 204, 204);"></li>
                      <li class="am-clickable" style="width: 140px; height: 140px; display: none;">
                        <img pid="485429DA-FCB3-428D-9EE6-AAADB94A32D1.jpg" src="http://resourcemyk.meiguanjia.net//show/s1/176810/1824901/485429DA-FCB3-428D-9EE6-AAADB94A32D1_m.jpg" style="background-color: rgb(204, 204, 204);"></li>
                    </ul>
        <div class="falls_img">
          <div class="userHeader falls_userHeader am-clickable">
            <img width="100%" src="http://resourcemyk.meiguanjia.net//artisan/176810/1824901_s.jpg" style="background-color: rgb(204, 204, 204);"></div>
        </div>
        <div class="price_name">Gary</div>
        <div class="text falls_text">在这炎热的夏季还要留着厚重的长发吗是时候...</div>
        <div class="photonumbers" style="display: block;">
          <span>5</span></div>
        <div class="actions">
          <div class="left">
            <span class="am-clickable like">2</span>
            <span class="am-clickable comments">0</span>
            <span class="am-clickable reward">打赏TA</span></div>
          <div class="right">
            <span class="am-clickable reseration">预约</span></div>
        </div>
        <div class="commentsList" style="display: none;"></div>
      </div>
    </li>
  </ul>
</div>
            
          </div>
        </swiper-item>
      </swiper>
    </div>
</template>
<i18n>
set bar-active-color:
  zh-CN: 设置bar颜色
</i18n>


<script>
import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem } from 'vux'
const list = () => ['全部', '优雅长发', '慵懒中发', '灵气短发', '美容', '美体']

export default {
  components: {
    Tab,
    TabItem,
    Sticky,
    Divider,
    XButton,
    Swiper,
    SwiperItem
  },
  data () {
    return {
      index01: 0,
      list2: list(),
      demo2: '美食',
      list3: ['收到的消息', '发出的消息'],
      demo3: '收到的消息',
      list4: ['正在放映', '即将上映'],
      demo4: '即将上映',
      demoDisabled: 'A',
      index: 0,
      getBarWidth: function (index) {
        return (index + 1) * 22 + 'px'
      }
    }
  },
  methods: {
    switchTabItem (index) {
      console.log('on-before-index-change', index)
      this.$vux.loading.show({
        text: 'loading'
      })
      setTimeout(() => {
        this.$vux.loading.hide()
        this.index01 = index
      }, 1000)
    },
    onItemClick (index) {
      console.log('on item click:', index)
    },
    addTab () {
      if (this.list2.length < 5) {
        this.list2 = list().slice(0, this.list2.length + 1)
      }
    },
    removeTab () {
      if (this.list2.length > 1) {
        this.list2 = list().slice(0, this.list2.length - 1)
      }
    },
    next () {
      if (this.index === this.list2.length - 1) {
        this.index = 0
      } else {
        ++this.index
      }
    },
    prev () {
      if (this.index === 0) {
        this.index = this.list2.length - 1
      } else {
        --this.index
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';

.box {
  padding: 15px;
}
.active-6-1 {
  color: rgb(252, 55, 140) !important;
  border-color: rgb(252, 55, 140) !important;
}
.active-6-2 {
  color: #04be02 !important;
  border-color: #04be02 !important;
}
.active-6-3 {
  color: rgb(55, 174, 252) !important;
  border-color: rgb(55, 174, 252) !important;
}
.tab-swiper {
  background-color: #fff;
}
.page_archiveList .archiveList.falls {
    margin-top: 5px;
}

.archiveList {
    background: #f6f6f6;
}
.page_archiveList .archiveList.falls>ul {
    display: block;
    float: left;
    width: 50%;
    padding: 0 5px;
}

.page_archiveList .archiveList.falls * {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
}
.page_archiveList .archiveList.falls .falls_tit {
    position: relative;
    padding: 16px 8px 14px 8px;
    background-color: #eee;
}

.page_archiveList .archiveList.falls ul>li {
    display: block;
    width: 100%;
    float: left;
    margin: 5px 0;
    border-radius: 3px;
    -webkit-border-radius: 3px;
}
dl, li, ol, ul {
    list-style: none;
}
.page_archiveList .archiveList.falls * {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
}

.archiveList>ul>li {
    padding: 10px 10px;
    border-bottom: #ededed 1px solid;
    margin: 10px 0;
    background-color: #fff;
}

.page_archiveList .archiveList.falls .falls_tit .falls_header {
    font-size: 16px;
    padding-left: 5px;
    border-left: 3px solid #362e2b;
    height: 14px;
    line-height: 12px;
    font-weight: 800;
    color: #1a1a1a;
}
.page_archiveList .archiveList.falls .falls_tit .falls_con {
    margin-top: 14px;
    font-size: 12px;
    color: #888;
    line-height: 18px;
}
.page_archiveList .archiveList.falls .am-touchable {
    padding: 0;
}

.page_archiveList .archiveList.falls ul>li {
    display: block;
    width: 100%;
    float: left;
    margin: 5px 0;
    border-radius: 3px;
    -webkit-border-radius: 3px;
}
.page_archiveList .archiveList.falls .userHeader {
    display: none;
}


.archiveList .userHeader {
    height: 42px;
    width: 42px;
    float: left;
    background-image: url(../assets/images/head_male.png);
    background-size: contain;
    overflow: hidden;
    border-radius: 42px;
}
.page_archiveList .archiveList.falls .rightContent {
    margin: 0;
}
.archiveList .rightContent {
    margin: 0 0 0 50px;
    position: relative;
}
.page_archiveList .archiveList.falls .rightContent .userName {
    display: none;
}
.theme1 .archiveList .userName {
    color: #d4082a;
}
.archiveList .userName>span {
    float: left;
    display: block;
}
.page_archiveList .archiveList.falls .rightContent .line2 {
    display: none;
}
.page_archiveList .archiveList.falls .rightContent .text {
    display: none;
}
.archiveList .line2 {
    padding-bottom: 10px;
}
.archiveList .text {
    font-size: 14px;
    color: #222;
    line-height: 20px;
    margin-bottom: 10px;
}
.page_archiveList .archiveList.falls ul li .photos {
    margin: 0;
}
.archiveList .photos {
    margin-bottom: 0;
    margin-right: -5px;
}
.page_archiveList .archiveList.falls ul li .photos li {
    margin: 0;
}
.page_archiveList .archiveList.falls ul>li {
    display: block;
    width: 100%;
    float: left;
    margin: 5px 0;
    border-radius: 3px;
    -webkit-border-radius: 3px;
}
.archiveList .photos li img {
    width: 100%;
    display: block;
}

img {
    border: none;
}
.page_archiveList .archiveList.falls .falls_img {
    display: block;
    width: 100%;
}
.page_archiveList .archiveList.falls .userHeader.falls_userHeader {
    float: right;
    display: block;
    margin-right: 10px;
    margin-top: -21px;
}
.archiveList .userHeader img {
    border-radius: 42px;
}
.am-header .tab>li.selected, .barberList_ul1 .price, .blockItem.record .btns .recordsBtn.comment, .cordova-actionsheet .sheet>li, .mainTypeTab li.selected, .main_activity .more, .myCoupon_list .status, .page_archiveList .archiveList.falls .price_name, .page_barberDetail .barberDetail_text .price, .page_barberDetail .reservation_today .reservation_todayinner .today_wrap .today_num span, .page_commentSubmit .tab li.selected, .page_mallProductList.block .mallTabContainer .mallTab li.selected, .page_mallProductList.list .mallTabContainer li.selected, .page_menu .menu.theme1 .title, .page_reward .amount .total input, .page_reward .textAnimate, .panel_tab .selected, .reseration_list1 .cancel, .reservation_next .value, .reservation_timeLine li.selected .date, .reservation_timeLine li.selected .day, .select_label, .setup_form .send {
    color: #ff2146;
}
.page_archiveList .archiveList.falls .price_name {
    display: block;
    padding: 8px 10px;
    color: #e768ae;
    font-size: 12px;
}
.page_archiveList .archiveList.falls .text.falls_text {
    display: block;
    padding: 0 10px;
    color: #555;
    font-size: 15px;
    line-height: 18px;
    min-height: 36px;
    margin-bottom: 5px;
}

.page_archiveList .archiveList.falls .photonumbers {
    position: absolute;
    z-index: 1;
    top: 4px;
    right: 4px;
    width: 20px;
    height: 15px;
    text-align: center;
    border-top: 1px solid rgba(0,0,0,.5);
    border-right: 1px solid rgba(0,0,0,.5);
    border-radius: 3px;
    color: rgba(0,0,0,.5);
    padding: 3px 3px 0 0;
    display: none;
}
.page_archiveList .archiveList.falls .photonumbers>span {
    background-color: rgba(0,0,0,.5);
    width: 20px;
    height: 15px;
    display: block;
    position: absolute;
    top: 2px;
    right: 2px;
    border-radius: 3px;
    color: #fff;
    font-size: 12px;
    line-height: 16px;
}
.page_archiveList .archiveList.falls .rightContent .actions {
    display: none;
}
.archiveList .actions {
    font-size: 12px;
    color: #aaa;
    line-height: 21px;
    position: relative;
    margin-bottom: 10px;
    height: 30px;
}
.archiveList .actions .left {
    position: absolute;
    left: 0;
    top: 0;
    height: 30px;
    line-height: 30px;
}
.archiveList .actions .left span.like {
    // background: url(../images/action3.png) no-repeat 3px center;
    background-size: 14px 16px;
}

.archiveList .actions .left span {
    line-height: 30px;
    display: inline-block;
    padding: 0 4px 0 22px;
    text-align: center;
    color: #b3b3b3;
}
.archiveList .actions .left span.comments {
    background: url(../assets/images/archiveList_msg_ico.png) no-repeat 3px center;
    background-size: 14px 13px;
}

.archiveList .actions .left span {
    line-height: 30px;
    display: inline-block;
    padding: 0 4px 0 22px;
    text-align: center;
    color: #b3b3b3;
}
.archiveList .actions .left span {
    line-height: 30px;
    display: inline-block;
    padding: 0 4px 0 22px;
    text-align: center;
    color: #b3b3b3;
}

.page_archiveList .archiveList.falls * {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
}
.archiveList span.reward {
    color: #e768ae;
    font-size: 12px;
    line-height: 22px;
    // background: url(../assets/images/archiveList_play_ico.png) no-repeat 3px center;
    background-size: 14px 14px;
}
.archiveList .actions .right {
    position: absolute;
    top: 0;
    right: 0;
    line-height: 30px;
}
.theme1 .archiveList .actions .right span.reseration {
    border-color: #ff2146;
    color: #ff2146;
    background: 0 0;
}

.archiveList .actions .right span.reseration {
    // background: url(../images/action2.png) no-repeat 8px center;
    border: #e768ae 1px solid;
    color: #e768ae;
    background-size: 12px 12px;
    line-height: 25px;
    height: 23px;
}
.archiveList .actions .right span {
    line-height: 21px;
    display: inline-block;
    padding: 0 8px 0 22px;
    text-align: center;
    border: #b3b3b3 1px solid;
    border-radius: 21px;
    color: #b3b3b3;
}
.page_archiveList .archiveList.falls * {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
}

.archiveList .commentsList {
    background: #f4f4f4;
    padding: 5px 10px;
    color: #999;
    font-size: 12px;
}

.am-body-inner {
    display: block;
    min-height: 100%;
}
.am-body-wrap {
    width: 100%;
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 0;
}
.page_archiveList .archiveList.falls .falls_tit .falls_nums {
    position: absolute;
    top: 12px;
    right: 5px;
    height: 21px;
    border-radius: 20px;
    -webkit-border-radius: 20px;
    background-color: #ccc;
    color: #fff;
    font-size: 16px;
    text-align: center;
    line-height: 21px;
    min-width: 35px;
    max-width: 60px;
}
</style>