<template lang="html">
    <div class="">
        <v-title title="频道管理"></v-title>
        <div class="table_item">
            <el-row>
                <el-col :span="22">&nbsp;</el-col>
                <el-col :span="2">
                    <el-button type="primary" @click="handleAdd">添加</el-button>
                </el-col>
            </el-row>
        </div>
        <div class="table_item">
            <el-row>
                <el-table :data='tableData' border>
                    <el-table-column width="260" label="频道名称" prop="channelname" align="center" class-name="table_column"></el-table-column>
                    <el-table-column prop="ischeck" label="数据是否免审" width="" align="center" class-name="table_column"></el-table-column>
                    <el-table-column label="操作" width="260" align="center" class-name="table_column">
                        <template scope="scope">
                            <el-button type="text" @click="handleUp">上移</el-button>
                            <el-button type="text" @click="handleDown">下移</el-button>
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
            tableData:[
                {
                    channelname:'哈哈啦',
                    ischeck:'免审'
                },
                {
                    channelname:'王者荣耀',
                    ischeck:'免审'
                },
                {
                    channelname:'测试更新',
                    ischeck:'非免审'
                },
                {
                    channelname:'test按时间排',
                    ischeck:'免审'
                },
                {
                    channelname:'gongxiang',
                    ischeck:'非免审'
                },
                {
                    channelname:'资讯7',
                    ischeck:'免审'
                },
                {
                    channelname:'陈铁',
                    ischeck:'非免审'
                },
                {
                    channelname:'今日快讯3',
                    ischeck:'免审'
                },
                {
                    channelname:'资讯绑定',
                    ischeck:'免审'
                },
                {
                    channelname:'测试服务号',
                    ischeck:'非免审'
                }
            ],
            currentpage:5,
            total:89
        }
    },
    methods:{
        handleAdd(){
            this.$router.push('editchannel');
        },
        handleUp(){

        },
        handleDown(){

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
    .table_column{padding:5px 0;}
</style>
