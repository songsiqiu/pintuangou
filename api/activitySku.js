let request = require("../utils/request")

function activitySku(data){
  return request.post("/activitysku",data)
}


exports.activitySku = activitySku
