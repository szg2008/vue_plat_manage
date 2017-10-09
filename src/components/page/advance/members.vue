<template lang="html">
    <div class="">
        <v-title title="会员管理"></v-title>
        <div class="table_item">
            <el-tabs v-model="active" type="card" @tab-click="handleCardClick" v-loading.body="loading">
                <el-tab-pane label="会员列表" name="first">
                    <el-table :data='tableDataIndex' border>
                        <el-table-column prop="userName" label="用户名" width="120" align="center" class-name="table_column"></el-table-column>
                        <el-table-column prop="nickName" label="会员昵称" width="120" align="center" class-name="table_column"></el-table-column>
                        <el-table-column prop="grade" label="会员等级" width="100" align="center" class-name="table_column"></el-table-column>
                        <el-table-column prop="phone" label="手机号码" width="130" align="center" class-name="table_column"></el-table-column>
                        <el-table-column prop="yue" label="余额" width="" align="center" class-name="table_column"></el-table-column>
                        <el-table-column prop="score" label="积分" width="80" align="center" class-name="table_column"></el-table-column>
                        <el-table-column prop="createTime" label="创建时间" width="130" align="center" class-name="table_column"></el-table-column>
                        <el-table-column label="操作" width="80" align="center" class-name="table_column">
                            <template scope="scope">
                                <el-button type="text" @click="handleEdit">编辑</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="游客列表" name="second">
                    <el-table :data='tableDataGuest' border>
                        <el-table-column prop="userName" label="用户名" width="200" align="center" class-name="table_column"></el-table-column>
                        <el-table-column prop="nickName" label="会员昵称" width="" align="center" class-name="table_column"></el-table-column>
                        <el-table-column prop="phone" label="手机号码" width="260" align="center" class-name="table_column"></el-table-column>
                        <el-table-column prop="createTime" label="创建时间" width="260" align="center" class-name="table_column"></el-table-column>
                    </el-table>
                </el-tab-pane>
            </el-tabs>
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
            active:'first',
            loading:true,
            tableDataIndex:[
                {
                    userName:'汤唯',
                    nickName:'tangwei',
                    grade:'小学',
                    phone:'18756985137',
                    yue:'56.21',
                    score:'4',
                    createTime:'2017-09-02'
                },
                {
                    userName:'孙俪',
                    nickName:'lisun',
                    grade:'初中',
                    phone:'15365412589',
                    yue:'0.12',
                    score:'124',
                    createTime:'2017-10-06'
                },
                {
                    userName:'刘涛',
                    nickName:'tao',
                    grade:'大专',
                    phone:'18652452145',
                    yue:'0.65',
                    score:'73',
                    createTime:'2017-09-03'
                },
                {
                    userName:'AngelBaby',
                    nickName:'ab',
                    grade:'小学',
                    phone:'18658247128',
                    yue:'10.25',
                    score:'11343',
                    createTime:'2017-09-12'
                },
                {
                    userName:'杨幂',
                    nickName:'mi',
                    grade:'大学',
                    phone:'13541258475',
                    yue:'5.32',
                    score:'411',
                    createTime:'2017-09-19'
                },
                {
                    userName:'范冰冰',
                    nickName:'jier',
                    grade:'小学',
                    phone:'18895685421',
                    yue:'0.65',
                    score:'1321',
                    createTime:'2017-02-06'
                },
                {
                    userName:'古力娜扎',
                    nickName:'nazha',
                    grade:'大专',
                    phone:'13365485247',
                    yue:'9.25',
                    score:'245',
                    createTime:'2017-09-06'
                },
                {
                    userName:'赵丽颖',
                    nickName:'bao',
                    grade:'硕士',
                    phone:'15875482451',
                    yue:'0.52',
                    score:'4521',
                    createTime:'2017-09-06'
                }
            ],
            tableDataGuest:[
                {
                    userName:'汤唯',
                    nickName:'tangwei',
                    phone:'18756985137',
                    createTime:'2017-09-02'
                },
                {
                    userName:'孙俪',
                    nickName:'lisun',
                    phone:'15365412589',
                    createTime:'2017-10-06'
                },
                {
                    userName:'刘涛',
                    nickName:'tao',
                    phone:'18652452145',
                    createTime:'2017-09-03'
                }
            ]
        }
    },
    methods:{
        handleCardClick(tab,event){

        },
        handleEdit(){

        }
    },
    created(){
        setTimeout(()=>{
            this.loading = false
        },2000);
    }
}
</script>

<style lang="scss">
    .table_item{margin:10px 0;}
    .table_column{padding:10px 0;}
</style>
