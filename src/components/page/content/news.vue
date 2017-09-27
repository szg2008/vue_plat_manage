<template lang="html">
    <div class="">
        <v-title title="资讯－鲜花"></v-title>
        <el-row>
            <el-col :span="6">&nbsp;</el-col>
            <el-col :span="18">
                <span>发布状态：</span>
                <el-select v-model="status">
                    <el-option>全部</el-option>
                    <el-option>未发布</el-option>
                    <el-option>已发布</el-option>
                </el-select>
                <div class="" style="display:inline-block">
                    <el-input v-model="title" placeholder='请输入标题'></el-input>
                </div>
                <el-button type="primary">搜索</el-button>
                <el-button type="primary">添加</el-button>
            </el-col>
        </el-row>
        <el-row>

        </el-row>
    </div>
</template>

<script>
import vTitle from '../../common/Title'
export default {
    data(){
        return {
            status:'',
            title:''
        }
    },
    components:{
        vTitle
    }
}
</script>

<style lang="css">
</style>
