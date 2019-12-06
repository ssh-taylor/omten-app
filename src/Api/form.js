import request from "@/utils/request";

// 保存自定义表单
export function saveFormScheme(keyvalue, scheme) {
  const postData = {
    keyValue: keyvalue,
    schemeInfo: scheme
  };
  return request({
    url: "/learun/adms/codegenerator/savecustomform",
    method: "post",
    params: postData
  });
}
//根据目录id获取表单实体
export function getFormScheme(keyvalue) {
  return request({
    url: "/learun/adms/custmer/getschemebymoudle",
    method: "get",
    params: keyvalue
  });
}
// 数据库连接
export function getData(id, str, type) {
  const getData = {
    keyValue: id,
    connection: str,
    dbType: type
  };
  return request({
    url: "/learun/adms/databaselink/test",
    method: "get",
    params: getData
  });
}

// 获取自定义表单业务数据列表
export function getinstancelist(schemeInfoId) {
  return request({
    url: "/learun/adms/custmer/getinstancelist",
    method: "get",
    params: {
      schemeInfoId,
      pagination: "",
      queryJson: ""
    }
  });
}
// 获取自定义表单分页列表
export function custmerTableList(pagination, queryJson) {
  return request({
    url: "/learun/adms/custmer/pagelist",
    method: "get",
    params: {
      pagination: pagination,
      queryJson: JSON.stringify(queryJson)
    }
  });
}
// 根据id获取字段结构列表
export function getfiledsbyformid(schemeInfoId) {
  return request({
    url: "/learun/adms/codegenerator/getfiledsbyformid",
    method: "get",
    params: schemeInfoId
  });
}
//数据表----------
// 获取数据表列表
export function getDataFrom(Id, Name) {
  const getData = {
    databaseLinkId: Id,
    tableName: Name
  };
  return request({
    url: "/learun/adms/databasetable/tablelist",
    method: "get",
    params: getData
  });
}
// 获取数据表字段列表
export function getFileList(id, name) {
  const getData = {
    databaseLinkId: id,
    tableName: name
  };
  return request({
    url: "/learun/adms/databasetable/tablefiledlist",
    method: "get",
    params: getData
  });
}
//给定查询语句查询字段
export function getsqlcolnamedata(databaseLinkId, strSql) {
  return request({
    url: "/learun/adms/databasetable/getsqlcolname",
    method: "get",
    params: {
      databaseLinkId: databaseLinkId,
      strSql: strSql
    }
  });
}
//数据表----------
//(没有)
export function sql(keyvalue) {
  return request({
    url: "/learun/adms/custform/sql",
    method: "get",
    params: keyvalue
  });
}
//获取更新表单数据的sql
/* export function sql(keyvalue) {
  return request({
    url: "/learun/adms/codegenerator/getsqlforupdatatabledata",
    method: "post",
    params: keyvalue
  });
} */
