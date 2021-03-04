<template>
	<view>
		<text>{{title}}</text>
		<view class="u-flex u-flex-wrap" style="justify-content: space-between;">
			<u-tag :text="item.productTitle"  v-for="(item,index) in list" 
			:key="index" @click="handleClick(item.productTitle)"  mode="light" shape="circle" 
			class="u-m-b-30 "/>
		</view>
	</view>
</template>

<script>
	import userInfo from "@/mixins/userInfo.js"
	export default {
		mixins: [userInfo],
		props:{
			title:String,
			list:Array
		},
		data() {
			return {
				
			};
		},
		methods:{
			handleClick(productTitle){
				uni.navigateTo({
				    url: '/pages/search/result/result?key='+productTitle+'&customerId='+this.getLocalUserInfo()
				});
			}
		}
	}
</script>

<style>
</style>
