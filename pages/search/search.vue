<template>
	<view class="container">
		<u-search placeholder="搜索爆款产品..." @search="handleSearch"></u-search>
		<pin-search-recommend-list title="热门搜索" :list="hostList"></pin-search-recommend-list>
		<pin-search-recommend-list title="历史搜索" :list="historyList"></pin-search-recommend-list>
	</view>
</template>

<script>
	let activityApi = require('@/api/activity.js')
	let searchHistoryApi = require('@/api/searchHistory')
	import userInfo from "@/mixins/userInfo.js"

	export default {
		mixins: [userInfo],
		data() {
			return {
				hostList: [],
				historyList: []
			}
		},
		methods: {
			handleSearch:function(value){
				uni.navigateTo({
				    url: '/pages/search/result/result?key='+value+'&customerId='+this.getLocalUserInfo()
				});
			}
		},
		created() {
			// 加载热门搜索数据
			activityApi.hotSearch()
				.then(resp => {
					this.hostList = resp.data.data
				})
				.catch(err => {
					console.log(err)
				})
			// 加载我的搜索历史数据
			let data = {
				page: 1,
				size: 100,
				model: {
					customerId: this.getLocalUserInfo()
				}
			}
			searchHistoryApi.byCustomerId(data)
				.then(resp => {
					this.historyList = resp.data.data.list
				})
				.catch(err => {
					console.log(err)
				})
		}
	}
</script>

<style>

</style>
