<template>
	<view  class="container u-flex u-flex-wrap" style="justify-content: space-between;">
		<pin-product v-for="(item,index) in list" :key="index" :item="item" @click="toDetail"></pin-product>
	</view>
</template>

<script>
	let activityApi = require("@/api/activity.js")
	
	export default {
		data() {
			return {
				list:[]
			}
		},
		methods: {
			toDetail:function(item){
				console.log(item)
			}
		},
		onLoad(options) {
			console.log(options)
			activityApi.search(options)
			.then(resp=>{
				let list = resp.data.data
				list.forEach(item=>{
				        let imgs = item.imgs.split(";");
				        if(imgs.length>0){
				          item.img = imgs[0]
				        }
				      })
				this.list = list
			})
			.catch(err=>{
				console.log(err)
			})
			
		}
	}
</script>

<style>

</style>
