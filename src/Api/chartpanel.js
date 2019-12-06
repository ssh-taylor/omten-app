import request from "@/utils/request";
// 保存图表实体
export function saveChartPanel(keyvalue, scheme) {
  const postData = {
    keyValue: keyvalue,
    entity: scheme
  };
  return request({
    url: "/learun/adms/chartpanel/save",
    method: "post",
    params: postData
  });
}
//获取图表实体
export function getChartPanel(keyvalue) {
  return request({
    url: "/learun/adms/chartpanel/getentity",
    method: "get",
    params: keyvalue
  });
}
//获取图表列表
export function getChartPanelList() {
  return request({
    url: "/learun/adms/chartpanel/getlist",
    method: "get"
  });
}

// 删除图表实体
export function getChartDatadelete(keyvalue) {
  return request({
    url: "/learun/adms/chartpanel/delete",
    method: "get",
    params: keyvalue
  });
}
// 获取图表数据
export function getChartData(keyvalue) {
  return request({
    url: "/learun/adms/chartpanel/getdata",
    method: "get",
    params: keyvalue
  });
}
