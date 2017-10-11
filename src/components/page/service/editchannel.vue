<template lang="html">
    <div class="">
        <v-title title="添加/编辑频道"></v-title>
        <el-row>
            <el-col :span="2">&nbsp;</el-col>
            <el-col :span="22">
                <el-form :model="addChannelForm" label-width="150px">
                    <el-form-item label="频道名称：">
                        <div class="form-item">
                            <el-input placeholder="请输入频道名称" v-model="addChannelForm.name"></el-input>
                        </div>
                    </el-form-item>
                    <el-form-item label="数据是否免审：">
                        <div class="form-item">
                            <el-radio-group v-model="addChannelForm.ischeck">
                                <el-radio label="是">是</el-radio>
                                <el-radio label="否">否</el-radio>
                            </el-radio-group>
                        </div>
                    </el-form-item>
                    <el-form-item label="" label-width="0">
                        <h4>--------------------------------------------------关键词搜索--------------------------------------------------</h4>
                    </el-form-item>
                    <el-form-item label="搜素关键词：">
                        <div class="form-item">
                            <el-input placeholder="请输入搜索关键词" v-model="addChannelForm.keyword"></el-input>
                        </div>
                    </el-form-item>
                    <el-form-item label="限定词：">
                        <div class="form-item">
                            <el-input placeholder="请输入限定词" v-model="addChannelForm.importkey"></el-input>
                        </div>
                    </el-form-item>
                    <el-form-item label="排序方式：">
                        <div class="form-item">
                            <el-radio-group v-model="addChannelForm.sort">
                                <el-radio label="按时间">按时间</el-radio>
                                <el-radio label="按相关">按相关</el-radio>
                            </el-radio-group>
                        </div>
                    </el-form-item>
                    <el-form-item label="匹配方式：">
                        <div class="form-item">
                            <el-radio-group v-model="addChannelForm.finte">
                                <el-radio label="按标题">按标题</el-radio>
                                <el-radio label="按全文">按全文</el-radio>
                            </el-radio-group>
                        </div>
                    </el-form-item>
                    <el-form-item label="是否启用自动更新：">
                        <div class="form-item">
                            <el-checkbox v-model="addChannelForm.isupdate"></el-checkbox>
                        </div>
                    </el-form-item>
                    <el-form-item label="" label-width="0">
                        <h4>--------------------------------------------------定向抓取--------------------------------------------------</h4>
                    </el-form-item>
                    <el-form-item label="是否开启定向抓取：">
                        <div class="form-item">
                            <el-radio-group v-model="addChannelForm.dingx">
                                <el-radio :label='true'>是</el-radio>
                                <el-radio :label='false'>否</el-radio>
                            </el-radio-group>
                        </div>
                    </el-form-item>
                    <el-form-item label="图标：">
                        <div class="form-item">
                            <el-upload
                            class="avatar-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            >
                            <img v-if="addChannelForm.pushImageUrl" :src="addChannelForm.pushImageUrl" class="avatar">
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
            addChannelForm:{
                name:'',
                ischeck:'否',
                keyword:'',
                importkey:'',
                sort:'按时间',
                finte:'按标题',
                isupdate:true,
                dingx:false,
                pushImageUrl:''
            }
        }
    },
    methods:{

    }
}
</script>

<style lang="scss">
    .form-item{display: inline-block;width:400px;}
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
