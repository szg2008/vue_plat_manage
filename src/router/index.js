import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path:'/',
        redirect:'/page/Login'
    },
    {
        path:'/home',
        component:resolve => require(['@/components/common/Home'],resolve),
        children:[
            {
                path:'/',
                component:resolve => require(['@/components/page/home/Index'],resolve)
            }
        ]
    },
    {
        path:'/login',
        component:resolve => require(['@/components/page/Login'],resolve)
    }
]

export default new Router({
    routes
})
