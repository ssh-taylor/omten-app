/*
 * @Author: your name
 * @Date: 2019-12-26 10:31:58
 * @LastEditTime : 2020-01-10 17:32:35
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\Api\formdata.js
 */
import request from "@/utils/request";
import { get } from "http";

// 删除自定义表单业务数据
export function deleteinstanceform(schemeInfoId,keyValue){
    return request({
        url:'/learun/adms/custmer/deleteinstanceform',
        method:'get',
        params:{
          schemeInfoId,
          keyValue
        }
    })
}
// 
export function getinstanceform(schemeInfoId,keyValue){
  return request({
    url:'/learun/adms/custmer/getinstanceform',
    method:'get',
    params:{
      schemeInfoId,
      keyValue
    }
  })
}