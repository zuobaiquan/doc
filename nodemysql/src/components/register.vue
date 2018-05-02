<template>
<div>
	<div class="register-login">
		<div class="line input-phone">
			<input placeholder="手机号"  ref="phone" maxlength="13"  @input="addFormat"/>
			<span v-if="showClear" class="content-clear" @click="clearUserName"></span>
		</div>
		<div class="line input-password">
			<input :type="isPassWord ? 'text' :'password'" v-model="password" placeholder="密码（6-12位的数字及密码组合）" />
			<span v-show="eyeIsShow" class='but-nosee' :class="{'see':isPassWord}" @click="changePassShow()"></span>
		</div>
		<div class="line">
			<button class="button" @click="register">立即注册</button>
		</div>
	</div>
	<myTip :isShow="mytipShow" :text="myTipText" @closeModal="mytipShow = !mytipShow"></myTip>
</div>
</template>

<script>
	import tip from './common/tip'
	export default{
		data () {
			return {
				title:"注册",
				phone:null,
				checkNum:null,
				password:null,
				checkNumberss:null,//后台获取的验证码
				showClear:false,
				mytipShow : false,
				myTipText : "",
				eyeIsShow : true,
				isPassWord : false
			}
		},
		computed:{
			userinfo () {
				return this.$store.state.userinfo
			}
		},
		components:{
			myTip:tip
		},
		methods:{
			//获取验证码
			// getCheckNum(){
			// 	this.get(this.resource + "/getCheckNum").then((res)=>{
			// 		console.log(res.data.checkNumber);
			// 		this.checkNumberss=res.data.checkNumber;
			// 	}).catch((err)=>{
			// 		console.log(err);
			// 	});
			// },

			//提交注册请求
			register(){
				var that=this;
				//检测账号
				this.phone=this.$refs.phone.value.replace(/\s+/g,"");
				var regAccount =/^1[3|4|5|7|8][0-9]{9}$/; //验证规则
				if(!regAccount.test(this.phone)){
					this.mytipShow=true;
					this.myTipText="请输入正确的手机号码";
					return;
				}

				//检验密码
				if(!this.password){
					this.mytipShow=true;
					this.myTipText="密码不能为空";
				  return;
				}

				// var respassword =/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
				// if(!respassword.test(this.password)){
				//   this.mytipShow=true;
				//   this.myTipText="密码格式不正确";
				//   return;
				// }

				this.post("/user/add",{
					phone:this.phone,
					password:this.password
				}).then((res)=>{
					//保存账号和token
					console.log(res);
					that.$router.push("/login");
				}).catch((err)=>{
					console.log(err);
				});
			},
			clearUserName () {
				this.$refs.phone.value = "";
				this.showClear = false;
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
			changePassShow () {
				this.isPassWord = !this.isPassWord;
			}
		},
		mounted(){
		//	this.getCheckNum();
		}
	}
</script>

<style lang="scss" scoped>
@import '../scss/registerlogin';
</style>
