<template>
    <div class="">
        <el-menu default-active="1" @open="handleOpen" @close="handleClose" @select="handleSelect" theme="light">
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-setting"></i>首页管理</template>
                <el-menu-item index="1-1">外链</el-menu-item>
                <el-submenu index="1-2">
                    <template slot="title">混合模块</template>
                    <el-menu-item index="1-2-1">资讯</el-menu-item>
                    <el-menu-item index="1-2-2">公告栏</el-menu-item>
                    <el-submenu index="1-2-3">
                        <template slot="title">球球聚合</template>
                        <el-menu-item index="1-2-3-1">要闻</el-menu-item>
                        <el-menu-item index="1-2-3-2">圈子</el-menu-item>
                    </el-submenu>
                </el-submenu>
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
    mounted(){
        console.log(this.$router)
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
