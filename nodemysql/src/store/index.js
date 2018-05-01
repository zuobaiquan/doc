import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new  Vuex.Store({
	state: {
		bannerList: [
			{
				id: null,
				srco: null,
				title: null,
				href: null	
			}
		],
		productList: [
			{
				g_id: null,
				ico: null,
				g_title: null,
				g_price: null,
				g_describe: null,
				g_originalCost: null,
				g_img: []
			}
	    ],
	    getdetails: {
    		g_id:null,
			g_title:null,
			g_img:[],
			g_price: null,
			g_salesvolume:null,
			g_address:null,
			iscollect:null,
			t_comment:[
				{
					com_id:null,
					u_id:null,
					u_icon:null,
					u_nickname:null,
					com_content:null,
					com_star:null,
					com_date:null	
		    	}
    		]
		},
		userinfo:{
			u_id:null,
			u_account:null,
			u_token:null,
			u_nickname:null,
			u_sign:null,
			u_icon:null,
			u_password:null,
			u_identity:null
		},
		choosetotal: 0, // 购物车金额
		//收货地址
		addressList:[
			{
				"a_id":1,
				"a_name":"路小雨",
				"a_phone":"18721781234",
				"a_tity":"上海市宝山区大华乐购",
				"a_detailsAddress":"888弄8号",
				"a_isDefault":true
			}
		]

	},
	getters: {},
	mutations: {
		setBannerList: (state, data)=> {
			state.bannerList = data
		},
		setProductList:(state,data)=>{
			state.productList = data
		},
		setGetdetails:(state,data)=>{
			state.getdetails = data
		},
		setUserinfo:(state,data)=>{
			state.userinfo.u_account = data.u_account
			state.userinfo.u_token = data.u_token
		},
		setChoosetotal (state, data) {
			state.choosetotal = data
		},
		setAddressList: (state, data)=>{
			state.addressList = data
		}


	},
	actions: {
		//获取首页banner图
		fetchBannerList (store, data) {
			store.commit('setBannerList', data)
		},
		//获取首页产品列表
		fetchProductList (store, data) {
			store.commit('setProductList', data)
		},
		//根据id获取详情信息
		getProListById (store, data) {
			store.commit('setGetdetails',data)
		},
		//登录之后，存储用户的信息
		fetchUserinfo(store, data){ // 这个地方你没写 我的姐
			store.commit("setUserinfo",data)
		},
		getChoosetotal (store, data) {
			store.commit('setChoosetotal', data)
		},
		getAddressList (store, data) {
			store.commit('setAddressList', data)
		}

	}
})
export default store

