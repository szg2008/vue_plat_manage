<template lang="html">
    <div class="">
        <v-title title="第三方设置"></v-title>
        <el-tabs v-model="activeName" type="card">
            <el-tab-pane label="分享" name="first">分享</el-tab-pane>
            <el-tab-pane label="腾讯云" name="second">腾讯云</el-tab-pane>
            <el-tab-pane label="短信宝" name="third">短信宝</el-tab-pane>
            <el-tab-pane label="高德地图" name="fourth">高德地图</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import vTitle from '../../common/Title'
export default {
    components:{
        vTitle
    },
    data(){
        return {
            activeName: 'first'
        }
    }
}
</script>

<style lang="scss">
    .el-tabs__item{width:120px;text-align:center;}
</style>
