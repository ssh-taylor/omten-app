import request from "@/utils/request";
import axios from "axios";
// 获取发件列表
export function getsendlist(pagination, queryJson) {
  /*  const pagination = {
          rows: 100, // 每页行数
           page: 1, // 当前页
           records: 0, // 总记录数
           total: 0 // 总页数
         }; */
  return request({
    url: "/learun/adms/email/getsendlist",
    method: "get",
    params: {
      pagination: JSON.stringify(pagination),
      queryJson: JSON.stringify(queryJson)
    }
  });
}
// 获取收件列表
export function getreceivelist(pagination, queryJson) {
  /*  const pagination = {
    rows: 500, // 每页行数
    page: 1, // 当前页
    records: 0, // 总记录数
    total: 0 // 总页数
  }; */
  return request({
    url: "/learun/adms/email/getreceivelist",
    method: "get",
    params: {
      pagination: JSON.stringify(pagination),
      queryJson: JSON.stringify(queryJson)
    }
  });
}
// 获取虚拟删除收件列表
export function getreceivevirtualdeletelist(pagination, queryJson) {
  /*   const pagination = {
    rows: 100, // 每页行数
    page: 1, // 当前页
    records: 0, // 总记录数
    total: 0 // 总页数
  }; */
  return request({
    url: "/learun/adms/email/getreceivevirtualdeletelist",
    method: "get",
    params: {
      pagination: JSON.stringify(pagination),
      queryJson: JSON.stringify(queryJson)
    }
  });
}
// 获取配置列表
export function getconfiglist(queryJson) {
  return request({
    url: "/learun/adms/email/getconfiglist",
    method: "get",
    params: { queryJson: queryJson }
  });
}
// 获取当前用户配置列表
export function getcurrentconfiglist(queryJson) {
  return request({
    url: "/learun/adms/email/getcurrentconfiglist",
    method: "get",
    params: queryJson
  });
}
//获取发件实体
export function emailgetsendentity(keyValue) {
  return request({
    url: "/learun/adms/email/getsendentity",
    method: "get",
    params: keyValue
  });
}
// 获取收件实体
export function getreceiveentity(keyValue) {
  return request({
    url: "/learun/adms/email/getreceiveentity",
    method: "get",
    params: keyValue
  });
}
// 获取配置实体
export function getconfigentitys(keyValue) {
  return request({
    url: "/learun/adms/email/getconfigentity",
    method: "get",
    params: keyValue
  });
}
// 收邮件
export function getmail(keyValue) {
  return request({
    url: "/learun/adms/email/getmail",
    method: "get",
    params: keyValue
  });
}
// 发邮件
export function getsendmail(configID, EmailSendEntity) {
  return request({
    url: "/learun/adms/email/sendmail",
    method: "post",
    params: {
      configID: configID,
      EmailSendEntity: EmailSendEntity
    }
  });
}
// 保存发件
export function getsaveconfigentitys(keyValue, EmailSendEntity) {
  return request({
    url: "/learun/adms/email/savesendentity",
    method: "post",
    params: {
      keyValue: keyValue,
      sendEntity: EmailSendEntity
    }
  });
}
// 保存收件
export function getssavereceiveentity(keyValue, EmailReceiveEntity) {
  return request({
    url: "/learun/adms/email/savereceiveentity",
    method: "post",
    params: {
      keyValue: JSON.stringify(keyValue),
      receiveEntity: JSON.stringify(EmailReceiveEntity)
    }
  });
}
// 保存配置
export function getsaveconfigentity(keyValue, EmailConfigEntity) {
  return request({
    url: "/learun/adms/email/saveconfigentity",
    method: "post",
    params: {
      keyValue: keyValue,
      configEntity: EmailConfigEntity
    }
  });
}
// 删除配置
export function deleteconfigentity(keyValue) {
  return request({
    url: "/learun/adms/email/deleteconfigentity",
    method: "get",
    params: keyValue
  });
}
// 删除邮件 type	类型 1发件2收件
export function getrecedelete(keyValue, type) {
  return request({
    url: "/learun/adms/email/delete",
    method: "get",
    params: { keyValue: keyValue, type: type }
  });
}
// 更改收件虚拟删除状态
export function changereceivedeletemark(keyValue, deleteMark) {
  return request({
    url: "/learun/adms/email/changereceivedeletemark",
    method: "get",
    params: { keyValue: keyValue, deleteMark: deleteMark }
  });
}
// 获取邮件文件夹列表
export function getclassifylist() {
  return request({
    url: "/learun/adms/email/getclassifylist",
    method: "get"
  });
}
// 获取邮件文件夹树
export function getclassifytree() {
  return request({
    url: "/learun/adms/email/getclassifytree",
    method: "get"
  });
}
//获取邮件文件夹实体
export function getclassifyentity() {
  return request({
    url: "/learun/adms/email/getclassifyentity",
    method: "get"
  });
}
// 删除邮件文件夹实体
export function deleteclassifyentity(keyValue) {
  return request({
    url: "/learun/adms/email/deleteclassifyentity",
    method: "get",
    params: keyValue
  });
}

// 保存邮件文件夹实体EmailClassifyEntity
export function saveclassifyentity(keyValue, EmailClassifyEntity) {
  return request({
    url: "/learun/adms/email/saveclassifyentity",
    method: "post",
    params: {
      keyValue: keyValue,
      entity: EmailClassifyEntity
    }
  });
}
//保存系统邮件配置
export function savesysconfigentity(keyValue, isSystem) {
  return request({
    url: "/learun/adms/email/savesysconfigentity",
    method: "post",
    params: {
      keyValue: keyValue,
      isSystem: isSystem
    }
  });
}
// 保存邮件所在文件夹
export function savemoveform(keyValue, moveClassifyId, mailType) {
  return request({
    url: "/learun/adms/email/savemoveform",
    method: "post",
    params: {
      keyValue: keyValue,
      moveClassifyId: moveClassifyId,
      mailType: mailType
    }
  });
}
// 转发邮件
export function transmit(keyValue, type, configID, address) {
  return request({
    url: "/learun/adms/email/transmit",
    method: "get",
    params: {
      keyValue: keyValue,
      type: type,
      configID: configID,
      address: address
    }
  });
}
// 测试连接
export function testconfigentity(mailAccount) {
  return request({
    url: "/learun/adms/email/testconfigentity",
    method: "get",
    params: mailAccount
  });
}
//获取联系人列表
export function getcontactlistemail(pagination, queryJson) {
  return request({
    url: "/learun/adms/email/getcontactlist",
    method: "get",
    params: {
      queryJson: queryJson,
      pagination: pagination
    }
  });
}
//获取联系人实体
export function getcontactentityeamil(keyValue) {
  return request({
    url: "/learun/adms/email/getcontactentity",
    method: "get",
    params: keyValue
  });
}
// 获取联系人
export function getcontactbyuser() {
  return request({
    url: "/learun/adms/email/getcontactbyuser",
    method: "get"
  });
}
// 删除联系人
export function deletecontactemail(keyValue) {
  return request({
    url: "/learun/adms/email/deletecontact",
    method: "get",
    params: keyValue
  });
}
// 保存联系人
export function savecontactemail(keyValue, entity) {
  return request({
    url: "/learun/adms/email/savecontact",
    method: "post",
    params: {
      keyValue: keyValue,
      entity: entity
    }
  });
}
