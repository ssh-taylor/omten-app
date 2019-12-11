/*
 * @Author: your name
 * @Date: 2019-12-10 17:48:51
 * @LastEditTime: 2019-12-10 18:14:13
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\store\getters.js
 */
import settings from '@/utils/settings'
const getters ={
    token:state=>state.app.token,
    userInfo:state=>state.app.userInfo,
    userico:state=>{
        return(
            settings.apiUrl + '/learun/adms/user/img?token=' +
            state.app.token +
            '&loginMark=' +
            settings.loginMark +
            '&data=' +
            state.app.userInfo.userId
        )
    }
}


export default getters