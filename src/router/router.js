import Vue from 'vue';
import Router from 'vue-router';
import Reservation from '@/components/ReservationVue';
import Works from '@/components/WorksVue';
import Shop from '@/components/ShopVue';
import Mine from '@/components/MineVue';
import Login from '@/components/Login';
import Register from '@/components/Register';
import Follow from '@/components/Follow';
import MemberCard from '@/components/MemberCard';
import MemberCardList from '@/components/MemberCardList';
import MemberCardDetail from '@/components/MemberCardDetail';
import ReserveDetail from '@/components/ReserveDetail';

import Coupon from '@/components/Coupon';

import store from '@/store/store';
import * as types from '@/store/types';
Vue.use(Router);

const routes = [
	{
		path: '/reservation',
		name: 'reservation',
		component: Reservation
	},
	{
		path: '/works',
		name: 'works',
		component: Works
	},
	{
		path: '/shopIndex',
		name: 'shop',
		component: Shop
	},
	{
		path: '/mine',
		name: 'mine',
		component: Mine
	},
	{
		path: '/login',
		name: 'login',
		component: Login
	},
	{
		path: '/register',
		name: 'register',
		component: Register
	},
	{
		path: '/follow',
		name: 'follow',
		component: Follow
	},
	{
		path: '/mcard',
		name: 'mcard',
		component: MemberCard
	},
	{
		path: '/mcardList',
		name: 'mcardList',
		component: MemberCardList
	},
	{
		path: '/coupon',
		name: 'coupon',
		component: Coupon
	},
	{
		path: '/mcardDetail/:cardNumber',
		name: 'mcardDetail',
		component: MemberCardDetail
	},
	{
		path: '/reserveDetail',
		name: 'reserveDetail',
		component: ReserveDetail
	}
];
// 页面刷新时，重新赋值token
if (window.sessionStorage.getItem('token')) {
	store.commit(types.LOGIN, window.sessionStorage.getItem('token'));
}

const router = new Router({
	mode: 'history',
	routes
});

store.registerModule('vux', {
	// 名字自己定义
	state: {
		isLoading: false
	},
	mutations: {
		updateLoadingStatus(state, payload) {
			state.isLoading = payload.isLoading;
		}
	}
});

router.beforeEach((to, from, next) => {
	if (to.matched.some((r) => r.meta.requireAuth)) {
		next();
		console.log('这个请求需要验证');
		console.log(store);
		if (store.state.token) {
			console.log('store中的token不为空,已经登陆token为： ');
			console.log(store.state.token);
			store.commit('updateLoadingStatus', { isLoading: true });
			next();
		} else {
			console.log('store中的token为空跳转到登陆界面');
			store.commit('updateLoadingStatus', { isLoading: true });
			next({
				path: '/login',
				query: { redirect: to.fullPath }
			});
		}
	} else {
		store.commit('updateLoadingStatus', { isLoading: true });
		console.log('这个请求不需要验证');
		next();
	}
});
router.afterEach(function(to) {
	store.commit('updateLoadingStatus', { isLoading: false });
});

export default router;
