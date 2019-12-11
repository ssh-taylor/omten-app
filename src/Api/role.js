import request from "@/utils/request";
import settings from "@/utils/settings";
//获取角色列表
export function RoleList() {
  return request({
    url: "/learun/adms/role/list",
    method: "get",
    params: ""
  });
}
//获取角色用户列表
export function getUserIdList(Keyvalue) {
  return request({
    url: "/learun/userrelation/getuseridlist",
    method: "get",
    params: Keyvalue
  });
}
// 保存角色
export function saveRole(Keyvalue, entity) {
  return request({
    url: "/learun/adms/role/save",
    method: "post",
    params: {
      Keyvalue,
      entity
    }
  });
}
// 删除角色
export function removeRole(Keyvalue) {
  return request({
    url: "/learun/adms/role/delete",
    method: "get",
    params: {
      Keyvalue
    }
  });
}
