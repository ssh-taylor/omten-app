/*
 * @Author: your name
 * @Date: 2019-12-10 18:15:18
 * @LastEditTime: 2019-12-12 10:05:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \omt-app\src\store\store.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import app from './module/app'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        app,
    },
    getters
})