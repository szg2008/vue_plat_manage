<template>
    <div class="">
        <v-title title="外链"></v-title>
        <el-row>
            <el-col :span="2">&nbsp;</el-col>
            <el-col :span="16">
                <el-form ref="ruleform" :model="ruleform" :rules="rules" label-width="100px">
                    <el-form-item label="链接标题：" prop="name">
                        <el-input v-model="ruleform.name"></el-input>
                    </el-form-item>
                    <el-form-item label="链接地址：" prop="url">
                        <el-input v-model="ruleform.url"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleform')" size="large">保存</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span="6"></el-col>
        </el-row>
    </div>
</template>

<script>
import vTitle from '../../common/Title'
export default {
    data(){
        return {
            ruleform: {
                name: '',
                url:''
            },
            rules:{
                name:[
                    {required:true,message:'请输入链接标题',trigger:'blur'},
                    {min:0,max:64,message:'长度在64个字符以内',trigger:'blur'}
                ],
                url:[
                    {required:true,message:'请输入链接地址',trigger:'blur'}
                ]
            }
        }
    },
    components:{
        vTitle
    },
    methods:{
        submitForm(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$alert('保存成功', '提示', {
                        confirmButtonText: '确定',
                        callback: action => {

                        }
                    });
                } else {
                    this.$message({
                        type: 'error',
                        message: '请填入正确的信息'
                    });
                    return false;
              }
            });
        }
    }
}
</script>

<style lang="scss">
</style>
