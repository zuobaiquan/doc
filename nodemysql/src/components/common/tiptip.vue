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

<style lang="scss" scoped>
	.tiptip{
		position: fixed;
		height: 4rem;
		width: 100%;
		text-align: center;
		top: 50%;
		transform:translateY(-50%);
		z-index: 20;
		p{
			background: #777777;
			opacity: 0.7;
			width: 60%;
			margin: 0 auto;
			height: 3.5rem;
			line-height: 3.5rem;
			border-radius: 0.8rem;
			color: #fff;
		}
	}
	.slide-trans-enter-active {
	  transition: all .5s;
	}
	.slide-trans-enter {
	  transform: translateY(900px);
	}
	.slide-trans-old-leave-active {
	  transition: all .5s;
	  transform: translateY(-900px);
	}
</style>