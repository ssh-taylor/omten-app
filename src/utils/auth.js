/*
 * @Author: your name
 * @Date: 2019-12-04 13:55:36
 * @LastEditTime : 2020-01-06 20:16:53
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\utils\auth.js
 */
const TokenKey = 'hyerp-Token_omten'

export function getToken(){
    // return Cookies.get(TokenKey) || ''
    return JSON.parse(sessionStorage.getItem(TokenKey))
}
export function setToken(token){
    // return Cookies.set(TokenKey,token)
    return sessionStorage.setItem(TokenKey,JSON.stringify(token))
}
export function removeToken(){
    return sessionStorage.removeItem(TokenKey)
}
  