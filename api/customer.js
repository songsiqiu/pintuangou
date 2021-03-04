let request = require("../utils/request")

// 新建用户
function create(data){
  return request.post("/customer/save",data)
}

exports.create = create