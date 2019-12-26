/*
 * @Author: your name
 * @Date: 2019-12-26 10:31:58
 * @LastEditTime: 2019-12-26 10:38:18
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\Api\formdata.js
 */
import request from "@/utils/request";

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