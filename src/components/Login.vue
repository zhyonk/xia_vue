<template>
  <div>
    <h2>登录</h2>
    <group title="请输入手机号">
      <x-input title="手机号码：" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile" v-model="info.phone"></x-input>
    </group>
    <group title="请输入密码">
      <x-input title=" 密码： " placeholder="请输入密码" v-model="info.password"></x-input>
    </group>
    <br>
    <x-button type="primary" @click.native="submit()">登陆</x-button>
     <loading v-model="showLoading" :text="loadText"></loading>
  </div>
</template>

<script>
import net from '../utils/net'
import { XButton, XInput, Group, Cell, Loading } from 'vux'
import auth from '../aouth/auth'

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
      showLoading: false,
      loadText: '正在登陆',
      info: {
        phone: '',
        password: ''
      },
      error: ''
    }
  },
  methods: {
    submit () {
      let _this = this
      _this.showLoading = true
      var info = {
        phone: this.info.phone,
        password: this.info.password
      }
      let context = this
      console.log(info)
      net.postJson('/user/login', info, function (data) {
        _this.loadText = '登录成功'
        _this.showLoading = false
        localStorage.setItem('token', data.token)
        localStorage.setItem('uid', data.uid)
        auth.authenticated = true
        context.$router.push('/reservation')
      })
    }
  }
}
</script>