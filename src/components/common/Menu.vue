<template>
    <div class="">
        <el-menu theme="dark" :default-active="activeIndex" mode="horizontal" @select="handleSelect">
            <el-menu-item index="/content">内容管理</el-menu-item>
            <el-menu-item index="/advance">高级设置</el-menu-item>
            <el-menu-item index="/packset">App打包</el-menu-item>
            <el-menu-item index="/service">运营服务</el-menu-item>
            <el-menu-item index="/corporate">企业会员</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
import bus from '../../assets/eventBus'
export default {
    data(){
        return {
            activeIndex:''
        }
    },
    mounted(){
        const path = this.$router.history.current.path
        if(path.includes('content')){
            this.activeIndex = '/content'
        }else if(path.includes('advance')){
            this.activeIndex = '/advance'
        }else if(path.includes('packset')){
            this.activeIndex = '/packset'
        }else if(path.includes('service')){
            this.activeIndex = '/service'
        }else if(path.includes('corporate')){
            this.activeIndex = '/corporate'
        }
    },
    methods:{
        handleSelect(key,path){
            this.$router.push(key)
            //触发更新slidebar组件
            bus.$emit('upSlideBar',key)
        }
    }
}
</script>

<style lang="scss">

</style>
