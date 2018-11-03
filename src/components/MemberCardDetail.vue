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
        <img src="../assets/images/card_bg_01.png"> 
            <div class="ar_btn_left02"></div>
            <div class="logo_u01"></div>
            <div class="price">
                <h3>三生三味／果果商城 联名会员卡</h3>
            </div>
      </span>
    </figure> 
  </div>
</div>

</template>

<script>
// import net from '../utils/net'
import { XHeader } from 'vux'
// import auth from '../aouth/auth'
// import store from '@/store/store'
// import * as types from '@/store/types'
// import { Button, Cell } from 'vant'

export default {
  components: {
    XHeader
  },
  data () {
    return {
      error: ''
    }
  },
  methods: {
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
</style>
