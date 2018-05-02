<template>
	<div class="tiptip" v-show="isShow">
		<transition name="slide-trans">
			<p>{{text}}</p>
		</transition>

	</div>

</template>

<script>
	export default{
		data(){
			return{
			}
		},
		props:{
			isShow:{
				type:Boolean,
				default:false

			},
			text:{
				type:String,
				default:"请先登录"
			}
		},
		computed:{

		},
		watch:{
			isShow(value){
				if (value) {
					setTimeout(() => {
						this.$emit('closeModal')
					},3000)
				}

			}
		},
		methods:{

		},
		mounted(){

		}
	}
</script>
<style lang="scss">
@import '../../scss/component/tip';
</style>
