/*
 * @Author: your name
 * @Date: 2019-12-10 17:16:39
 * @LastEditTime: 2019-12-17 16:55:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\store\module\app.js
 */
import { getToken,setToken} from '@/utils/auth'
import {getInfo,getuserlist,getImg} from '@/Api/user'
import {getmodulelist} from '@/Api/systemmodule'
import settings from '../../utils/settings'
const app ={
    state:{
       token:getToken(),
       userInfo:{},
       userLists: [],
       menus:[]
    },
    mutations:{
        USERINFO(state,uinfo){
            state.userInfo = uinfo
            if(uinfo.token) setToken(uinfo.token)
            state.token = uinfo.token
        },
        SETTOKEN(state){
            state.token = ''
        },
        SETUSERLIST (state, uList) {
            state.userLists = uList
        },
        SETMENU (state, umenu) {
            state.menus = umenu
        },
    },
    actions:{
        LoginOut({commit}){
            commit('SETTOKEN','')
        },
        SaveUserInfo({commit},newval){
            commit('USERINFO',newval)
        },
        GetUserInfo({commit}){
            return getInfo().then(data=>{
                commit('USERINFO',data.baseinfo)
            })
        },
        SetUserList ({ commit }) {
            return getuserlist('','').then(data => {
              let uList = data
              commit('SETUSERLIST', uList)
            })
        },
        SetMenu ({ commit }) {
            return getmodulelist().then(data => {
              let pmenu = data.wflist
              commit('SETMENU', pmenu)
            })
        },

    }
}

export default app
