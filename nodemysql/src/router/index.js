import Vue from 'vue'
import Router from 'vue-router'
import Index from '../view/user/index'
import login from "../view/user/login"
import register from "../view/user/register"
import editUser from "../view/user/edituser"

Vue.use(Router)

export default new Router({
	linkActiveClass: 'active',
	// mode: 'history',
	 routes: [
	    {
	      path: "*",
	      redirect: "/index"
	    },
	    {
	      path: '/index',
	      name: "index",
	      component: Index
	    },
	    {
				path:"/login",
				component:login
		  },
	    {
				path:"/register",
				component:register
			},
	    {
				path:"/edituser/:id",
				name:"edituser",
				component:editUser
			}
	]
})
