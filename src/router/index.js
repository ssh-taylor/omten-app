import Vue from 'vue'
import Router from 'vue-router'
import route from './route'
import HelloWorld from "../components/HelloWorld"
 Vue.use(Router)

export default new Router({
  routes:route
  // [{
  //   path:'/',
  //   name:'HelloWorld',
  //   component:HelloWorld
  // }]
})
