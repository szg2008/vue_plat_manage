<template lang="html">
    <div class="">
        <v-title title="我的"></v-title>
        <div class="table_item">
            <el-row>
                <el-col :span="22">&nbsp;</el-col>
                <el-col :span="2">
                    <el-button type="primary">添加</el-button>
                </el-col>
            </el-row>
        </div>
        <div class="table_item">
            <el-row>
                <el-table :data='tableData' border>
                    <el-table-column prop="title" label="名称" width="80" align="center" class-name="table_column"></el-table-column>
                    <el-table-column label="图标" width="80" align="center" class-name="table_column">
                        <template scope="scope">
                            <img :src=scope.row.icon alt="" width=40 height=40/>
                        </template>
                    </el-table-column>
                    <el-table-column prop="source" label="来源" width="120" align="center" class-name="table_column"></el-table-column>
                    <el-table-column prop="status" label="状态" width="100" align="center" class-name="table_column"></el-table-column>
                    <el-table-column prop="updatetime" label="更新时间" width="150" align="center" class-name="table_column"></el-table-column>
                    <el-table-column prop="person" label="操作人" width="100" align="center" class-name="table_column"></el-table-column>
                    <el-table-column label="操作" width="200" align="center" class-name="table_column">
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
                    title:'个人信息',
                    icon:'http://sns-img.b0.upaiyun.com/dunzd/1510/2216/22/11445502168.png',
                    status:'on',
                    updatetime:'2017-02-14',
                    person:'lila'
                }
            ]
        }
    },
    methods:{
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
    .table_column{padding:10px 0;}
</style>
