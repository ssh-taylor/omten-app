import request from "@/utils/request";
// 测试连接
export function gettest(keyValue, connection, dbType) {
  return request({
    url: "/learun/adms/databaselink/test",
    method: "get",
    params: {
      keyValue: keyValue,
      connection: connection,
      dbType: dbType
    }
  });
}

// 保存连接实体
export function getsave(keyValue, DatabaseLinkEntity) {
  return request({
    url: "/learun/adms/databaselink/save",
    method: "post",
    params: {
      keyValue: keyValue,
      entity: DatabaseLinkEntity
    }
  });
}
// 获取连接列表
export function getlist() {
  return request({
    url: "/learun/adms/databaselink/list",
    method: "get"
  });
}
// 查询连接
export function getquery(keyValue) {
  return request({
    url: "/learun/adms/databaselink/query",
    method: "get",
    params: keyValue
  });
}
// 删除连接
export function getdelete(keyValue) {
  return request({
    url: "/learun/adms/databaselink/delete",
    method: "get",
    params: keyValue
  });
}
// 获取连接树(无)
export function gettree() {
  return request({
    url: "/learun/adms/databaselink/tree",
    method: "get"
  });
}
