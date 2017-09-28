<template lang="html">
    <div class="">
        <v-title title="聊天设置"></v-title>
        <el-row>
            <el-col :span="2">&nbsp;</el-col>
            <el-col :span="20">
                <el-form :model="chartForm" label-width="100px">
                    <el-form-item label="客服名称：">
                        <div class="form_item" :style="{display:!nameInputShow?'block':'none'}">
                            <span v-html="name"></span>&nbsp;&nbsp;
                            <el-button type="text" @click="handleEditName">编辑</el-button>
                        </div>
                        <div class="form_item" :style="{display:nameInputShow?'block':'none'}">
                            <el-input placeholder="请输入客服名字" v-model="editname"></el-input>
                            <el-button type="primary" @click="handleSaveName">保存</el-button>
                            <el-button @click="handleCancelName">取消</el-button>
                        </div>
                    </el-form-item>
                    <el-form-item label="客服头像：">
                        <img src="http://sns-img.b0.upaiyun.com/dunzd/1709/2815/24/150839059031051506583478.jpg" alt="" width=50 height=50 style="border-radius:50%;vertical-align:middle;" />
                        <el-upload
                            class="upload"
                            action=""
                        >
                            <el-button type="text">重新上传</el-button>
                        </el-upload>
                        <span style="color:#ccc;">建议上传格式为jpg\png，大小不超过20K的图片</span>
                    </el-form-item>
                    <el-form-item label="客服号：" v-for="(item,index) in customData">
                        <div class="form_item">
                            <el-input placeholder="您的账号" :value=item.name></el-input>
                            <el-button @click="handleAddCustom">+</el-button>
                            <el-button @click="handleMinusCustom(index)">-</el-button>
                        </div>
                    </el-form-item>
                    <el-form-item label="欢迎语：">
                        <div class="form_item">
                            <el-input type="textarea" :rows=5 value="Hi,靓妹儿给你服务啦~~"></el-input>
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click='handleSave'>立即保存</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span="2">&nbsp;</el-col>
        </el-row>
    </div>
</template>

<script>
import Vue from 'vue'
import vTitle from '../../common/Title'
export default {
    components:{
        vTitle
    },
    data(){
        return {
            nameInputShow:false,
            name:'爱永恒',
            editname:'爱永恒',
            customNum:1,
            customData:[
                {'name':'客服1','id':this.customNum++},
                {'name':'客服2','id':this.customNum++}
            ],
            chartForm:{

            }
        }
    },
    methods:{
        handleEditName(){
            this.nameInputShow = true
        },
        handleSaveName(){
            if(!!this.editname){
                this.name = this.editname
                this.nameInputShow = false
            }
        },
        handleCancelName(){
            this.nameInputShow = false
        },
        handleAddCustom(){
            Vue.set(this.customData,this.customData.length,{'name':'',id:this.customNum++})
        },
        handleMinusCustom(index){
            if(this.customData.length > 1){
                this.customData.splice(index,1)
            }
        },
        handleSave(){

        }
    }
}
</script>

<style lang="scss">
    .form_item{display: inline-block;width:450px;}
    .form_item .el-input{width:60%;}
    .upload{display: inline-block;}
</style>
