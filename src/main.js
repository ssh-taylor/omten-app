/*
 * @Author: your name
 * @Date: 2019-12-06 11:20:39
 * @LastEditTime : 2020-01-08 19:34:59
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import 'font-awesome/css/font-awesome.min.css'
import store from './store/store.js'
 

Vue.config.productionTip = false

document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px'

new Vue({
  el: '#app',
  router,
  store,
  template: '<div id="app" style="height:100%"><router-view></router-view></div>'
})
