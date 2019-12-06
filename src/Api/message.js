import request from "@/utils/request";
//获取消息分页列表
export function getMessageList(pagination, data, queryJson) {
  return request({
    url: "/learun/immsg/getpagelist",
    method: "get",
    params: {
      pagination: JSON.stringify(pagination),
      queryJson: JSON.stringify(queryJson),
      sendUserId: data.sendUserId,
      recvUserId: data.recvUserId,
      keyword: data.keyword
    }
  });
}
//保存消息实体
export function sendMessage(data) {
  return request({
    url: "/learun/immsg/saveform",
    method: "post",
    params: data
  });
}
//批量保存消息实体
export function sendMessages(data) {
  return request({
    url: "/learun/immsg/saveformlist",
    method: "post",
    params: data
  });
}
//删除消息实体
export function deleteformMessages(keyValue) {
  return request({
    url: "/learun/immsg/deleteform",
    method: "get",
    params: keyValue
  });
}
