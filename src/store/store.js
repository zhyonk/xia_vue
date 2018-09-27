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
    openid: ''
  },
  mutations: {
    [types.LOGIN]: (state, data) => {
      sessionStorage.token = data
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
      state.openid = data
    }
  }
})
