<template lang="html">
    <div class="">
        <v-title title="企业会员账号管理"></v-title>
        <div class="table_item">
            <el-row>
                <el-col :span="24">
                    <el-button type="primary" @click="">申请企业会员账号</el-button>
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
                            <el-button type="text" @click="">编辑</el-button>
                            <el-button type="text" @click="handleDel">删除</el-button>
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
            ]
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
</style>
