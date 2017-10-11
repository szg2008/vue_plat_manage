<template lang="html">
    <div class="">
        <v-title title="企业会员分类管理"></v-title>
        <div class="table_item">
            <el-row>
                <el-col :span="10">&nbsp;</el-col>
                <el-col :span="14">
                    <div class="form-item">
                        <el-input placeholder="请输入分类名称"></el-input>
                    </div>
                    <el-button type="primary">搜索</el-button>
                    <el-button type="primary" @click="addCategoryDialog=true">添加</el-button>
                </el-col>
            </el-row>
        </div>
        <div class="table_item">
            <el-row>
                <el-table :data='tableData' border>
                    <el-table-column width="50" type="selection" align="center" class-name="table_column"></el-table-column>
                    <el-table-column width="200" label="分类名称" prop="category" align="center" class-name="table_column"></el-table-column>
                    <el-table-column width="" label="更新时间" prop="updatetime" align="center" class-name="table_column"></el-table-column>
                    <el-table-column label="操作" width="280" align="center" class-name="table_column">
                        <template scope="scope">
                            <el-button type="text" @click="addCategoryDialog=true">编辑</el-button>
                            <el-button type="text" @click="handleDel">删除</el-button>
                            <el-button type="text" @click="handleMoveUp">上移</el-button>
                            <el-button type="text" @click="handleMoveDown">下移</el-button>
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
        <el-dialog :visible.sync="addCategoryDialog" title="添加分类">
            <el-row>
                <el-col :span="2">&nbsp;</el-col>
                <el-col :span="20">
                    <el-form :model="addCategoryForm" label-width="120px">
                        <el-form-item label="分类名称：" prop="categoryname">
                            <div class="form-item">
                                <el-input v-model="addCategoryForm.categoryname" placeholder='请输入分类名称'></el-input>
                            </div>
                        </el-form-item>
                        <el-form-item label="">
                            <el-button type="primary" @click="addCategoryDialog=false">保存设置</el-button>
                            <el-button @click="addCategoryDialog=false">取消</el-button>
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
                    category:'haha2',
                    updatetime:'2017-10-12'
                },
                {
                    category:'haha3',
                    updatetime:'2017-02-11'
                },
                {
                    category:'haha4',
                    updatetime:'2017-09-09'
                },
                {
                    category:'haha5',
                    updatetime:'2017-08-21'
                },
                {
                    category:'haha1',
                    updatetime:'2017-09-12'
                }
            ],
            currentpage:4,
            total:100,
            addCategoryDialog:false,
            addCategoryForm:{
                categoryname:''
            }
        }
    },
    methods:{
        handleDel(){

        },
        handleMoveDown(){

        },
        handleMoveUp(){

        }
    }
}
</script>

<style lang="scss">
    .table_item{margin:10px 0;}
    .form-item{display: inline-block;width: 350px;}
</style>
