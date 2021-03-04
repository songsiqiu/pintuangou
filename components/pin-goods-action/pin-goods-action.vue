<template>
	<view class="goods-action-wrapper">

		<view class="gray cs item" @tap="onTalkToCustomerService">
			<view class="content">
				<u-icon name="server-man" class="text" />
				<text class="text">客服</text>
			</view>
		</view>
		<view :class="{gray:true,fav:true,item:true,storeup:hasStoreup}" @click="onAddToCollection(activityId)"
		 :data-activity-id="activityId">
			<view class="content">
				<u-icon name="bag-fill" class="text" />
				<text class="text">收藏</text>
			</view>
		</view>
		<view class="buy item" @click="onBuy">
			<view class="content">
				<text class="text">￥{{productPrice}}</text>
				<text class="text">在线购买</text>
			</view>
		</view>
		<view class="group item" @click="onGroup">
			<view class="content">
				<text class="text">￥{{activityPrice}}</text>
				<text class="text">发起拼团</text>
			</view>
		</view>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	let storeUpApi = require("@/api/storeup")
	import userInfo from "@/mixins/userInfo.js"

	export default {
		mixins: [userInfo],
		props: {
			activityPrice: Number,
			productPrice: Number,
			activityId: Number
		},
		data: function() {
			return {
				hasStoreup: "",
				show: false
			}
		},
		created: function() {
			// 在组件添加在页面时，查询是否收藏过这个活动
			let activityId = this.activityId;
			let customerId = this.getLocalUserInfo();
			let data = {
				activityId,
				customerId
			};
			storeUpApi.hasCollect(data)
				.then(resp => {
					console.log(resp)
					if (resp.data.data) {
						this.hasStoreup = "storeup"
					}
				})
				.catch(err => {
					console.log(err)
				})
		},
		methods: {
			// 客服
			onTalkToCustomerService: function(event) {

			}, //收藏
			onAddToCollection: function() {
				console.log(this)
				let activityId = this.activityId;
				let customerId = this.getLocalUserInfo();
				let data = {
					activityId,
					customerId
				};
				// debugger
				if (this.hasStoreup) {
					// 取消收藏
					storeUpApi.cancel(data)
						.then(resp => {
							this.hasStoreup=""
						})
						.catch(err => {
							console.log(err)
						})
				} else {
					storeUpApi.create(data)
						.then(resp => {
							if (resp.data.success) {
								this.hasStoreup = "storeup"
								this.$refs.uToast.show({
													title: '收藏成功',
													type: 'success',
												})
							}
						})
						.catch(err => {
							console.log(err);
						})
				}

			}, //在线购买
			onBuy: function(event) {
				this.$emit("pre-buy",{
					type:"direct"
				})
			}, //发起拼团
			onGroup: function(event) {
				this.$emit("pre-buy",{
					type:"open"
				})
			},
		}

	}
</script>

<style scoped>
	.goods-action-wrapper {
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 1000;
		height: 160rpx;
		width: 750rpx;
		display: flex;

		font-family: '思源黑体 ', '思源黑体', sans-serif;
		font-size: 28rpx;
	}

	.item {
		text-align: center;
		height: 160rpx;
		line-height: 160rpx;
		padding-top: 40rpx;
		padding-bottom: 34rpx;
	}

	.content {
		display: flex;
		flex-direction: column;
		height: 86rpx;
		text-align: center;
		align-items: center;
	}

	.text {
		height: 43rpx;
		line-height: 43rpx;
		text-align: center;
		font-size: 30rpx;
	}

	.gray {
		flex: 1;
		color: #666;
		background-color: #fff;
	}

	.cs {
		border-right: 1px solid #999;
	}

	.fav {}

	.fav.storeup {
		background-color: #ff6633;
		color: #fff;
	}

	.buy {
		width: 224rpx;
		background-color: #ffc80d;
		color: #fff;
	}

	.group {
		width: 240rpx;
		background-color: #ff6633;
		color: #fff;
	}
</style>
