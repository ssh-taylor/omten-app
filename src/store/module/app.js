/*
 * @Author: your name
 * @Date: 2019-12-10 17:16:39
 * @LastEditTime : 2020-01-04 21:16:50
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\store\module\app.js
 */
import { getToken,setToken} from '@/utils/auth'
import {getInfo,getuserlist,getImg} from '@/Api/user'
import {getmodulelist} from '@/Api/systemmodule'
import {getDepartment} from '@/Api/department'
const app ={
    state:{
       token:getToken(),
       userInfo:{},
       userLists: [],
       menus:[],
       departmentList:[],
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
        SETDEPARTMENT(state,menus){
            state.departmentList = menus
        }

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
              let pmenu = data
              commit('SETMENU', pmenu)
            })
        },
        SetDepartment ({ commit }) {
            return getDepartment().then(data => {
              let pmenu = data
              commit('SETDEPARTMENT',pmenu)
            })
        },
    }
}

export default app
