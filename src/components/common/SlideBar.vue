<template>
    <div class="">
        <el-menu :default-active="activeIndex" @open="handleOpen" @close="handleClose" @select="handleSelect" theme="light">
            <template v-for="(item,key,index) in treeData">
                <template v-if="typeof item === 'object'">
                    <el-submenu :index=key>
                        <template slot="title"><i class="el-icon-setting"></i>{{item.name}}</template>
                        <template v-for="(item2,key2,index2) in item.obj">
                            <template v-if="typeof item2 === 'object'">
                                <el-submenu :index=key2>
                                    <template slot="title"><i class="el-icon-setting"></i>{{item2.name}}</template>
                                    <template v-for="(item3,key3,index3) in item2.obj">
                                        <template v-if="typeof item3 === 'object'">
                                            <el-submenu :index=key3>
                                                <template slot="title"><i class="el-icon-setting"></i>{{item3.name}}</template>
                                                <template v-for="(item4,key4,index4) in item3.obj">
                                                    <template v-if="typeof item4 === 'object'">
                                                        <el-submenu :index=key4>
                                                            <template slot="title"><i class="el-icon-setting"></i>{{item4.name}}</template>
                                                        </el-submenu>
                                                    </template>
                                                    <template v-else="typeof item4 !== 'object'">
                                                        <el-menu-item :index=key4><i class="el-icon-setting"></i>{{item4}}</el-menu-item>
                                                    </template>
                                                </template>
                                            </el-submenu>
                                        </template>
                                        <template v-else="typeof item3 !== 'object'">
                                            <el-menu-item :index=key3><i class="el-icon-setting"></i>{{item3}}</el-menu-item>
                                        </template>
                                    </template>
                                </el-submenu>
                            </template>
                            <template v-else="typeof item2 !== 'object'">
                                <el-menu-item :index=key2><i class="el-icon-setting"></i>{{item2}}</el-menu-item>
                            </template>
                        </template>
                    </el-submenu>
                </template>
                <template v-else="typeof item !== 'object'">
                    <el-menu-item :index=key><i class="el-icon-setting"></i>{{item}}</el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import bus from '../../assets/eventBus'
export default {
    data(){
        return {
            treeData:{},
        }
    },
    computed:{
        activeIndex(){
            return this.$router.history.current.path
        }
    },
    created(){
        this.treeData = this.handleTreeData()
        bus.$on('upSlideBar',(key)=>{
            this.treeData = this.handleTreeData(key)
        })
    },
    methods:{
        handleTreeData(path){
            let router = path ? path : this.$router.history.current.path
            let treeList = {}
            if(router.includes('/content')){
                treeList = {
                    'index':{
                        name:'首页管理',
                        obj:{
                            '/content/link':'外链',
                            'mixin':{
                                name:'混合模块',
                                obj:{
                                    '/content/news':'资讯',
                                    'qq':{
                                        name:'球聚合',
                                        obj:{
                                            '/content/majornews':'要闻',
                                            '/content/interest':'圈子'
                                        }
                                    }
                                }
                            }
                        }
                    },
                    '/content/chart':'聊天',
                    '/content/mine':'我的',
                    '/content/messpush':'信息推送'
                }
            }else if(router.includes('/advance')){
                treeList = {
                    '/advance/access':'权限设置',
                    '/advance/members':'会员管理',
                    'appmanage':{
                        name:'上架设置',
                        obj:{
                            '/advance/setground':'上架设置',
                            '/advance/settab':'菜单状态设置'
                        }
                    }
                }
            }else if(router.includes('/packset')){
                treeList = {
                    '/packset/index':'基础设置',
                    '/packset/shareset':'第三方设置',
                    '/packset/shareload':'分享落地页设置',
                    '/packset/upgrade':'升级设置'
                }
            }else if(router.includes('/service')){
                treeList = {
                    'channel':{
                        name:'资讯管理',
                        obj:{
                            '/service/channelindex':'频道管理',
                            '/service/channelnews':'资讯管理'
                        }
                    },
                    '/service/curve':'分布图'
                }
            }else if(router.includes('/corporate')){
                treeList = {
                    'company':{
                        name:'企业会员账号管理',
                        obj:{
                            '/corporate/companyindex':'企业会员账号管理',
                            '/corporate/companycatelist':'企业会员分类管理'
                        }
                    }
                }
            }
            return treeList
        },
        handleOpen(key,path){

        },
        handleClose(key,path){

        },
        handleSelect(key,path){
            this.$router.push(key)
        }
    }
}
</script>

<style lang="scss">

</style>
