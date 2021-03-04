let request = require("../utils/request")

// 根据客户id查询客户搜索记录
function byCustomerId(data){
  return request.post("/searchhistory",data)
}



exports.byCustomerId = byCustomerId