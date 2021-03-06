/*
 * @Author: your name
 * @Date: 2019-12-10 17:48:51
 * @LastEditTime : 2019-12-26 17:40:52
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\store\getters.js
 */
import settings from '@/utils/settings'
const getters ={
    userLists:state=>state.app.userLists,
    token:state=>state.app.token,
    userInfo:state=>state.app.userInfo,
    menus: state => state.app.menus,
    department:state=>state.app.departmentList,
    userico:state=>{
        return(
            settings.apiUrl + '/learun/adms/user/img?token=' +
            state.app.token +
            '&loginMark=' +
            settings.loginMark +
            '&data=' +
            state.app.userInfo.userId +
            state.app.userInfo.headIcon
        )
    },
    getmenus: state => {
        let pmenu = state.app.menus
        // 将数组转为树
        pmenu = pmenu
          .filter(function (parent) {
            var branchArr = pmenu.filter(function (child) {
              return parent.F_ModuleId === child['F_ParentId']
            })
            parent.children = []
            if (branchArr.length > 0) {
              branchArr.sort((a, b) => {
                return a['F_SortCode'] - b['F_SortCode']
              })
              parent.children = branchArr
            }
            return parent['F_ParentId'] === '0'
          })
          .sort((a, b) => {
            return a['F_SortCode'] - b['F_SortCode']
          })
        return pmenu[state.app.menuindex].children
      },
      getallmenus: state => {
        let pmenu = state.app.menus
            // 将数组转为树
            pmenu = pmenu
              .filter(function (parent) {
                var branchArr = pmenu.filter(function (child) {
                  return parent.F_ModuleId === child['F_ParentId']
                })
                parent.children = []
                if (branchArr.length > 0) {
                  branchArr.sort((a, b) => {
                    return a['F_SortCode'] - b['F_SortCode']
                  })
                  parent.children = branchArr
                }
                return parent['F_ParentId'] === '0'
              })
              .sort((a, b) => {
                return a['F_SortCode'] - b['F_SortCode']
              })
            return pmenu
      },
}


export default getters