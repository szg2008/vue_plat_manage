<template lang="html">
    <div class="">
        <v-title title="企业会员分类管理"></v-title>
        <div class="table_item">
            <el-row>
                <el-col :span="14">&nbsp;</el-col>
                <el-col :span="10">
                    <div class="form-item">
                        <el-input></el-input>
                    </div>
                    <el-button type="primary">搜索</el-button>
                    <el-button type="primary" @click="handleAdd">添加</el-button>
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
                            <el-button type="text" @click="handleEdit">编辑</el-button>
                            <el-button type="text" @click="handleDel">删除</el-button>
                            <el-button type="text" @click="">上移</el-button>
                            <el-button type="text" @click="">下移</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-row>
        </div>
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
            ]
        }
    },
    methods:{
        handleAdd(){

        },
        handleEdit(){

        },
        handleDel(){

        }
    }
}
</script>

<style lang="scss">
    .table_item{margin:10px 0;}
    .form-item{display: inline-block;width: 200px;}
</style>
