<template>
	<view class="">

		<u-swiper :list="activityPo.imgs" height="712"></u-swiper>
		<view>
			<view class="info">
				<text class="price">￥{{activityPo.activityPrice}}</text>
				<text class="del">￥{{activityPo.productPrice}}</text>
				<view class="count-desc">
					已拼
					<text class="count">{{activityPo.saled}}</text>
					件
				</view>
				<!-- #ifdef APP-PLUS -->
				<u-icon name="share" @click="handleShare"></u-icon>
				<!-- #endif -->
				<!-- #ifdef MP -->
				<u-button open-type="share" class="u-reset-button"><u-icon name="share"></u-icon></u-button>
				<!-- #endif -->
			</view>
		</view>
		<text class="detail-desc">{{activityPo.productDesc}}</text>
		<view class="group-tags">
			<view class="tag" v-for="(item,index) in activityPo.tags" :key="index">{{item}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			activityPo: Object
		},
		onShareAppMessage(res){
			if (res.from === 'button') {// 来自页面内分享按钮
			      console.log(res.target)
			    }
			    return {
			      title: '自定义分享标题',
			      path: '/pages/class/class'
			    }
		},
		methods:{
			handleShare:function(){
				// #ifdef APP-PLUS
				uni.share({
				    provider: "weixin",
				    scene: "WXSenceTimeline",
				    type: 0,
				    href: "http://uniapp.dcloud.io/",
				    title: "uni-app分享",
				    summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
				    imageUrl: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
				    success: function (res) {
				        console.log("success:" + JSON.stringify(res));
				    },
				    fail: function (err) {
				        console.log("fail:" + JSON.stringify(err));
				    }
				});
				// #endif
				// #ifdef MP
				uni.showShareMenu({
					title:"测试",
					content:"转发测试"
				})
				// #endif
			}
		}
	}
</script>

<style scoped>
	.info {
		display: flex;
	}

	.price {
		font-family: '思源黑体 ', '思源黑体', 'sans-serif';
		font-size: 36rpx;
		color: #ff6633;
		font-weight: 700;
	}

	.del {
		font-size: 24rpx;
		color: #ccc;
		text-decoration: line-through;
		height: 32rpx;
	}

	.count-desc {
		font-family: '思源黑体 ', '思源黑体', 'sans-serif';
		font-size: 24rpx;
		color: #333;
		margin-left: 36rpx;
		flex: 1;
	}

	.count {
		font-family: '思源黑体 ', '思源黑体', 'sans-serif';
		font-size: 36rpx;
		color: #ff6633;
		font-weight: 700;
		font-size: 24rpx;
	}

	.forward-btn {
		width: 32rpx;
		height: 32rpx;
		margin-right: 60rpx;
	}

	.detail-desc {
		margin-top: 20rpx;
		margin-bottom: 28rpx;
		font-family: '思源黑体 ', '思源黑体', sans-serif;
		font-weight: 700;
		font-size: 28rpx;
		color: #333333;
	}

	.group-tags {
		height: 64rpx;
		line-height: 64rpx;
		display: flex;
		font-size: 24rpx;
		color: #666;
	}

	.tag {
		margin-right: 40rpx;
		padding-left: 20rpx;
		position: relative;
	}

	.tag::before {
		position: absolute;
		left: -10rpx;
		top: 23rpx;
		content: '';
		display: block;
		width: 12rpx;
		height: 12rpx;
		border-radius: 50%;
		background-color: #ff6633;
	}
</style>
