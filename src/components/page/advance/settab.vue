<template lang="html">
    <div class="">
        <v-title title="菜单状态设置"></v-title>
        <el-row>
            <el-col :span="24">
                <div class="bg-purple h-purple">
                    <h2>设置顶部菜单状态</h2>
                </div>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="23">
                <label for="" class="label-item">搜素：</label>
                <el-radio-group v-model="radio1">
                    <el-radio :label="1">隐藏</el-radio>
                    <el-radio :label="2">显示</el-radio>
                </el-radio-group>
            </el-col>
            <el-col :span="24">
                <div class="bg-purple h-purple">
                    <h2>设置底部菜单状态</h2>
                </div>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="23">
                <label for="" class="label-item">社区：</label>
                <el-radio-group v-model="radio2">
                    <el-radio :label="1">隐藏</el-radio>
                    <el-radio :label="2">显示</el-radio>
                </el-radio-group>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="23">
                <label for="" class="label-item">聊天：</label>
                <el-radio-group v-model="radio3">
                    <el-radio :label="1">隐藏</el-radio>
                    <el-radio :label="2">显示</el-radio>
                </el-radio-group>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="23">
                <label for="" class="label-item">我的：</label>
                <el-radio-group v-model="radio4">
                    <el-radio :label="1">隐藏</el-radio>
                    <el-radio :label="2">显示</el-radio>
                </el-radio-group>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="23">
                <el-button type="primary" @cilck="setSave">保存设置</el-button>
            </el-col>
        </el-row>
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
            radio1:1,
            radio2:2,
            radio3:2,
            radio4:1
        }
    },
    methods:{
        setSave(){

        }
    }
}
</script>

<style lang="scss">
    .el-col{margin:10px 0;}
    .bg-purple{background-color: #ccc;border-radius:5px;}
    .h-purple{padding:0 10px;height:45px;line-height: 45px;}
    .label-item{display: inline-block;width:100px;}
</style>
