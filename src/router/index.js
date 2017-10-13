import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path:'/',
        redirect:'/login'
    },
    {
        path:'/content',
        component:resolve => require(['@/components/common/Home'],resolve),
        children:[
            {
                path:'/',
                redirect:'link'
            },
            {
                path:'link',
                component:resolve => require(['@/components/page/content/link'],resolve)
            },
            {
                path:'news',
                component:resolve => require(['@/components/page/content/news'],resolve)
            },
            {
                path:'editnews/:id*',
                component:resolve => require(['@/components/page/content/editnews'],resolve)
            },
            {
                path:'majornews',
                component:resolve => require(['@/components/page/content/majornews'],resolve)
            },
            {
                path:'interest',
                component:resolve => require(['@/components/page/content/interest'],resolve)
            },
            {
                path:'chart',
                component:resolve => require(['@/components/page/content/chart'],resolve)
            },
            {
                path:'mine',
                component:resolve => require(['@/components/page/content/mine'],resolve)
            },
            {
                path:'messpush',
                component:resolve => require(['@/components/page/content/messpush'],resolve)
            }
        ]
    },
    {
        path:'/advance',
        component:resolve => require(['@/components/common/Home'],resolve),
        children:[
            {
                path:'/',
                redirect:'access'
            },
            {
                path:'access',
                component:resolve => require(['@/components/page/advance/access'],resolve)
            },
            {
                path:'members',
                component:resolve => require(['@/components/page/advance/members'],resolve)
            },
            {
                path:'setground',
                component:resolve => require(['@/components/page/advance/setground'],resolve)
            },
            {
                path:'settab',
                component:resolve => require(['@/components/page/advance/settab'],resolve)
            }
        ]
    },
    {
        path:'/packset',
        component:resolve => require(['@/components/common/Home'],resolve),
        children:[
            {
                path:'/',
                redirect:'index'
            },
            {
                path:'index',
                component:resolve => require(['@/components/page/packset/index'],resolve)
            },
            {
                path:'shareload',
                component:resolve => require(['@/components/page/packset/shareload'],resolve)
            },
            {
                path:'shareset',
                component:resolve => require(['@/components/page/packset/shareset'],resolve)
            },
            {
                path:'upgrade',
                component:resolve => require(['@/components/page/packset/upgrade'],resolve)
            }
        ]
    },
    {
        path:'/service',
        component:resolve => require(['@/components/common/Home'],resolve),
        children:[
            {
                path:'/',
                redirect:'channelindex'
            },
            {
                path:'channelindex',
                component:resolve => require(['@/components/page/service/channelindex'],resolve)
            },
            {
                path:'channelnews',
                component:resolve => require(['@/components/page/service/channelnews'],resolve)
            },
            {
                path:'editchannel',
                component:resolve => require(['@/components/page/service/editchannel'],resolve)
            }
        ]
    },
    {
        path:'/corporate',
        component:resolve => require(['@/components/common/Home'],resolve),
        children:[
            {
                path:'/',
                redirect:'companycatelist'
            },
            {
                path:'companycatelist',
                component:resolve => require(['@/components/page/corporate/companycatelist'],resolve)
            },
            {
                path:'companyindex',
                component:resolve => require(['@/components/page/corporate/companyindex'],resolve)
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
