/*
 * @Author: your name
 * @Date: 2019-12-06 11:20:39
 * @LastEditTime: 2019-12-11 19:29:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import route from './route'
import store from '@/store/store'
 Vue.use(Router)
 const routerPush = Router.prototype.push
 Router.prototype.push = function push(location) {
   return routerPush.call(this, location).catch(error=> error)
 }
const router = new Router({
  mode:'history',
  routes:route,
})


export default router