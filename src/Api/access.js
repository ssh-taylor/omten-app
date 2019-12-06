import request from "@/utils/request";
import settings from "@/settings";
//设置人员数据权限
export function saveuseraccess(schemeid, keyValue, userid) {
  return request({
    url: "/learun/adms/custmer/saveuseraccess",
    method: "post",
    params: {
      schemeid: schemeid,
      keyValue: keyValue,
      userid: userid
    }
  });
}
//设置部门数据权限
export function savedptaccess(schemeid, keyValue, dptid) {
  return request({
    url: "/learun/adms/custmer/savedptaccess",
    method: "post",
    params: {
      schemeid: schemeid,
      keyValue: keyValue,
      dptid: dptid
    }
  });
}
// 删除权限
export function remove(keyValue) {
  return request({
    url: "/learun/adms/access/delete",
    method: "get",
    params: keyValue
  });
}
// 获取权限实体
export function getentity(Keyvalue) {
  return request({
    url: "/learun/adms/access/getentity",
    method: "get",
    params: Keyvalue
  });
}
// 保存权限
export function savelist(Keyvalue, AccessEntity) {
  return request({
    url: "/learun/adms/access/savelist",
    method: "get",
    params: {
      Keyvalue,
      AccessEntity
    }
  });
}
// 批量保存权限
export function saveAccess(AccessEntity) {
  return request({
    url: "/learun/adms/access/savelist",
    method: "get",
    params: AccessEntity
  });
}
//获取权限分页
export function getlist() {
  const pagination = {
    rows: 100, // 每页行数
    page: 1, // 当前页
    records: 0, // 总记录数
    total: 0 // 总页数
  };
  return request({
    url: "/learun/adms/access/getpagelist",
    method: "get",
    params: {
      pagination: JSON.stringify(pagination)
    }
  });
}
// 根据角色获取权限列表
export function getlistbyruleids(Keyvalue) {
  return request({
    url: "/learun/adms/access/getlistbyruleids",
    method: "get",
    params: JSON.stringify(Keyvalue)
  });
}
