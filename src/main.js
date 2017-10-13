import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import Mock from './mock'
Mock.bootstrap();
// import Vuex from 'vuex'
import 'element-ui/lib/theme-default/index.css'//默认主题
//import './assets/theme/my-theme1/index.css'
Vue.use(ElementUI)
// Vue.use(Vuex)


// router.beforeEach((to,from,next) => {
//     //判断是否要跳转到登录页面
// })
/* eslint-disable no-new */
new Vue({
  router,
  render:h=>h(App)
}).$mount('#app')
