import request from "@/utils/request";
//保存ip过滤
export function getsavequerysave(keyValue, FilterIPEntity) {
  return request({
    url: "/learun/adms/filterip/save",
    method: "post",
    params: {
      keyValue: keyValue,
      filterIPEntity: FilterIPEntity
    }
  });
}
//获取ip过滤实体
export function getfilteripte(Keyvalue) {
  return request({
    url: "/learun/adms/filterip/get",
    method: "get",
    params: Keyvalue
  });
}
//获取ip过滤列表
export function getgetappformlistss(objectId, visitType) {
  return request({
    url: "/learun/adms/filterip/list",
    method: "get",
    params: {
      objectId: objectId,
      visitType: visitType
    }
  });
}

//删除ip过滤
export function getfilteriptedelete(Keyvalue) {
  return request({
    url: "/learun/adms/filterip/delete",
    method: "get",
    params: Keyvalue
  });
}
