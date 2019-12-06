import request from "@/utils/request";
//查询菜单
export function querymodule(keyValue) {
  return request({
    url: "/learun/systemmodule/querymodule",
    method: "get",
    params: keyValue
  });
}
//获取菜单
export function getmodulelist() {
  return request({
    url: "/learun/systemmodule/getmodulelist",
    method: "get"
  });
}
// 获取功能实体
export function getmoduleentity() {
  return request({
    url: "/learun/systemmodule/getmoduleentity",
    method: "get",
    params: {
      Keyvalue: settings.companyid
    }
  });
}
//删除功能
export function deleteentity(keyValue) {
  return request({
    url: "/learun/systemmodule/delete",
    method: "get",
    params: keyValue
  });
}
//保存功能实体
export function saveentity(keyvalue, entity) {
  return request({
    url: "/learun/systemmodule/savesingleentity",
    method: "post",
    params: { keyValue: keyvalue, entity: entity }
  });
}

// 获得模板数据(无)
export function getmoduledata(moduleid) {
  return request({
    url: "/learun/systemmodule/getmoduledata",
    method: "get",
    params: moduleid
  });
}

//（无）
export function getmoduletree() {
  return request({
    url: "/learun/systemmodule/tree",
    method: "get"
  });
}
