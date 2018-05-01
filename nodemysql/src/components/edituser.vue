<template>
	<div class="register-login" >
		<div class="line input-phone">
			<input ref="userName" id="account" placeholder="请输入手机号"  @input="addFormat" maxlength="13" />
			<span v-if="showClear" class="content-clear" @click="clearUserName"></span>
		</div>
		<div class="line input-password">
			<input id="password" placeholder="请输入密码"  v-model="passWord"  :type="isPassWord?'text':'password'">
			<span  v-show="eyeIsShow" class='but-nosee' :class="{'see':isPassWord}" @click="changePassShow()"></span>
		</div>
		<div class="line">
			<button class="button"  @click="butLogin">修改</button>
		</div>
		<myTip :isShow="mytipShow"  :text="myTipText" @closeModal="mytipShow = !mytipShow"></myTip>
	</div>
</template>

<script>
	import tip from './common/tiptip'
	export  default{
		http:{
			emulateJSON:true
		},
		data(){
			return {
				userName:"",
				passWord:""	,
				showClear:false,
				mytipShow:false,
				myTipText:"",
				isPassWord:false,
				eyeIsShow:false
			}
		},
		components:{
			myTip:tip
		},
		watch: {
			passWord : {
				handler(newval){
					if(newval ==null || newval ==""){
						this.eyeIsShow = false
					}else{
						this.eyeIsShow = true
					}                                                                                                                                                                                                                                                                                             
				}
			}
		},
		created(){
			var that=this;
			this.get("/user/find",{
				id:that.$route.params.id
			}).then(res => {
				console.log(res);
				if(res.status==200){
					//that.$router.push("/index");
					//that.$store.dispatch("fetchUsernfo",{userName:that.userName,passWord:that.passWord})
				}
			},(err)=>{
				console.log(err);
			})
		},
		methods:{
			//点击登录按钮
			butLogin(){
				let that=this;
				this.userName = this.$refs.userName.value.replace(/\s+/g,"");
				if(!this.userName){
					this.myTipText="账号不能为空";
					this.mytipShow=true;
					return;
				}else if(!(/^1[3|4|5|7|8][0-9]{9}$/).test(this.userName)){
					this.myTipText="用户名或密码错误，请重新输入";
					this.mytipShow=true;
					return;
				}
				//6-12位数字或者字母组合
				var reg = /^[a-zA-Z0-9]{6,12}$/
				if(!this.passWord){
					this.myTipText="密码不能为空";
					this.mytipShow=true;
					return;
				}
				
				that.post("/user/login",{
						phone:that.userName,
						password:that.passWord
				}).then(res => {
					console.log(res);
					if(res.status==200){
						that.myTipText="登录成功";
						that.mytipShow=true;
						localStorage.setItem("userName",that.userName);
						that.$router.push("/index");
						//that.$store.dispatch("fetchUsernfo",{userName:that.userName,passWord:that.passWord})
					}
				},(err)=>{
					console.log(err);
				})
			},
			clearUserName(){
				this.$refs.userName.value='';
				this.showClear = false
			},

			//账号输入框 3 4 4的格式
			addFormat(e){
				var val = e.target.value
					var arr = val.split(' ');
					var Arr = [];
					var Str = '';
					for(var i = 0 ; i < arr.length ; i ++){
						var arr1 = arr[i].split('');
						for(var j = 0 ; j < arr1.length ; j ++){
							Arr.push(arr1[j]);
						}
					}
					// console.log(Arr);
					if(Arr.length > 3 && Arr.length <=7){
						Arr.splice(3,0,' ');
					}else if(Arr.length > 7){
						Arr.splice(7,0,' ');
						Arr.splice(3,0,' ');
					}
					Arr.forEach(function(ele,index){
						Str += ele;
					})
					// this.value = Str
					e.target.value = Str
					if (Str.length != 0) {
						this.showClear = true
					} else {
						this.showClear = false
					}
			},
			changePassShow (){
				this.isPassWord = !this.isPassWord;
			}
		}
	}
</script>
<style lang="scss">
@import '../scss/registerlogin';
</style>