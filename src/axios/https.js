/**
 * Created by superman on 17/2/16.
 * http配置
 */
import axios from 'axios'

import store from '../store/store'
import * as types from '../store/types'
import router from '../router/router'
// import Vue from 'vue'
// import { Actionsheet } from 'vux'
// axios 配置
axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://9a03f75c.ngrok.io/xia-wechat'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (sessionStorage.getItem('token')) {
      console.log('这里是axios的httprequest拦截器')
      config.headers.post['Content-Type'] = 'application/json'
      config.params['token'] = sessionStorage.getItem('token')
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    var data = response.data.result
    if (data) {
      switch (data.code) {
        case 3004:
      }
    }
    return response
  },
  error => {
    console.log(error.response.data)
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          store.commit(types.LOGOUT)
          // 只有在当前路由不是登录页面才跳转
          router.currentRoute.path !== 'login' && router.replace({
            path: 'login',
            query: { redirect: router.currentRoute.path }
          })
      }
    }
    console.log(JSON.stringify(error))// console : Error: Request failed with status code 402
    return Promise.reject(error.response.data)
  }
)

export default axios
