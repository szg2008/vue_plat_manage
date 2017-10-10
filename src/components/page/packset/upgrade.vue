<template lang="html">
    <div class="">
        <v-title title="升级设置"></v-title>
        <el-tabs v-model="activeName" type="card">
            <el-tab-pane label="安卓系统" name="android">
                <el-row>
                    <el-col :span="2">&nbsp;</el-col>
                    <el-col :span="22">
                        <el-form :model="androidForm" label-width="130px" label-position="left">
                            <el-form-item label="android版本号：" prop="version">
                                <el-select v-model="androidForm.version" placeholder="请选择">
                                    <el-option
                                     v-for="item in androidForm.versions"
                                     :key="item.value"
                                     :label="item.label"
                                     :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="提示弹窗：" prop="tip">
                                <el-radio-group v-model="androidForm.tip">
                                    <el-radio :label="1">开启</el-radio>
                                    <el-radio :label="0">关闭</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="升级提示词：" prop="desc">
                                <div class="form-item">
                                    <el-input type="textarea" :rows=6 v-model="androidForm.desc"></el-input>
                                </div>
                            </el-form-item>
                            <el-form-item label="下载安卓url：" prop="url">
                                <div class="form-item">
                                    <el-input v-model="androidForm.url"></el-input>
                                </div>
                            </el-form-item>
                            <el-form-item label="是否强制升级：" prop="grade">
                                <el-radio-group v-model="androidForm.grade">
                                    <el-radio :label="1">升级</el-radio>
                                    <el-radio :label="0">不升级</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="">
                                <el-button type="primary">保存设置</el-button>
                            </el-form-item>
                        </el-form>
                    </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="苹果系统" name="ios">
                <el-row>
                    <el-col :span="2">&nbsp;</el-col>
                    <el-col :span="22">
                        <el-form :model="iosForm" label-width="130px" label-position="left">
                            <el-form-item label="ios版本号：" prop="version">
                                <el-select v-model="iosForm.version" placeholder="请选择">
                                    <el-option
                                     v-for="item in iosForm.versions"
                                     :key="item.value"
                                     :label="item.label"
                                     :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="提示弹窗：" prop="tip">
                                <el-radio-group v-model="iosForm.tip">
                                    <el-radio :label="1">开启</el-radio>
                                    <el-radio :label="0">关闭</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="升级提示词：" prop="desc">
                                <div class="form-item">
                                    <el-input type="textarea" :rows=6 v-model="iosForm.desc"></el-input>
                                </div>
                            </el-form-item>
                            <el-form-item label="下载iosurl：" prop="url">
                                <div class="form-item">
                                    <el-input v-model="iosForm.url"></el-input>
                                </div>
                            </el-form-item>
                            <el-form-item label="是否强制升级：" prop="grade">
                                <el-radio-group v-model="iosForm.grade">
                                    <el-radio :label="1">升级</el-radio>
                                    <el-radio :label="0">不升级</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="">
                                <el-button type="primary">保存设置</el-button>
                            </el-form-item>
                        </el-form>
                    </el-col>
                </el-row>
            </el-tab-pane>
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
            activeName:'android',
            androidForm:{
                versions:[
                    {
                      value: '选项1',
                      label: '2.1.2'
                    },
                    {
                      value: '选项2',
                      label: '2.1.1'
                    },
                    {
                      value: '选项3',
                      label: '1.9.6'
                    },
                    {
                      value: '选项4',
                      label: '1.9.5'
                    },
                    {
                      value: '选项5',
                      label: '1.0.2'
                    }
                ],
                version:'',
                tip:1,
                desc:'',
                url:'',
                grade:0
            },
            iosForm:{
                versions:[
                    {
                      value: '选项1',
                      label: '2.1.2'
                    },
                    {
                      value: '选项2',
                      label: '2.1.1'
                    },
                    {
                      value: '选项3',
                      label: '1.9.6'
                    },
                    {
                      value: '选项4',
                      label: '1.9.5'
                    },
                    {
                      value: '选项5',
                      label: '1.0.2'
                    }
                ],
                version:'',
                tip:1,
                desc:'',
                url:'',
                grade:0
            }
        }
    }
}
</script>

<style lang="scss">
    .form-item{display: inline-block;width:500px;}
</style>
