/**
 * Created by superman on 17/2/16.
 */
import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    user: {},
    token: null,
    title: '',
    openid: '',
    bannerList: null
  },
  mutations: {
    [types.LOGIN]: (state, data) => {
      sessionStorage.setItem('token', data)
      state.token = data
    },
    [types.LOGOUT]: (state) => {
      sessionStorage.removeItem('token')
      state.token = null
    },
    [types.TITLE]: (state, data) => {
      state.title = data
    },
    [types.OPENID]: (state, data) => {
      sessionStorage.setItem('openid', data)
      state.openid = data
    },
    [types.BANNER]: (state, data) => {
      state.bannerList = data
    },
    [types.WORKUSERLIST]: (state, data) => {
      state.workUserlist = data
    }
  },
  getters: {
    bannerList: state => {
      return state.bannerList
    },
    openid: state => {
      return state.openid
    },
    workUserlist: state => {
      return state.workUserlist
    }
  }
})
