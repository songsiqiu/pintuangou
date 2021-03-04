<template>
	<view class="u-flex user-box u-p-l-30 u-p-r-20 u-p-b-30">
		<view class="u-m-r-10">
			<u-avatar :src="userInfo.avatar" size="140"></u-avatar>
		</view>
		<view class="u-flex-1">
			
			<view class="u-font-18 u-p-b-20" v-if="!logged">
				<button 
				<!-- #ifdef MP-WEIXIN --> open-type="getUserInfo" @getuserinfo="onGetUserInfo" <!-- #endif -->
				<!-- #ifdef APP-PLUS --> @click="handleLogin" <!-- #endif -->
				class="u-reset-button" style="display: inline-block;">请登录</button>
			</view>
			
			<view class="u-font-18 u-p-b-20">{{userInfo.nickname}}</view>
			<view class="u-font-14 u-tips-color">{{userInfo.phone}}</view>
		</view>
		<view class="u-m-l-10 u-p-10">
			<u-icon name="scan" color="#969799" size="28"></u-icon>
		</view>
		<view class="u-m-l-10 u-p-10">
			<u-icon name="arrow-right" color="#969799" size="28"></u-icon>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			userInfo: Object
		},
		data() {
			return {
				logged: false
			}
		},
		methods: {
			handleLogin:function(){
				// uni.showToast({
				//     title: '登录微信',
				//     duration: 2000
				// });
				uni.login({
				  provider: 'weixin',
				  success: function (loginRes) {
				    console.log(loginRes.authResult);
				  }
				});
			},
			onGetUserInfo: function(e) {
				console.log(1231)
				let userInfo = e.detail.userInfo
			
				if (userInfo) {
					// 如果获取成功，将数据发送到服务器创建用户信息
					let data = {
						avatar: userInfo.avatarUrl,
						sex: userInfo.gender === 1 ? "男" : "女",
						nickname: userInfo.nickName
					}
			
					customerApi.create(data)
						.then(resp => {
							console.log(resp)
							// 将用户微信信息缓存在本地
							let {
								msg,
								data: id
							} = resp.data
							if (msg === "success") {
								data.id = id
							}
							console.log(data)
							wx.setStorageSync("userInfo", data)
						})
						.catch(err => {
							console.log(err)
						})
			
			
				}
			},
		},
		created: function() {
			// 获取用户的授权信息，判断用户是否曾经授权
			wx.getSetting({
				withSubscriptions: true,
				success: res => {
					console.log(res)
					this.logged = res.authSetting["scope.userInfo"]
					if (this.logged) {
						// 如果已经授权，本地应该保存有用户信息

					}
				}
			})
		}
	}
</script>

<style scoped lang="scss">
	page {
		background-color: #ededed;
	}

	.camera {
		width: 54px;
		height: 44px;

		&:active {
			background-color: #ededed;
		}
	}

	.user-box {
		background-color: #fff;
	}
</style>
