<template lang="html">
    <div class="">
        <v-title title="兴趣圈"></v-title>
        <el-row>
            <el-col :span="2">&nbsp;</el-col>
            <el-col :span="20">
                <el-form :model="interestForm" label-width="100px">
                    <el-form-item label="类型：">
                        兴趣圈
                    </el-form-item>
                    <el-form-item label="是否自定义：" prop="isDefine">
                        <el-radio-group v-model="interestForm.isDefine">
                            <el-radio label="1">是</el-radio>
                            <el-radio label="0">否</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="圈子名称：">
                        <div class="form_item">
                            <el-input placeholder="请输入圈子名称"></el-input>
                        </div>
                    </el-form-item>
                    <el-form-item label="圈子说明：">
                        <div class="form_item">
                            <el-input type="textarea" :rows=5 placeholder="请输入圈子说明" ></el-input>
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
import vTitle from '../../common/Title'
export default {
    components:{
        vTitle
    },
    data(){
        return {
            interestForm:{
                isDefine:'1'
            }
        }
    },
    methods:{
        handleSave(){

        }
    }
}
</script>

<style lang="scss">
    .form_item{display: inline-block;width:420px;}
</style>
