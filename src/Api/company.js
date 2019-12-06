import request from "@/utils/request";
//获取公司详情列表
export function getlist() {
  return request({
    url: "/learun/adms/company/list",
    method: "get"
  });
}
//获取公司信息
export function getentitys(companyId) {
  return request({
    url: "/learun/adms/company/getentity",
    method: "get",
    method: { companyId: companyId }
  });
}
// 停用公司
export function deleteEntity(companyid) {
  return request({
    url: "/learun/adms/company/deleteentity",
    method: "get",
    params: companyid
  });
}

// 保存公司
export function saveEntity(companyJson, keyValue) {
  return request({
    url: "/learun/adms/company/save",
    method: "post",
    params: {
      companyJson: JSON.stringify(companyJson),
      keyValue: keyValue
    }
  });
}

//(无)
export function getcompanytree(companyid) {
  return request({
    url: "/learun/adms/company/gettree",
    method: "get",
    params: companyid
  });
}
//(无)
export function getCompanyMap() {
  return request({
    url: "/learun/adms/company/map",
    method: "get"
  });
}
