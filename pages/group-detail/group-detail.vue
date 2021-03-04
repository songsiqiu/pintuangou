<template>
	<view class="container">
		<pin-activity v-if="groupDetail" :activityPo="groupDetail.activityPo"></pin-activity>
		<pin-grouping v-if="groupDetail" :list="groupDetail.groupList" @pre-buy="handlePreBuy"></pin-grouping>
		<pin-goods-action v-if="groupDetail"  @pre-buy="handlePreBuy"
		:activityPrice="groupDetail.activityPo.activityPrice" :productPrice="groupDetail.activityPo.productPrice" :activityId="groupDetail.activityPo.id"></pin-goods-action>
		<pin-group-choice :show="isShow" :product="product" @close-popup="handleClosePopup"></pin-group-choice>
		
	</view>
</template>

<script>
	let activityApi = require('@/api/activity.js')
	export default {
		data() {
			return {
				groupDetail:null,
				product:null,
				isShow:false,
			}
		},
		methods: {
			handlePreBuy:function(type){
				console.log(this.groupDetail.activityPo)
				let {id,imgs,activityPrice} = this.groupDetail.activityPo;
				this.product = {
					id,
					img:imgs[0],
					price:activityPrice,
					type
				}
				console.log(this.product)
				this.isShow = true
			},
			handleClosePopup:function(){
				this.isShow = false
			}
		},
		onLoad(options) {
			activityApi.byId(options)
			.then(resp=>{
				console.log(resp)
				let data = resp.data.data
				if(data.activityPo.imgs){
					data.activityPo.imgs = data.activityPo.imgs.split(";")
				}
				if(data.activityPo.tags){
					data.activityPo.tags = data.activityPo.tags.split(";")
				}
				this.groupDetail = data;
				// 设置页码标题为产品的标题
				uni.setNavigationBarTitle({
				    title: data.activityPo.productTitle
				});
			})
			
			
		}
	}
</script>

<style>

</style>
