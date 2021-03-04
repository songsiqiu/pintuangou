<template>
	<view class="product" @click="toDetail">
	  <view class="img">
	    <image class="image" :src="item.img"></image>
	    <text class="group-count">{{item.total}}人团</text>
	  </view>
	  <view class="title">{{item.productTitle}}</view>
	  <view class="info">
	    <text class="price">￥{{item.activityPrice}}</text>
	    <view class="count-desc">
	      已拼
	      <text class="count">{{item.saled}}</text>
	      件
	    </view>
	  </view>
	</view>
</template>

<script>
	export default{
		props:{
			item:Object
		},
		methods:{
			toDetail:function(){
				// 触发自定义事件
				// this.$emit("click",this.item)
				this.$u.route('/pages/group-detail/group-detail', {
					id: this.item.id
				});
			}
		}
	}
</script>

<style scoped>
	.product{
	  width: 314rpx;
	  height: 430rpx;
	  margin-bottom: 22rpx;
	}
	
	.img{
	  width: 312rpx;
	  height: 318rpx;
	  border-radius: 10rpx;
	  position: relative;
	  margin-bottom: 22rpx;
	}
	.image{
	  width: 312rpx;
	  height: 318rpx;
	}
	.group-count{
	  position: absolute;
	  left: 0;
	  bottom: 42rpx;
	  height: 40rpx;
	  line-height: 20rpx;
	  border-radius: 0 20rpx 20rpx 0;
	  box-sizing: border-box;
	  padding: 10rpx 22rpx;
	
	  background-color: #ff6633;
	
	  font-family: 'Arial Regular', 'Arial', sans-serif;
	  color: #ffffff;
	
	  font-size: 20rpx;
	}
	
	.title{
	  font-family: '思源黑体 ', '思源黑体', 'sans-serif';
	  font-size: 28rpx;
	  color: #333;
	  margin-bottom: 4rpx;
	}
	
	
	.info{
	  display: flex;
	}
	
	.price{
	  font-family: '思源黑体 ', '思源黑体', 'sans-serif';
	  font-size: 36rpx;
	  color: #ff6633;
	  font-weight: 700;
	  flex: 1;
	}
	.count-desc{
	  font-family: '思源黑体 ', '思源黑体', 'sans-serif';
	  font-size: 24rpx;
	  color: #333;
	}
	.count{
	  font-family: '思源黑体 ', '思源黑体', 'sans-serif';
	  font-size: 36rpx;
	  color: #ff6633;
	  font-weight: 700;
	  font-size: 24rpx;
	}
</style>
