const mixin ={
  methods: {
  	getLocalUserInfo: function() {
  		let userInfo = uni.getStorageSync("userInfo");
  		let customerId = userInfo.id || 55;
  		return customerId
  	}
  }
}

export default mixin;