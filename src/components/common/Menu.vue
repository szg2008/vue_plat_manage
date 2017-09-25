<template>
    <div class="">
        <el-menu theme="dark" :default-active="activeIndex" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">内容管理</el-menu-item>
            <el-menu-item index="2">高级设置</el-menu-item>
            <el-menu-item index="3">App打包</el-menu-item>
            <el-menu-item index="4">运营服务</el-menu-item>
            <el-menu-item index="5">企业会员</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    data(){
        return {
            activeIndex:"1"
        }
    },
    methods:{
        handleSelect(key,path){
            console.log(key,path)
        }
    }
}
</script>

<style lang="scss">

</style>
