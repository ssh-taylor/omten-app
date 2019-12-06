import request from "@/utils/request";
// 同步微信部门
export function syncdepartment(dpid) {
  return request({
    url: "/learun/wechart/syncdepartment",
    method: "get",
    params: {
      departmentID: dpid
    }
  });
}
//   同步微信用户
export function syncuser(dpid) {
  return request({
    url: "/learun/wechart/syncuser",
    method: "get",
    params: {
      userID: dpid
    }
  });
}
//配置微信token
export function savetokenwe(CorpId, CorpSecret) {
  return request({
    url: "/learun/wechart/savetoken",
    method: "get",
    params: {
      CorpSecret: CorpSecret,
      CorpId: CorpId
    }
  });
}
