<template>
	<u-popup  v-model="show" @close="handleClose" mode="bottom" closeable>
		<view class="choice-wrapper">
			<view class="choice-result u-m-b-40">
				<image :src="product.img" mode="aspectFill" class="product-img"></image>
				<view class="choice-details u-m-l-60">
					<text class="price">￥{{product.price}}</text>
					<view class="spec-all">
						<text>已选</text>
						<text v-for="item in choices" class="u-m-r-10">{{item}}</text>
					</view>
					<text v-if="stockStatus">{{stockStatus}}</text>
				</view>
			</view>
			<view class="choice-item u-m-b-30" v-for="(value,key) in choiceMap" :key="key">
				<text>{{key}}</text>
				<view class="colors">
					<text 
					 class="u-m-r-10" 
					v-for="(item,index) in value" :key="index" 
					@click="handleSelected(item,index)"
					:ref="item.value+'-'+index"
					>
					{{item.value}}</text>
				</view>
			</view>
			<view class="m200">
				<u-row gutter="16">
					<u-col span="4">
						<text>购买数量</text>
					</u-col>
					<u-col span="8">
						<u-number-box v-model="productCount" @change="valChange" :max="2"></u-number-box>
					</u-col>
				</u-row>
			</view>
			
			<view class="submit-btn" @click="handleConfirm">
				确定
			</view>
		</view>
	</u-popup>
</template>

<script>
	import userInfo from "@/mixins/userInfo.js"
	let mixins = [userInfo]
	
	let activitySku = require('@/api/activitySku.js')
	export default{
		mixins,
		props:{
			show:{
				type:Boolean,
				default:true
			},
			product:{
				type:Object				
			}
		},
		watch:{
			product:function(val){
				if(!val){
					return
				}
				console.log(this.product)
				activitySku.activitySku({activityId:this.product.id})
				.then(resp=>{
					let list = resp.data.data;
					// console.log(list)
					// 将数组整理为object
					let choiceMap = {};
					list.forEach((item)=>{
						// 使用item的name作为key,所有name属性相同的item属于一个数组
						if(choiceMap.hasOwnProperty(item.name)){
							choiceMap[item.name].push(item)
						}else{
							choiceMap[item.name]=[item]
						}
					})
					console.log(choiceMap)
					this.choiceMap = choiceMap
					
				})
				.catch(err=>{
					console.log(err)
				})
			}
		},
		data:function(){
			return {
				choices:{},
				choiceMap:null,
				mapData:null,
				stockStatus:"",
				productCount:0,
				isSelected:false
			}
		},
		methods:{
			valChange:function(event){
				if(this.productCount>=2){
					uni.showToast({
					    title: '最多只能购买2件',
					    duration: 2000
					});
					this.productCount = 2
				}
				console.log(this.productCount)
			},
			handleClose:function(){
				this.$emit("closePopup")
			},
			handleSelected:function(item,index){
				if(item.stock == 0){
					this.stockStatus = "库存不足"
					// delete this.choices[item.name]
					return
				}else{
					this.stockStatus = "库存充足"
				}
				let selected = {}
				selected[item.name] = item.value
				this.choices = {...this.choices,...selected}
				console.log(item.value+"-"+index)
				
			},
			handleConfirm:function(){
				let shopCart = {
					customerId:this.getLocalUserInfo(),//当前用户
					activityId:this.product.id,//团购活动id
					groupId:this.product.groupId,//团购id
					price:this.product.price,//团购价格，如果没有参团，则为非活动价格
					productCount:this.productCount,//购买数量
					productAmountTotal:this.product.price * this.productCount,
					// ...this.choices
					params:[]//规格
				}
				for(let key in this.choices){
					let param = {}
					param.name = key
					param.value = this.choices[key]
					shopCart.params.push(param)
				}
				console.log(shopCart)
				
			}
		},
		created(){
			console.log(12)
			
		}
		
	}
</script>

<style  lang="scss" scoped>
	.choice-wrapper{
		margin-top: 80rpx;
		padding: 40rpx;
	}
	.choice-result{
		display: flex;
	}
	.product-img{
		width: 160rpx;
		height: 160rpx;
	}
	.choice-details{
		display: flex;
		flex-direction: column;
		flex: 1;
	}
	.price{
		color: #ff6633;
	}
	.u-tag{
		margin-right: 10rpx;
	}
	.u-button{
		width: 100%;
		height: 160rpx;
		background-color: #ff6633;
		color: #fff;
	}
	.m200{
		margin-bottom: 200rpx;
	}
	.submit-btn{
		position: fixed;
		left: 0;
		right: 0;
		bottom:0;
		height: 160rpx;
		line-height: 160rpx;
		background-color: #ff6633;
		color: #fff;
		text-align: center;
		font-size: 36rpx;
		font-family: '思源黑体 ', '思源黑体', sans-serif;
	}
</style>
