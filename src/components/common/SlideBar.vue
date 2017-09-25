<template>
    <div class="">
        <el-menu default-active="1" @open="handleOpen" @close="handleClose" @select="handleSelect" theme="light">
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-setting"></i>首页管理</template>
                <el-menu-item index="1-1">外链</el-menu-item>
                <el-menu-item-group title="混合模块">
                    <el-menu-item index="1-2">资讯</el-menu-item>
                    <el-menu-item index="1-3">公告栏</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2"><i class="el-icon-setting"></i>聊天</el-menu-item>
            <el-menu-item index="3"><i class="el-icon-setting"></i>我的</el-menu-item>
            <el-menu-item index="4"><i class="el-icon-setting"></i>信息推送</el-menu-item>
            <el-menu-item index="5"><i class="el-icon-setting"></i>回收站</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        handleOpen(key,path){

        },
        handleClose(key,path){

        },
        handleSelect(key,path){

        }
    }
}
</script>

<style lang="scss">
</style>
