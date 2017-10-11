<template lang="html">
    <div class="">
        <v-title title="企业会员账号管理"></v-title>
        <div class="table_item">
            <el-row>
                <el-col :span="24">
                    <el-button type="primary" @click="addCompanyDialog=true">申请企业会员账号</el-button>
                    最多可添加200个企业会员账号，已添加8个！
                </el-col>
            </el-row>
        </div>
        <div class="table_item">
            <el-row>
                <el-table :data='tableData' border>
                    <el-table-column width="50" type="selection" align="center" class-name="table_column"></el-table-column>
                    <el-table-column width="150" label="企业会员名称" prop="name" align="center" class-name="table_column"></el-table-column>
                    <el-table-column width="220" label="企业会员账号" prop="account" align="center" class-name="table_column"></el-table-column>
                    <el-table-column width="100" label="官网版式" prop="style" align="center" class-name="table_column"></el-table-column>
                    <el-table-column width="" label="企业分类" prop="category" align="center" class-name="table_column"></el-table-column>
                    <el-table-column label="操作" width="260" align="center" class-name="table_column">
                        <template scope="scope">
                            <el-button type="text" @click="addCompanyDialog=true">编辑</el-button>
                            <el-button type="text" @click="handleDel">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-row>
        </div>
        <div class="table_item">
            <el-row>
                <el-col :span="7">
                    <el-button type="primary">批量删除</el-button>
                </el-col>
                <el-col :span="17">
                    <el-pagination
                    :current-page="currentpage"
                    layout="total,prev,pager,next,jumper"
                    :total="total"
                    >
                    </el-pagination>
                </el-col>
            </el-row>
        </div>
        <el-dialog :visible.sync="addCompanyDialog" title="设置会员账号">
            <el-row>
                <el-col :span="2">&nbsp;</el-col>
                <el-col :span="20">
                    <el-form :model="addCompanyForm" label-width="120px">
                        <el-form-item label="企业名称：" prop="companyname">
                            <div class="form_item">
                                <el-input v-model="addCompanyForm.companyname" placeholder='请输入企业名称'></el-input>
                            </div>
                        </el-form-item>
                        <el-form-item label="企业账号：" prop="companyaccount">
                            <div class="form_item">
                                <el-input v-model="addCompanyForm.companyaccount" placeholder='请输入企业账号'></el-input>
                            </div>
                        </el-form-item>
                        <el-form-item label="企业分类：" prop="category">
                            <div class="form_item">
                                <el-select v-model="addCompanyForm.category">
                                    <el-option value="haha">haha</el-option>
                                    <el-option value="1">1</el-option>
                                    <el-option value="2">2</el-option>
                                </el-select>
                            </div>
                        </el-form-item>
                        <el-form-item label="官网版式：" prop="style">
                            <div class="form_item">
                                <el-radio-group v-model="addCompanyForm.style">
                                    <el-radio label="布局">布局</el-radio>
                                    <el-radio label="h5">h5</el-radio>
                                </el-radio-group>
                            </div>
                        </el-form-item>
                        <el-form-item label="发布时间：" prop="publishdate">
                            <div class="form_item">
                                <el-date-picker
                                    v-model="addCompanyForm.publishdate"
                                    type="daterange"
                                    placeholder="选择日期范围">
                                </el-date-picker>
                            </div>
                        </el-form-item>
                        <el-form-item label="">
                            <el-button type="primary" @click="addCompanyDialog=false">保存设置</el-button>
                            <el-button @click="addCompanyDialog=false">取消</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span="2">&nbsp;</el-col>
            </el-row>
        </el-dialog>
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
            tableData:[
                {
                    name:'1111',
                    account:'1111',
                    style:'布局',
                    category:'全部'
                },
                {
                    name:'白子画',
                    account:'hah',
                    style:'h5',
                    category:'天天有喜'
                },
                {
                    name:'小骨',
                    account:'002',
                    style:'布局',
                    category:'全部'
                },
                {
                    name:'莎姐姐',
                    account:'asa',
                    style:'h5',
                    category:'h5'
                },
                {
                    name:'赵雅芝',
                    account:'yazhi',
                    style:'布局',
                    category:'全部'
                },
                {
                    name:'444',
                    account:'444',
                    style:'h5',
                    category:'h5'
                },
                {
                    name:'999',
                    account:'999',
                    style:'布局',
                    category:'全部'
                },
                {
                    name:'666666',
                    account:'666',
                    style:'布局',
                    category:'全部'
                }
            ],
            addCompanyDialog:false,
            addCompanyForm:{
                companyname:'',
                companyaccount:'',
                category:'haha',
                style:'h5',
                publishdate:''
            },
            currentpage:3,
            total:200
        }
    },
    methods:{
        handleDel(){

        }
    }
}
</script>

<style lang="scss">
    .table_item{margin:10px 0;}
    .form_item{display: inline-block;width:300px;}
</style>
