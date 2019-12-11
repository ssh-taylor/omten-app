/*
 * @Author: your name
 * @Date: 2019-12-04 13:55:36
 * @LastEditTime: 2019-12-11 16:12:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\utils\auth.js
 */
import Cookies from "js-cookie";

const TokenKey = 'hyerp-Token_omten'

export function getToken(){
    return Cookies.get(TokenKey) || ''
}
export function setToken(token){
    return Cookies.set(TokenKey,token)
}
export function removeToken(){
    return Cookies.remove(TokenKey)
}