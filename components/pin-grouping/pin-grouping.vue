<template>
	<view>
		<u-cell-item :title="title"></u-cell-item>
	</view>
</template>

<script>
	export default{
		props:{
			list:Array
		},
		computed:{
			title:function(){
				if(this.list){
					return this.list.length+"人正在拼团"
				}else{
					return ""
				}
			}
		},
		methods:{
			handlePreBuy:function(){
				this.$emit("pre-buy",{
					type:"join"
				})
			}
		}
	}
</script>

<style scoped>
	.u-cell{
		position: relative;
	}
	.u-cell::before{
		position: absolute;
		left: 5rpx;
		top: 0rpx;
		content: "";
		display: block;
		width: 4px;
		height:100%;
		background-color: #ff6633;
	}
</style>
