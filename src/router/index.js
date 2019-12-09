/*
 * @Author: your name
 * @Date: 2019-12-06 11:20:39
 * @LastEditTime: 2019-12-09 18:13:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import route from './route'
import HelloWorld from "../components/HelloWorld"
 Vue.use(Router)

export default new Router({
  mode:'history',
  routes:route
  // [{
  //   path:'/',
  //   name:'HelloWorld',
  //   component:HelloWorld
  // }]
})
