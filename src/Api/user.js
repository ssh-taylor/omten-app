import request from "@/utils/request";
import md5 from "js-md5";
import settings from "@/utils/settings";
// 用户登陆
export function login(data) {
  const postdata = {
    username: data.username,
    password: md5(data.password)
  };
  return request({
    url: "/learun/adms/user/login",
    method: "post",
    params: postdata
  });
}
// 修改密码
export function modifypw(newpassword, oldpassword) {
  return request({
    url: "/learun/adms/user/modifypw",
    method: "post",
    params: { newpassword: md5(newpassword), oldpassword: md5(oldpassword) }
  });
}
// 退出登陆
export function logout() {
  return request({
    url: "/learun/adms/user/outlog",
    method: "get"
  });
}
// 获取用户信息
export function getInfo() {
  return request({
    url: "/learun/adms/user/info",
    method: "get"
  });
}
//查询用户信息列表
export function getuserlist(dpid, keyword) {
  return request({
    url: "/learun/adms/user/query",
    method: "get",
    params: {
      companyID: settings.companyid,
      departmentID: dpid,
      keyword: keyword
    }
  });
}
// 获取用户信息列表
export function getuserlistss() {
  return request({
    url: "/learun/adms/user/list",
    method: "get",
    params: settings.companyid
  });
}
// 上传头像
export function uploadfile(keyValue) {
  return request({
    url: "/learun/adms/usercenter/uploadfile",
    method: "post",
    params: keyValue
  });
}
// 获取头像
export function getImg(data) {
  return request({
    url: "/learun/adms/user/img",
    method: "get",
    params: data
  });
}
//停用用户
export function deluser(userid) {
  return request({
    url: "/learun/adms/user/delete",
    method: "get",
    params: userid
  });
}
// 保存用户
export function saveUser(userid, entity) {
  entity.F_CompanyId = settings.companyid;
  return request({
    url: "/learun/adms/user/save",
    method: "post",
    params: {
      userId: userid,
      UserJson: JSON.stringify(entity)
    }
  });
}
//账号是否重复
export function existaccount(keyValue, F_Account) {
  return request({
    url: "/learun/adms/user/existaccount",
    method: "post",
    params: {
      keyValue: keyValue,
      F_Account: F_Account
    }
  });
}
//导出账号列表
export function exportuserlist() {
  return request({
    url: "/learun/adms/user/exportuserlist",
    method: "get"
  });
}
//修改账号状态
export function updateuserstate(userid, state) {
  return request({
    url: "/learun/adms/user/updatestate",
    method: "get",
    params: { keyValue: userid, state: state }
  });
}

// 获取验证码
export function verifycode() {
  return request({
    url: "/learun/adms/usercenter/verifycode",
    method: "get"
  });
}

//重置密码
export function resetpwd(keyValue) {
  return request({
    url: "/learun/adms/usercenter/resetpassword",
    method: "get",
    params: keyValue
  });
}
// 保存用户关系
export function saveuser(objectId, category, userIds) {
  return request({
    url: "/learun/userrelation/save",
    method: "post",
    params: {
      objectId,
      category,
      userIds
    }
  });
}
// 根据关系主键获取用户主键列表信息
export function getuseridlist(Keyvalue) {
  return request({
    url: "/learun/userrelation/getuseridlist",
    method: "get",
    params: Keyvalue
  });
}
//根据用户id和类型获取关系主键列表
export function getobjectidlist(userid, category) {
  return request({
    url: "/learun/userrelation/getobjectidlist",
    method: "get",
    params: {
      userid: userid,
      category: category
    }
  });
}
