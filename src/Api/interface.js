import request from "@/utils/request";
import settings from "@/settings";
//保存接口
export function interfacesave(Keyvalue, entity) {
  return request({
    url: "/learun/adms/interface/save",
    method: "post",
    params: {
      Keyvalue: Keyvalue,
      entity: entity
    }
  });
}
//删除接口
export function interfacedelete(Keyvalue) {
  return request({
    url: "/learun/adms/interface/delete",
    method: "get",
    params: Keyvalue
  });
}
//获取接口实体
export function interfaceget(Keyvalue) {
  return request({
    url: "/learun/adms/interface/get",
    method: "get",
    params: Keyvalue
  });
}
//获取接口列表
export function interfacelist() {
  return request({
    url: "/learun/adms/interface/list",
    method: "get"
  });
}
//获取接口树
export function interfacetree() {
  return request({
    url: "/learun/adms/interface/tree",
    method: "get"
  });
}
//获取接口分页列表
export function interfacepagelist(pagination, keyword) {
  return request({
    url: "/learun/adms/interface/pagelist",
    method: "get",
    params: {
      pagination: pagination,
      keyword: keyword
    }
  });
}
