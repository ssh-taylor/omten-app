import request from "@/utils/request";

// 获取消息分页列表
export function getMessagepage(pagination, queryJson) {
  return request({
    url: "/learun/adms/MqttMessage/page",
    method: "get",
    params: {
      pagination: pagination,
      queryJson: JSON.stringify(queryJson)
    }
  });
}
// 删除消息
export function getMessagdelete(keyValue) {
  return request({
    url: "/learun/adms/MqttMessage/delete",
    method: "get",
    params: keyValue
  });
}
// 获取消息实体
export function getmessagegets(keyValue) {
  return request({
    url: "/learun/adms/MqttMessage/get",
    method: "get",
    params: keyValue
  });
}
// 保存消息
export function getmessagesave(keyValue, MqttMessageEntityn) {
  return request({
    url: "/learun/adms/MqttMessage/save",
    method: "post",
    params: {
      keyValue: keyValue,
      entity: MqttMessageEntityn
    }
  });
}
// 获取日志分页列表
export function getlogpage(pagination, queryJson) {
  return request({
    url: "/learun/adms/MqttLog/page",
    method: "get",
    params: {
      pagination: pagination,
      queryJson: JSON.stringify(queryJson)
    }
  });
}
// 获取日志实体
export function getlogget(keyValue) {
  return request({
    url: "/learun/adms/MqttLog/get",
    method: "get",
    params: keyValue
  });
}
// 删除日志
export function getlogdelete(keyValue) {
  return request({
    url: "/learun/adms/MqttLog/delete",
    method: "get",
    params: keyValue
  });
}
// 保存日志
export function getlogsave(keyValue, MqttLogEntity) {
  return request({
    url: "/learun/adms/MqttLog/save",
    method: "post",
    params: {
      keyValue: keyValue,
      entity: MqttLogEntity
    }
  });
}
// 获取授权码列表
export function getTokenUselist() {
  return request({
    url: "/learun/adms/MqttTokenUse/list",
    method: "get"
  });
}
// 获取授权码分页列表
export function getTokenUsepage(pagination, queryJson) {
  return request({
    url: "/learun/adms/MqttTokenUse/page",
    method: "get",
    params: {
      pagination: pagination,
      queryJson: JSON.stringify(queryJson)
    }
  });
}
// 获取授权码实体
export function getTokenUseget(keyValue) {
  return request({
    url: "/learun/adms/MqttTokenUse/get",
    method: "get",
    params: keyValue
  });
}
// 删除授权码
export function getTokenUsedelete(keyValue) {
  return request({
    url: "/learun/adms/MqttTokenUse/delete",
    method: "get",
    params: keyValue
  });
}
// 保存授权码
export function getTokenUsesave(keyValue, MqttTokenUseEntity) {
  return request({
    url: "/learun/adms/MqttTokenUse/save",
    method: "post",
    params: {
      keyValue: keyValue,
      entity: MqttTokenUseEntity
    }
  });
}
// 获取主题列表
export function getTopiclist() {
  return request({
    url: "/learun/adms/MqttTopic/list",
    method: "get"
  });
}
// 获取主题实体
export function getTopicget(keyValue) {
  return request({
    url: "/learun/adms/MqttTopic/get",
    method: "get",
    params: keyValue
  });
}
// 获取主题分页列表
export function getTopicpage(pagination, queryJson) {
  return request({
    url: "/learun/adms/MqttTopic/page",
    method: "get",
    params: {
      pagination: pagination,
      queryJson: JSON.stringify(queryJson)
    }
  });
}
// 删除主题
export function getTopicdelete(keyValue) {
  return request({
    url: "/learun/adms/MqttTopic/delete",
    method: "get",
    params: keyValue
  });
}
// 保存主题
export function getTopicsave(keyValue, MqttTopicEntity) {
  return request({
    url: "/learun/adms/MqttTopic/save",
    method: "post",
    params: {
      keyValue: keyValue,
      entity: MqttTopicEntity
    }
  });
}
// 获取订阅列表
export function getTopicSubscribelist() {
  return request({
    url: "/learun/adms/MqttTopicSubscribe/list",
    method: "get"
  });
}
// 获取订阅分页列表
export function getTopicSubscribepage(pagination, queryJson) {
  return request({
    url: "/learun/adms/MqttTopicSubscribe/page",
    method: "get",
    params: {
      pagination: pagination,
      queryJson: JSON.stringify(queryJson)
    }
  });
}
// 获取订阅实体
export function getTopicSubscribeget(keyValue) {
  return request({
    url: "/learun/adms/MqttTopicSubscribe/get",
    method: "get",
    params: keyValue
  });
}
// 删除订阅
export function getTopicSubscribedelete(keyValue) {
  return request({
    url: "/learun/adms/MqttTopicSubscribe/delete",
    method: "get",
    params: keyValue
  });
}
// 保存订阅
export function getTopicSubscribesave(keyValue, MqttTopicSubscribeEntity) {
  return request({
    url: "/learun/adms/MqttTopicSubscribe/save",
    method: "post",
    params: {
      keyValue: keyValue,
      entity: MqttTopicSubscribeEntity
    }
  });
}
// 获取设备在线状态
export function getTokenUseonline(keyValue) {
  return request({
    url: "/learun/adms/MqttTokenUse/online",
    method: "get",
    params: keyValue
  });
}
// 获取服务器状态
export function getserverStatus() {
  return request({
    url: "/learun/adms/mqttserver/getstatus",
    method: "get"
  });
}
// 开启服务
export function getstartserver() {
  return request({
    url: "/learun/adms/mqttserver/startserver",
    method: "get"
  });
}
// 停止服务
export function getstopserver() {
  return request({
    url: "/learun/adms/mqttserver/stopserver",
    method: "get"
  });
}
// 重启服务
export function getrestartserver() {
  return request({
    url: "/learun/adms/mqttserver/restartserver",
    method: "get"
  });
}
// 获取规则列表
export function mqttruleList() {
  return request({
    url: "/learun/adms/mqttrule/list",
    method: "get"
  });
}
// 获取规则分页列表
export function mqttruleListPage(pagination, queryJson) {
  return request({
    url: "/learun/adms/mqttrule/page",
    method: "get",
    params: {
      pagination: pagination,
      queryJson: JSON.stringify(queryJson)
    }
  });
}
// 获取规则实体
export function mqttruleget(keyValue) {
  return request({
    url: "/learun/adms/mqttrule/get",
    method: "get",
    params: keyValue
  });
}
// 删除规则
export function mqttruleDlete(keyValue) {
  return request({
    url: "/learun/adms/mqttrule/delete",
    method: "get",
    params: keyValue
  });
}
// 保存规则
export function mqttruleSave(keyValue, MqttRuleEntity) {
  return request({
    url: "/learun/adms/mqttrule/save",
    method: "post",
    params: {
      keyValue: keyValue,
      entity: MqttRuleEntity
    }
  });
}
// 获取规则明细列表
export function mqttruledetaillist(keyValue) {
  return request({
    url: "/learun/adms/mqttruledetail/list",
    method: "get",
    params: keyValue
  });
}
// 获取规则明细分页列表
export function mqttruledetailpage(pagination, queryJson) {
  return request({
    url: "/learun/adms/mqttruledetail/page",
    method: "get",
    params: {
      pagination: pagination,
      queryJson: JSON.stringify(queryJson)
    }
  });
}
// 保存规则明细
export function mqttruledetailSave(keyValue, MqttRuleDetailEntity) {
  return request({
    url: "/learun/adms/mqttruledetail/save",
    method: "post",
    params: {
      keyValue: keyValue,
      entity: MqttRuleDetailEntity
    }
  });
}
// 删除规则明细
export function mqttruledetailDlete(keyValue) {
  return request({
    url: "/learun/adms/mqttruledetail/delete",
    method: "get",
    params: keyValue
  });
}
// 更改规则启动状态
export function changestatus(keyValue, Status) {
  return request({
    url: "/learun/adms/mqttrule/changestatus",
    method: "post",
    params: {
      keyValue: keyValue,
      Status: Status
    }
  });
}
