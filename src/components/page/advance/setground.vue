<template lang="html">
    <div class="">
        <v-title title="上架设置"></v-title>
        <el-row>
            <el-col :span="24">
                <div class="bg-purple h-purple">
                    <h2>设置各型号版本显示状态(全局)</h2>
                </div>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="23">
                <label for="" class="label-item">资讯列表页来源：</label>
                <el-radio-group v-model="radio1">
                    <el-radio :label="1">隐藏</el-radio>
                    <el-radio :label="2">显示</el-radio>
                </el-radio-group>
            </el-col>
            <el-col :span="24">
                <div class="bg-purple h-purple">
                    <h2>设置登录页显示状态</h2>
                </div>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="23">
                <label for="" class="label-item">新浪微博登录：</label>
                <el-radio-group v-model="radio2">
                    <el-radio :label="1">隐藏</el-radio>
                    <el-radio :label="2">显示</el-radio>
                </el-radio-group>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="23">
                <label for="" class="label-item">QQ登录：</label>
                <el-radio-group v-model="radio3">
                    <el-radio :label="1">隐藏</el-radio>
                    <el-radio :label="2">显示</el-radio>
                </el-radio-group>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="23">
                <label for="" class="label-item">微信登录：</label>
                <el-radio-group v-model="radio4">
                    <el-radio :label="1">隐藏</el-radio>
                    <el-radio :label="2">显示</el-radio>
                </el-radio-group>
            </el-col>
            <el-col :span="24">
                <div class="bg-purple h-purple">
                    <h2>设置会员中心显示状态</h2>
                </div>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="23">
                <label for="" class="label-item">个人信息：</label>
                <el-radio-group v-model="radio5">
                    <el-radio :label="1">隐藏</el-radio>
                    <el-radio :label="2">显示</el-radio>
                </el-radio-group>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="23">
                <label for="" class="label-item">设置：</label>
                <el-radio-group v-model="radio6">
                    <el-radio :label="1">隐藏</el-radio>
                    <el-radio :label="2">显示</el-radio>
                </el-radio-group>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="23">
                <label for="" class="label-item">声音：</label>
                <el-radio-group v-model="radio7">
                    <el-radio :label="1">隐藏</el-radio>
                    <el-radio :label="2">显示</el-radio>
                </el-radio-group>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="23">
                <label for="" class="label-item">评分：</label>
                <el-radio-group v-model="radio8">
                    <el-radio :label="1">隐藏</el-radio>
                    <el-radio :label="2">显示</el-radio>
                </el-radio-group>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="23">
                <label for="" class="label-item">新版本检测：</label>
                <el-radio-group v-model="radio9">
                    <el-radio :label="1">隐藏</el-radio>
                    <el-radio :label="2">显示</el-radio>
                </el-radio-group>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="23">
                <label for="" class="label-item">安全中心：</label>
                <el-radio-group v-model="radio10">
                    <el-radio :label="1">隐藏</el-radio>
                    <el-radio :label="2">显示</el-radio>
                </el-radio-group>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="23">
                <label for="" class="label-item">清除缓存：</label>
                <el-radio-group v-model="radio11">
                    <el-radio :label="1">隐藏</el-radio>
                    <el-radio :label="2">显示</el-radio>
                </el-radio-group>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="23">
                <label for="" class="label-item">关于我们：</label>
                <el-radio-group v-model="radio12">
                    <el-radio :label="1">隐藏</el-radio>
                    <el-radio :label="2">显示</el-radio>
                </el-radio-group>
            </el-col>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="23">
                <el-button type="primary" @click="showAll">全部显示</el-button>
                <el-button type="primary" @click="hideAll">全部隐藏</el-button>
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
            radio4:1,
            radio5:2,
            radio6:1,
            radio7:2,
            radio8:1,
            radio9:2,
            radio10:2,
            radio11:1,
            radio12:1
        }
    },
    methods:{
        showAll(){
            for(var i = 1;i < 13;i++){
                this['radio'+i] = 2
            }
        },
        hideAll(){
            for(var i = 1;i < 13;i++){
                this['radio'+i] = 1
            }
        },
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
