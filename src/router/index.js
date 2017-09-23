import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Home from '@/components/home'

Vue.use(Router)

const routes = [
    {
        path:'/',
        component:Login
    },
    {
        path:'/home',
        component:Home
    }
]

export default new Router({
    routes
})
