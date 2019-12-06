import request from "@/utils/request";
//保存时段过滤
export function getsavesss(keyValue, filterTimeEntity) {
  return request({
    url: "/learun/adms/filtertime/save",
    method: "post",
    params: {
      keyValue: keyValue,
      filterTimeEntity: filterTimeEntity
    }
  });
}
//获取时段过滤实体
export function gettimes(Keyvalue) {
  return request({
    url: "/learun/adms/filtertime/get",
    method: "get",
    params: Keyvalue
  });
}
//删除时段过滤
export function getfiltertdelete(Keyvalue) {
  return request({
    url: " /learun/adms/filtertime/delete",
    method: "get",
    params: Keyvalue
  });
}
