import request from "@/utils/request";
//查询编码规则列表
export function getlist(keyvalue) {
  return request({
    url: "/learun/adms/coderule/query",
    method: "get",
    params: keyvalue
  });
}
//保存编码规则
export function saveform(keyvalue, entity) {
  return request({
    url: "/learun/adms/coderule/save",
    method: "post",
    params: {
      keyValue: keyvalue,
      entity: entity
    }
  });
}
//删除编码实体
export function deleteform(keyvalue) {
  return request({
    url: "/learun/adms/coderule/delete",
    method: "get",
    params: keyvalue
  });
}
//获取编码规则实体
export function coderuleget(keyvalue) {
  return request({
    url: "/learun/adms/coderule/get",
    method: "get",
    params: keyvalue
  });
}
// 根据规则id获取最新编码
export function getcode(moduleid) {
  return request({
    url: "/learun/adms/coderule/code",
    method: "get",
    params: moduleid
  });
}
//编码是否已存在
export function existencode(keyvalue, name) {
  return request({
    url: "/learun/adms/coderule/existencode",
    method: "get",
    params: {
      keyValue: keyvalue,
      Name: name
    }
  });
}
//编码规则名称是否已存在
export function existfullname(keyvalue, name) {
  return request({
    url: "/learun/adms/coderule/existfullname",
    method: "get",
    params: {
      keyValue: keyvalue,
      Name: name
    }
  });
}
