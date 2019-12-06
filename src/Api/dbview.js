import request from "@/utils/request";
// 保存视图实体
export function dbviewsave(keyValue, DbViewEntity) {
  return request({
    url: "/learun/adms/dbview/save",
    method: "post",
    params: {
      keyValue: keyValue,
      entity: DbViewEntity
    }
  });
}
// 获取视图列表
export function dbviewlist(queryJson) {
  return request({
    url: "/learun/adms/dbview/list",
    method: "get",
    params: queryJson
  });
}
// 查询视图分页列表
export function dbviewquery(pagination, queryJson) {
  return request({
    url: "/learun/adms/dbview/query",
    method: "get",
    params: {
      pagination: JSON.stringify(pagination),
      queryJson: JSON.stringify(queryJson)
    }
  });
}

// 删除视图实体
export function dbviewdelete(keyValue) {
  return request({
    url: "/learun/adms/dbview/delete",
    method: "get",
    params: keyValue
  });
}
// 获取视图实体
export function dbviewgetentity(keyValue) {
  return request({
    url: "/learun/adms/dbview/getentity",
    method: "get",
    params: keyValue
  });
}
//获取视图数据带条件
export function dbviewgetentitydata(keyvalue, wherestring) {
  return request({
    url: "/learun/adms/dbview/getdata",
    method: "get",
    params: {
      keyvalue: keyvalue,
      wherestring: JSON.stringify(wherestring)
    }
  });
}
