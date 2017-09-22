import Vue from 'vue'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

Vue.use(ElementUI)
Vue.prototype.$axios = axios

new Vue({
    router,
    el: '#app',
    render: h => h(App)
})
