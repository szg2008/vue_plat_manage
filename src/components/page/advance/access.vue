<template lang="html">
    <div class="">
        <v-title title="权限设置"></v-title>
        <div class="table_item">
            <el-row :gutter="24">
                <el-col :span="8">
                    <h2>名称：三生三世,十里桃花</h2>
                </el-col>
                <el-col :span="6" :push="12">
                    <el-button type="primary" @click="handleAddManager">新增管理员</el-button>
                </el-col>
            </el-row>
        </div>
        <div class="table_item">
            <el-table :data='tableData' border>
                <el-table-column prop="nickName" label="管理员昵称" width="300" align="center" class-name="table_column"></el-table-column>
                <el-table-column prop="account" label="账号" width="" align="center" class-name="table_column"></el-table-column>
                <el-table-column label="操作" width="200" align="center" class-name="table_column">
                    <template scope="scope">
                        <template v-if="!scope.row.isEdit">
                            <el-button type="text" @click="handleLook">查看</el-button>
                        </template>
                        <template v-if="scope.row.isEdit">
                            <el-button type="text" @click="handleEdit">管理权限</el-button>
                            <el-button type="text" @click="handleDel">删除</el-button>
                        </template>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="table_item">
            <el-row>
                <el-col :span="7">
                    &nbsp;
                </el-col>
                <el-col :span="17">
                    <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page="currentpage"
                    layout="total,prev,pager,next,jumper"
                    :total="total"
                    >
                    </el-pagination>
                </el-col>
            </el-row>
        </div>
        <el-dialog title="新增管理员" :visible.sync="dialogAddManagerVisible">
            <el-row>
                <el-col :span="2">&nbsp;</el-col>
                <el-col :span="20">
                    <el-form :modal="addForm">
                        <el-form-item label="管理员账号：" :label-width="formLabelWidth" prop="account">
                            <el-input v-model="addForm.account" placeholder='请输入管理员账号'></el-input>
                        </el-form-item>
                        <el-form-item label="" :label-width="formLabelWidth">
                            <el-tree
                            :data="treeData"
                            node-key="id"
                            :default-expanded-keys="[2,3,5]"
                            :default-checked-keys="[3]"
                            show-checkbox
                            :props="defaultProps"
                            >
                            </el-tree>
                        </el-form-item>
                        <el-form-item label="" :label-width="formLabelWidth">
                            <el-button type="primary" @click="handleAddSave">新增</el-button>
                            <el-button @click="handleAddCancel">取消</el-button>
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
                    nickName:'lims001',
                    account:'limx001',
                    isEdit:false
                },
                {
                    nickName:'古力娜扎',
                    account:'jing011',
                    isEdit:true
                },
                {
                    nickName:'赵丽颖',
                    account:'limg001',
                    isEdit:false
                },
                {
                    nickName:'杨幂',
                    account:'gou002',
                    isEdit:true
                }
            ],
            currentpage:2,
            total:45,
            dialogAddManagerVisible:false,
            formLabelWidth:'120px',
            addForm:{
                account:''
            },
            treeData:[
                {
                    id:1,
                    value:'内容管理',
                    children:[
                        {
                            id:6,
                            value:'首页管理',
                            children:[
                                {
                                    id:10,
                                    value:'外链'
                                },
                                {
                                    id:11,
                                    value:'混合模块',
                                    children:[
                                        {
                                            id:12,
                                            value:'资讯'
                                        },
                                        {
                                            id:13,
                                            value:'球聚合',
                                            children:[
                                                {
                                                    id:14,
                                                    value:'要闻'
                                                },
                                                {
                                                    id:15,
                                                    value:'圈子'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id:7,
                            value:'聊天'
                        },
                        {
                            id:8,
                            value:'我的'
                        },
                        {
                            id:9,
                            value:'信息推送'
                        }
                    ]
                },
                {
                    id:2,
                    value:'高级设置',
                    children:[
                        {
                            id:16,
                            value:'权限设置'
                        },
                        {
                            id:17,
                            value:'会员管理'
                        },
                        {
                            id:18,
                            value:'上架设置',
                            children:[
                                {
                                    id:19,
                                    value:'上架设置'
                                },
                                {
                                    id:20,
                                    value:'菜单状态设置'
                                }
                            ]
                        }
                    ]
                },
                {
                    id:3,
                    value:'App打包',
                    children:[
                        {
                            id:21,
                            value:'基础设置'
                        },
                        {
                            id:22,
                            value:'第三方设置'
                        },
                        {
                            id:23,
                            value:'分享落地页设置'
                        },
                        {
                            id:24,
                            value:'升级设置'
                        }
                    ]
                },
                {
                    id:4,
                    value:'运营服务',
                    children:[
                        {
                            id:25,
                            value:'资讯管理',
                            children:[
                                {
                                    id:26,
                                    value:'频道管理'
                                },
                                {
                                    id:27,
                                    value:'资讯管理'
                                }
                            ]
                        }
                    ]
                },
                {
                    id:5,
                    value:'企业会员',
                    children:[
                        {
                            id:28,
                            value:'企业会员账号管理',
                            children:[
                                {
                                    id:29,
                                    value:'企业会员账号管理'
                                },
                                {
                                    id:30,
                                    value:'企业会员分类管理'
                                }
                            ]
                        }
                    ]
                }
            ],
            defaultProps:{
                children:'children',
                label:'value'
            }
        }
    },
    methods:{
        handleEdit(){

        },
        handleLook(){

        },
        handleDel(){
            this.$confirm('是否删除这条数据？','提示',{
                confirmButtonText:'删除',
                cancelButtonText:'取消',
                type:'warning'
            }).then(() => {
                this.$message({
                    type:'success',
                    message:'删除成功'
                })
            }).catch(() => {
                //取消
            })
        },
        handleCurrentChange(){

        },
        handleAddManager(){
            this.dialogAddManagerVisible = true
        },
        handleAddSave(){
            this.dialogAddManagerVisible = false
        },
        handleAddCancel(){
            this.dialogAddManagerVisible = false
        }
    }
}
</script>

<style lang="scss">
    .table_item{margin:10px 0;}
    .table_column{padding:10px 0;}
</style>
