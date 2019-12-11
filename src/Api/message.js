/*
 * @Author: your name
 * @Date: 2019-12-06 18:28:36
 * @LastEditTime: 2019-12-11 16:35:06
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\Api\message.js
 */
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
//获取联系人列表
export function getcontactlist(pagination,UserId) {
  return request({
    url: "/learun/immsg/getcontactlist",
    method: "get",
    params: {
      pagination,
      UserId,
      queryJson:''
    }
  });
}
