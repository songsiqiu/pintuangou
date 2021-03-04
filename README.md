# 参团、拼团、购买业务
	用户在拼团详情页面点击参团、拼团、购买按钮都是打开选择商品的组件
	在打开组件的时候需要根据当前拼团活动的activityId来查询当前活动可选的商品
	当用户选择好商品后提交订单，根据用户点击的按钮不同，提交订单额处理方式不同
# 

# 我的首页
	用户信息
		未登录状态：显示默认头像、显示登录按钮
			当用户点击登录按钮，弹出请求用户信息微信授权弹窗
			要求小程序、app实现
		登录状态：显示用户微信头像、显示用户昵称、如果已经绑定电话显示电话否则显示请绑定电话
# 分类
# 消息
# 首页
# 拼团详情
## 独立购买
	直接下单，需要提交:customerId,productId,
## 拼团
## 参团
# 使用uview
 1. 在hbuilder中安装终端：菜单的视图->显示终端，安装
 2. 使用npm初始化项目
 3. 安装 uview的提示配置项目
 3.1 安装 python,解压到C:\Program Files\python-3.8.7-embed-amd64
 3.2 npm install uview-ui
 3.3 npm i node-sass sass-loader -D
 3.4 在main.js中添加
 ```
 import uView from "uview-ui";
 Vue.use(uView);
 ```
 3.5 在uni.scss中
 ```
 @import 'uview-ui/theme.scss';
 ```
 3.6 引入uView基础样式,在App.vue中首行的位置引入，注意给style标签加入lang="scss"属性
 ```
 <style lang="scss">
 	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
 	@import "uview-ui/index.scss";
 </style>
 ```
 3.7 配置easycom组件模式,在pages.json中添加
 ```
 "easycom": {
 		"^u-(.*)": "uview-ui/components/u-$1/u-$1.vue"
 	},
 ```
 3.8 然后就可以按手册使用组件了