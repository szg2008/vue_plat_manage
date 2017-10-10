<template lang="html">
    <div class="">
        <v-title title="分享落地页设置"></v-title>
        <el-row>
            <el-col :span="24">
                <div class="bg-purple">
                    <img v-bind:src="shareloadForm.logoImageUrl" />
                    <span v-bind:style="{backgroundColor:shareloadForm.bgcolor,borderColor:shareloadForm.btncolor,color:shareloadForm.fontcolor}">立即打开</span>
                </div>
                <el-form :model="shareloadForm" label-position="left" label-width="220px" :rules="shareloadRules">
                    <el-form-item label="1.右上角立即打开按钮背景色：" prop="bgcolor">
                        <el-color-picker v-model="shareloadForm.bgcolor" show-alpha @change="handleBgColor"></el-color-picker>
                    </el-form-item>
                    <el-form-item label="2.右上角立即打开按钮边框色：" prop="btncolor">
                        <el-color-picker v-model="shareloadForm.btncolor" show-alpha @change="handleBtnColor"></el-color-picker>
                    </el-form-item>
                    <el-form-item label="3.右上角立即打开按钮字体色：" prop="fontcolor">
                        <el-color-picker v-model="shareloadForm.fontcolor" show-alpha @change="handleFontColor"></el-color-picker>
                    </el-form-item>
                    <el-form-item label="4.安卓下载地址：" prop="androidurl">
                        <div class="form-item">
                            <el-input placeholder="请填写android下载地址"></el-input>
                        </div>
                    </el-form-item>
                    <el-form-item label="5.ios下载地址：" prop="iosurl">
                        <div class="form-item">
                            <el-input placeholder="请填写ios下载地址"></el-input>
                        </div>
                    </el-form-item>
                    <el-form-item label="6.官网背景图设置：" prop="bgImageUrl">
                        <div class="form-item">
                            <el-upload
                            class="avatar-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            >
                            <img v-if="shareloadForm.bgImageUrl" :src="shareloadForm.bgImageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                        </div>
                    </el-form-item>
                    <el-form-item label="7.左上角logo图片：" prop="logoImageUrl">
                        <div class="form-item">
                            <el-upload
                            class="avatar-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            >
                            <img v-if="shareloadForm.logoImageUrl" :src="shareloadForm.logoImageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                        </div>
                    </el-form-item>
                    <el-form-item label="">
                        <div class="form-item">
                            <el-button type="primary">保存设置</el-button>
                        </div>
                    </el-form-item>
                </el-form>
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
            shareloadForm:{
                bgcolor:'rgba(19, 206, 102, 0.8)',
                btncolor:'rgba(68, 85, 37, 0.5)',
                fontcolor:'rgba(255,255,255,0.8)',
                androidurl:'',
                iosurl:'',
                bgImageUrl:'',
                logoImageUrl:'http://sns-img.b0.upaiyun.com/dunzd/1705/0816/42/150353890257581494232923.png'
            },
            shareloadRules:{
                bgcolor:[{required:true}],
                btncolor:[{required:true}],
                fontcolor:[{required:true}],
                androidurl:[{required:true}],
                iosurl:[{required:true}],
                bgImageUrl:[{required:true}],
                logoImageUrl:[{required:true}]
            }
        }
    },
    methods:{
        handleBgColor(color){
            this.shareloadForm.bgcolor = color
        },
        handleBtnColor(color){
            this.shareloadForm.btncolor = color
        },
        handleFontColor(color){
            this.shareloadForm.fontcolor = color
        }
    }
}
</script>

<style lang="scss">
    .bg-purple{
        background-color: #f5f5f5;
        border:1px dashed #ccc;
        height: 40px;
        margin-bottom:10px;
        padding:5px 10px;
        line-height: 40px;
    }
    .bg-purple img{
        height:28px;
        line-height: 28px;
        vertical-align: middle;
    }
    .bg-purple span{
        float:right;
        width:80px;
        height:28px;
        line-height: 28px;
        border:1px solid #09f;
        text-align: center;
        color:#09f;
        margin-top:5px;
    }
    .form-item{
        display: inline-block;
        width:400px;
    }
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
        width: 200px;
        height: 300px;
        line-height: 300px;
        text-align: center;
    }
    .avatar {
        width: 200px;
        height: 300px;
        display: block;
    }
</style>
