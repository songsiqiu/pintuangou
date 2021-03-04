let request = require("../utils/request")

function byId(data){
  return request.get("/api/activity/"+data.id)
}

// 热门搜索
function hotSearch(){
  return request.get("/api/activity/hot")
}

function search(data){
  return request.get(`/api/activity/${data.key}/${data.customerId}`)
}

exports.byId = byId
exports.search = search
exports.hotSearch = hotSearch