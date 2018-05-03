<template>
	<div class="userlist-box">
	  <p class="tit">用户列表</p>
		<ul class="user-list">
			<li v-for="(item,index) in userlist">
				<span>{{item.id}}</span>
				<span>{{item.phone}}</span>
				<span>{{item.password}}</span>
				<span>
						<router-link :to="{ name: 'edituser', params: item}">修改</router-link>
				</span>
				<span @click="deleteUser(item.id)">删除</span>
			</li>
		</ul>
	</div>
</template>
<script>
export default{
	data(){
		return {
			userlist:[]
		}
	},
	created(){
		let that=this;
		this.get("/user/list",{}).then(res => {
			that.userlist=res.data.data;
		}).catch((err)=>{

		});
	},
	methods:{
		deleteUser(id){
			let that=this;
			this.delete("/user/delete",{
				id:id
			}).then(res => {
				if((res.status==200)&&(res.data.data.affectedRows>0)){
					console.log("删除成功");
					that.userlist.forEach((item,index)=>{
						if(item.id==id){
							that.userlist.splice(index,1);
						}
					})
				}else{
					console.log("删除失败");
				}
			}).catch((err)=>{

			});
		}
	}
}
</script>
<style lang="scss">
.userlist-box{
	.tit{
		padding:1rem 0;
		font-size:1.6rem;
		text-align:center;
		border-bottom:0.1rem solid #eee;
	}
	.user-list{
		li{
			display:flex;
			flex-direction:row;
			justify-content: space-around;
			border-bottom:0.1rem solid #eee;
			span{
				flex:1;
				padding:1rem 0;
				font-size:1.6rem;
				text-align:center;
				&:nth-child(2){
					flex:2;
				}
				&:not(:last-child){
					border-right:0.1rem solid #eee;
			  }
			}
		}
	}
}
</style>
