// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'

Vue.config.productionTip = false

document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px'

new Vue({
  el: '#app',
  router,
  template: '<div id="app" style="height:100%"><router-view></router-view></div>'
})
