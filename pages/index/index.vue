<template>
	<view class="container">
		<u-row gutter="16">
			<u-col span="10">
				<u-search placeholder="搜索爆款产品..." :show-action="false" @focus="handleFocus" ></u-search>
			</u-col>
			<u-col span="2">
				<u-icon label="uView" size="40" name="/static/api.png"></u-icon>
			</u-col>
		</u-row>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			handleFocus(){
				// 跳转到搜索页面
				uni.navigateTo({
				    url: '/pages/search/search'
				});
			}
		}
	}
</script>

<style>
	

	.uni-searchbar{
		height: 68rpx;
	}
	
</style>
