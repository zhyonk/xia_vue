<template>
  <div>
    <h2>注册</h2>
    <group title="请输入手机号">
      <x-input title="手机号码：" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile" v-model="info.phone"></x-input>
    </group>
    <!-- <group title="验证码">
      <x-input title="发送验证码" class="weui-vcode">
        <x-button slot="right" type="primary" mini>发送验证码</x-button>
      </x-input>
    </group> -->
    <group title="确认输入">
      <x-input title="请输入密码" type="text" placeholder="" v-model="password" ></x-input>
      <x-input title="请确认密码" v-model="password2" type="text" placeholder="" :equal-with="password"></x-input>
    </group>
  
    <br>
    <x-button  @click.native="commit()">提交</x-button>
     <loading v-model="showLoading" :text="loadText"></loading>
  </div>
</template>

<script>
import net from '../utils/net'
import { XButton, XInput, Group, Cell, Loading } from 'vux'
import auth from '../aouth/auth'
import store from '@/store/store'
import * as types from '@/store/types'

export default {
  components: {
    XButton,
    XInput,
    Group,
    Cell,
    Loading
  },
  data () {
    return {
      password: '',
      password2: '',
      showLoading: false,
      loadText: '正在注册，请稍后....',
      info: {
        phone: '',
        password: ''
      },
      error: ''
    }
  },
  methods: {
    commit () {
      let _this = this
      _this.showLoading = true
      var info = {
        phone: this.info.phone,
        password: this.info.password
      }
      let context = this
      console.log(info)
      net.postJson('/user/login', info, function (data) {
        _this.loadText = '注册成功'
        _this.showLoading = false
        sessionStorage.setItem('token', data.token)
        sessionStorage.setItem('uid', data.uid)
        store.commit(types.LOGIN, window.sessionStorage.getItem('token'))
        auth.authenticated = true
        context.$router.push('/reservation')
      })
    }
  }
}
</script>