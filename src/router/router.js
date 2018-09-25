import Vue from 'vue'
import Router from 'vue-router'
import Reservation from '@/components/ReservationVue'
import Works from '@/components/WorksVue'
import Shop from '@/components/ShopVue'
import Mine from '@/components/MineVue'
import Login from '@/components/Login'
import store from '@/store/store'
import * as types from '@/store/types'
Vue.use(Router)

const routes = [
  {
    path: '/reservation',
    name: 'reservation',
    component: Reservation
  }, {
    path: '/works',
    name: 'works',
    component: Works
  }, {
    path: '/shopIndex',
    name: 'shop',
    component: Shop
  }, {
    path: '/mine',
    name: 'mine',
    meta: {
      requireAuth: true
    },
    component: Mine
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }
]
// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'))
}

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    console.log('这个请求需要验证')
    if (store.state.token) {
      console.log('store中的token不为空,已经登陆token为： ')
      console.log(store.state.token)
      next()
    } else {
      console.log('store中的token为空跳转到登陆界面')
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

export default router
