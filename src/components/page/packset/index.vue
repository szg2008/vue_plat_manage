<template lang="html">
    <div class="">
        <v-title title="基础设置"></v-title>
        <el-row>
            <el-col :span="2">&nbsp;</el-col>
            <el-col :span="20">
                <el-form :model="packsetIndexForm" :rules="packsetIndexRules" label-width="150px">
                    <el-form-item label="App名称：" prop="appname">
                        <div class="form_item">
                            <el-input placeholder="请输入App名称" v-model="packsetIndexForm.appname"></el-input>
                        </div>
                    </el-form-item>
                    <el-form-item label="App简介：" prop="appdesc">
                        <div class="form_item">
                            <el-input type="textarea" placeholder="请输入App简介" :rows=5 v-model="packsetIndexForm.appdesc"></el-input>
                        </div>
                    </el-form-item>
                    <el-form-item label="App图标：">
                        <div class="form_item">
                            <el-upload
                            class="avatar-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            :before-upload="beforeAvatarUpload"
                            :on-success="handleAvatarSuccess"
                            >
                            <img v-if="pushImageUrl" :src="pushImageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                        </div>
                    </el-form-item>
                    <el-form-item label="详情页顶部导航：">
                        <el-radio-group v-model="topnav">
                            <el-radio :label="1">隐藏</el-radio>
                            <el-radio :label="2">显示</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="">
                        <div class="form_item">
                            <el-button type="primary">保存设置</el-button>
                        </div>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span="2">&nbsp;</el-col>
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
            packsetIndexForm:{
                appname:'',
                appdesc:''
            },
            packsetIndexRules:{
                appname:[
                    {required:true,message:'请输入App名称',trigger:'blur'}
                ],
                appdesc:[
                    {required:true,message:'请输入App简介',trigger:'blur'}
                ]
            },
            pushImageUrl:'http://sns-img.b0.upaiyun.com/dunzd/1709/2815/24/150839059031051506583478.jpg',
            topnav:1
        }
    },
    methods:{
        beforeAvatarUpload(){

        },
        handleAvatarSuccess(){

        },
    }
}
</script>

<style lang="scss">
    .form_item{width:450px;}
    .avatar-uploader .el-upload{
        border:1px dashed #d9d9d9;
        border-radius:6px;
        cursor:pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #20a0ff;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 120px;
        height: 120px;
        line-height: 120px;
        text-align: center;
    }
    .avatar {
        width: 120px;
        height: 120px;
        display: block;
    }
</style>
