import request from "@/utils/request";
// 获取日志列表
export function getpagelist(queryJson, paginationobj) {
  return request({
    url: "/learun/log/getpagelist",
    method: "get",
    params: {
      queryJson: JSON.stringify(queryJson),
      paginationobj: paginationobj
    }
  });
}
// 清空日志
export function getremovelog(categoryId, keepTime) {
  return request({
    url: "/learun/log/removelog",
    method: "get",
    params: {
      categoryId: categoryId,
      keepTime: keepTime
    }
  });
}
//获取个人日志
export function getpagelistbymy(queryJson, paginationobj) {
  return request({
    url: "/learun/log/getpagelistbymy",
    method: "get",
    params: {
      queryJson: JSON.stringify(queryJson),
      paginationobj: paginationobj
    }
  });
}
//保存访问日志
export function visitmodules(moduleName, moduleUrl) {
  return request({
    url: "/learun/log/visitmodules",
    method: "get",
    params: {
      moduleName: moduleName,
      moduleUrl: moduleUrl
    }
  });
}
