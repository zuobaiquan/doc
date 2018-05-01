import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index'
import login from "../components/login"
import register from "../components/register"
import editUser from "../components/edituser"

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
