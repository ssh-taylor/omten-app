import request from "@/utils/request";
// 保存报表实体
export function saveReportScheme(keyvalue, scheme) {
  const postData = {
    keyValue: keyvalue,
    entity: scheme
  };
  return request({
    url: "/learun/adms/cusreport/savereport",
    method: "post",
    params: postData
  });
}
//获取报表实体
export function getReportScheme(keyvalue) {
  return request({
    url: "/learun/adms/cusreport/getreport",
    method: "get",
    params: keyvalue
  });
}
//获取报表列表
export function getReportList() {
  return request({
    url: "/learun/adms/cusreport/getlist",
    method: "get"
  });
}

//删除报表实体
export function deleteScheme(keyvalue) {
  return request({
    url: "/learun/adms/cusreport/delete",
    method: "get",
    params: keyvalue
  });
}
