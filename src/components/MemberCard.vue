<template>
<div>
  <x-header>我的会员卡</x-header>
  <div class="am-page-empty class-fullcenter am-clickable" style="display: block;">
    <div>
    <img src="../assets/images/card_space.png">
    <p>您目前没有任何
    <em class="v4_myCard">会员卡</em>，轻触屏幕可查看
    <em class="v4_myCard">会员卡</em>类型</p>
    </div>
  </div>
</div>
</template>

<script>
// import net from '../utils/net'
import { XHeader } from 'vux'
// import auth from '../aouth/auth'
// import store from '@/store/store'
// import * as types from '@/store/types'

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
</style>
