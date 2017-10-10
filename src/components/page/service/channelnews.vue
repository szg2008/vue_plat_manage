<template lang="html">
    <div class="">
        <v-title title="资讯管理"></v-title>
        <div class="table_item">
            <el-row>
                <el-col :span="2">&nbsp;</el-col>
                <el-col :span="22">
                    <span>频道：</span>
                    <el-select v-model="channel">
                        <el-option value="全部">全部</el-option>
                        <el-option value="资讯1">资讯1</el-option>
                        <el-option value="资讯2">资讯2</el-option>
                        <el-option value="资讯3">资讯3</el-option>
                    </el-select>
                    <span>发布状态：</span>
                    <el-select v-model="status">
                        <el-option value="全部">全部</el-option>
                        <el-option value="未发布">未发布</el-option>
                        <el-option value="已发布">已发布</el-option>
                    </el-select>
                    <div class="" style="display:inline-block">
                        <el-input v-model="title" placeholder='请输入标题'></el-input>
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
                    <el-table-column width="150" label="标题" prop="title" align="center" class-name="table_column"></el-table-column>
                    <el-table-column width="220" label="发布时间" prop="publishdate" align="center" class-name="table_column"></el-table-column>
                    <el-table-column width="100" label="来源" prop="source" align="center" class-name="table_column"></el-table-column>
                    <el-table-column width="" label="状态" prop="status" align="center" class-name="table_column"></el-table-column>
                    <el-table-column label="操作" width="260" align="center" class-name="table_column">
                        <template scope="scope">
                            <el-button type="text" @click="handleEdit">编辑</el-button>
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
            channel:'资讯1',
            status:'全部',
            title:'',
            tableData:[
                {
                    title:'aa',
                    publishdate:'2017-09-12',
                    source:'tongyong',
                    status:'已发布'
                },
                {
                    title:'邓超',
                    publishdate:'2017-06-17',
                    source:'hello',
                    status:'已发布'
                },
                {
                    title:'熊黛林',
                    publishdate:'2017-12-01',
                    source:'lin',
                    status:'已发布'
                }
            ],
            currentpage:4,
            total:34
        }
    },
    methods:{
        handleAdd(){
            this.$router.push('/content/editnews');
        },
        handleEdit(){
            this.$router.push('/content/editnews');
        },
        handleDel(){
            
        }
    }
}
</script>

<style lang="scss">
    .table_item{margin:10px 0;}
    .table_column{padding:5px 0;}
</style>
