<template>
	<div class="mydialog" v-show="isshowdialog">
		<div class="mengceng"></div>
		<div class="dialogoo">
			<p class="dec">确认? </p>
			<p class="butt">
				<button class="confirmed" @click="confirmed()">确认</button>
				<button @click="cancel()">取消</button>
			</p>
		</div>
	</div>
</template>
<script>
	export default{
		props:{},
		data(){
			return{
				isshowdialog:false
			}
		},
		methods:{
			confirmed(){
				this.isshowdialog=false;
				this.$emit("confirmModel");
			},
			cancel(){
				this.isshowdialog=false;
				this.$emit("cancelModel");
			}
		}
	}
</script>
<style lang="scss">
@import '../../scss/component/dialog';
</style>
