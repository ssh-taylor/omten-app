import request from "@/utils/request";
// 保存任务
export function getloglistsave(keyValue, JobEntity, MessageEntity) {
  return request({
    url: "/learun/adms/job/save",
    method: "post",
    params: {
      keyValue: keyValue,
      entity: JobEntity,
      messageList: MessageEntity
    }
  });
}
// 获取任务分页列表
export function getpagelist(pagination, queryJson) {
  return request({
    url: "/learun/adms/job/page",
    method: "get",
    params: {
      pagination: JSON.stringify(pagination),
      queryJson: JSON.stringify(queryJson)
    }
  });
}
// 更改任务状态
export function changestatus(keyValue, status) {
  return request({
    url: "/learun/adms/job/changestatus",
    method: "get",
    params: { keyValue: keyValue, status: status }
  });
}
// 删除任务
export function getlogdelete(keyValue) {
  return request({
    url: "/learun/adms/job/delete",
    method: "get",
    params: keyValue
  });
}
// 获取日志分页列表
export function getlogpagelist(pagination, queryJson) {
  return request({
    url: "/learun/adms/job/logpagelist",
    method: "get",
    params: {
      pagination: JSON.stringify(pagination),
      queryJson: JSON.stringify(queryJson)
    }
  });
}
//清空日志
export function cleanlog() {
  return request({
    url: "/learun/adms/job/cleanlog",
    method: "get"
  });
}
// 根据来源获取消息列表
export function messageListt(sourceId, sourceType) {
  return request({
    url: "/learun/adms/message/listbysource",
    method: "get",
    params: { sourceId: sourceId, sourceType: sourceType }
  });
}
//获取消息实体
export function getmessageads(keyValue) {
  return request({
    url: "/learun/adms/message/get",
    method: "get",
    params: keyValue
  });
}
// 保存消息实体
export function changestatussave(keyValue, MessageEntity) {
  return request({
    url: "/learun/adms/message/save",
    method: "post",
    params: { keyValue: keyValue, entity: MessageEntity }
  });
}
// 删除消息实体
export function getlogdeleteMessage(keyValue) {
  return request({
    url: "/learun/adms/message/delete",
    method: "get",
    params: keyValue
  });
}
