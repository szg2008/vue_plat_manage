<template lang="html">
    <div class="">
        <v-title title="要闻"></v-title>
        <div class="table_item">
            <el-row>
                <el-col :span="16">&nbsp;</el-col>
                <el-col :span="8">
                    <div class="" style="display:inline-block">
                        <el-input v-model="title" placeholder='请输入标题' @change="handleChange"></el-input>
                    </div>
                    <el-button type="primary" @click="handleSearch">搜索</el-button>
                </el-col>
            </el-row>
        </div>
        <div class="table_item">
            <el-row>
                <el-table :data='tableData' border v-loading="listLoading">
                    <el-table-column type="selection" width="55" align="center" class-name="table_column"></el-table-column>
                    <el-table-column prop="title" label="标题" width="" align="center" class-name="table_column"></el-table-column>
                    <el-table-column label="缩略图" width="120" align="center" class-name="table_column">
                        <template scope="scope">
                            <img :src=scope.row.thumb alt="" width=40 height=40>
                        </template>
                    </el-table-column>
                    <el-table-column prop="publishdate" label="发布时间" width="200" align="center" class-name="table_column"></el-table-column>
                    <el-table-column label="操作" width="150" align="center" class-name="table_column">
                        <template scope="scope">
                            <el-button type="text" @click="handleDel(scope.row.id)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-row>
        </div>
        <div class="table_item">
            <el-row>
                <el-col :span="9">
                    &nbsp;
                </el-col>
                <el-col :span="15">
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
    </div>
</template>

<script>
import vTitle from '../../common/Title'
import {getMajorNewsData,delMajorNewsData} from '../../../api/api'
export default {
    components:{
        vTitle
    },
    data(){
        return {
            title:'',
            listLoading:false,
            tableData:[],
            currentpage:1,
            total:0
        }
    },
    created(){
        this.showMajorNewsData()
    },
    methods:{
        async showMajorNewsData(){
            this.listLoading = true
            const result = await getMajorNewsData({
                title:this.title,
                page:this.currentpage
            })
            this.tableData = result.data.majornewslist
            this.total = result.data.total
            this.listLoading = false
        },
        handleChange(value){
            this.title = value
        },
        handleSearch(){
            this.showMajorNewsData()
        },
        handleDel(id){
            this.$confirm('是否删除这条数据？','提示',{
                confirmButtonText:'删除',
                cancelButtonText:'取消',
                type:'warning'
            }).then(() => {
                delMajorNewsData({
                    id:id
                }).then(res => {
                    this.$message({
                        type:'success',
                        message:'删除成功'
                    })
                    this.showMajorNewsData()
                })

            }).catch(() => {
                //取消
            })
        },
        handleCurrentChange(page){
            this.currentpage = page
            this.showMajorNewsData()
        }
    }
}
</script>

<style lang="scss">
    .table_item{margin:10px 0;}
    .table_column{padding:5px 0;}
    .table_column img{vertical-align: middle;}
</style>
