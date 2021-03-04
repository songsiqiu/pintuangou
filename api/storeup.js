// 收藏相关接口
let request = require("../utils/request")

// 收藏
function create(data){
  return request.post("/storeup/save",data)
}

// 取消收藏
function cancel(data){
  return request.post("/storeup/canel",data)
}

//查询收藏
function hasCollect(data){
  return request.post("/storeup/hasCollect",data)
}

// 取消收藏
function cancel(data){
  return request.post("/storeup/cancel",data)
}

exports.create = create
exports.cancel = cancel
exports.hasCollect = hasCollect