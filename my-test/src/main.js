/*
 * @Author: your name
 * @Date: 2021-04-06 15:27:28
 * @LastEditTime: 2021-04-07 16:12:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \新建文件夹 (2)\my-test\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import rem from './config/rem'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

rem.setFontSize()
window.onresize = function () {
  rem.setFontSize()
}
