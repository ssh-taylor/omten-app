/*
 * @Author: your name
 * @Date: 2019-12-10 17:16:39
 * @LastEditTime: 2019-12-10 18:29:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\store\module\app.js
 */
import { getToken,setToken} from '@/utils/auth'
import {getInfo} from '@/Api/user'

const app ={
    state:{
       token:getToken(),
       userInfo:{},
    },
    mutations:{
        USERINFO(state,uinfo){
            state.userInfo = uinfo
            if(uinfo.token) setToken(uinfo.token)
            state.token = uinfo.token
        },
        SETTOKEN(state){
            state.token = ''
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
        }
    }
}

export default app
