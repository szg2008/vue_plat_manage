<template>
    <div class="">
        <v-title title="我的"></v-title>
        <div class="table_item">
            <el-row>
                <el-col :span="22">&nbsp;</el-col>
                <el-col :span="2">
                    <el-button type="primary" @click="handleEdit('undefined')">添加</el-button>
                </el-col>
            </el-row>
        </div>
        <div class="table_item">
            <el-row>
                <el-col :span="24">
                    <el-table :data='tableData' border>
                        <el-table-column prop="title" label="名称" width="150" align="center" class-name="table_column"></el-table-column>
                        <el-table-column label="图标" width="80" align="center" class-name="table_column" prop="icon">
                            <template scope="scope">
                                <img :src=scope.row.icon alt="" width=40 height=40 style="vertical-align:middle;"/>
                            </template>
                        </el-table-column>
                        <el-table-column prop="status" label="状态" width="100" align="center" class-name="table_column">
                            <template scope="scope">
                                <el-switch v-model=scope.row.status></el-switch>
                            </template>
                        </el-table-column>
                        <el-table-column prop="updatetime" label="更新时间" width="180" align="center" class-name="table_column"></el-table-column>
                        <el-table-column prop="type" label="所属类型" width="120" align="center" class-name="table_column"></el-table-column>
                        <el-table-column label="操作" width="" align="center" class-name="table_column">
                            <template scope="scope">
                                <el-button type="text" @click="handleUp(scope.row.id)" :disabled="scope.$index == 0 ? true : false">上移</el-button>
                                <el-button type="text" @click="handleDown(scope.row.id)" :disabled="scope.$index == tableData.length - 1 ? true : false">下移</el-button>
                                <el-button type="text" @click="handleEdit(scope.row.id)">编辑</el-button>
                                <el-button type="text" @click="handleDel(scope.row.id)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-col>
            </el-row>
        </div>
        <el-dialog title="编辑/添加" :visible.sync="dialogEditNews">
            <el-row>
                <el-col :span="2">&nbsp;</el-col>
                <el-col :span="16">
                    <el-form :model="editForm" label-width="100px">
                        <el-form-item label="名称：" prop="newsname">
                            <div class="form_item">
                                <el-input v-model="editForm.newsname" placeholder='请输入名称' @change="handleChange"></el-input>
                            </div>
                        </el-form-item>
                        <el-form-item label="类型：" prop="newstype">
                            <el-select v-model="editForm.newstype" @change="handleSelectChange">
                                <el-option value="个人信息">个人信息</el-option>
                                <el-option value="我的首页">我的首页</el-option>
                                <el-option value="安全中心">安全中心</el-option>
                                <el-option value="阅读">阅读</el-option>
                                <el-option value="设置">设置</el-option>
                                <el-option value="推荐给好友">推荐给好友</el-option>
                                <el-option value="钱包">钱包</el-option>
                                <el-option value="活动签到">活动签到</el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="handleSave">立即保存</el-button>
                            <el-button @click="handleCancel">取消</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span="6">&nbsp;</el-col>
            </el-row>
        </el-dialog>
    </div>
</template>

<script>
import Vue from 'vue'
import vTitle from '../../common/Title'
export default {
    components:{
        vTitle
    },
    data(){
        return {
            tableData:[
                {
                    id:1,
                    title:'个人信息',
                    icon:'http://sns-img.b0.upaiyun.com/dunzd/1510/2216/22/11445502168.png',
                    status:true,
                    updatetime:'2017-02-14',
                    type:'个人信息'
                },
                {
                    id:2,
                    title:'我的首页',
                    icon:'http://sns-img.b0.upaiyun.com/dunzd/1510/2216/23/11445502215.png',
                    status:false,
                    updatetime:'2017-02-14',
                    type:'我的首页'
                },
                {
                    id:3,
                    title:'钱包',
                    icon:'http://sns-img.b0.upaiyun.com/dunzd/1512/3115/22/145931798867381451546541.png',
                    status:true,
                    updatetime:'2017-02-14',
                    type:'钱包'
                },
                {
                    id:4,
                    title:'推荐给好友',
                    icon:'http://sns-img.b0.upaiyun.com/dunzd/1601/2814/34/146333476560971453962866.png',
                    status:false,
                    updatetime:'2017-02-14',
                    type:'推荐给好友'
                },
                {
                    id:5,
                    title:'设置',
                    icon:'http://sns-img.b0.upaiyun.com/dunzd/1510/2216/25/11445502343.png',
                    status:true,
                    updatetime:'2017-02-14',
                    type:'设置'
                }
            ],
            dialogEditNews:false,
            editForm:{
                newsname:'',
                newstype:'',
                id:''
            }
        }
    },
    methods:{
        handleSelectChange(value){
            this.editForm.newstype = value
        },
        handleChange(value){
            this.editForm.newsname = value
        },
        handleUp(id){
            let index = this.tableData.findIndex((item,index) => {
                return item.id === id
            })
            let item1 = this.tableData[index]
            let item2 = this.tableData[index - 1]
            Vue.set(this.tableData,index,item2)
            Vue.set(this.tableData,index-1,item1)
        },
        handleDown(id){
            let index = this.tableData.findIndex((item,index) => {
                return item.id === id
            })
            let item1 = this.tableData[index]
            let item2 = this.tableData[index + 1]
            Vue.set(this.tableData,index,item2)
            Vue.set(this.tableData,index+1,item1)
        },
        handleEdit(id){
            this.dialogEditNews = true
            if(id !== 'undefined'){
                let data = this.tableData
                data = data.filter((item,index) => {
                    return item.id === id
                })
                this.editForm.id = data[0].id
                this.editForm.newsname = data[0].title
                this.editForm.newstype = data[0].type
            }else{
                this.editForm.id = id
            }
        },
        handleDel(id){
            let index = this.tableData.findIndex((item,index) => {
                return item.id === id
            })
            this.$confirm('是否删除这条数据？','提示',{
                confirmButtonText:'删除',
                cancelButtonText:'取消',
                type:'warning'
            }).then(() => {
                this.tableData.splice(index,1)
                this.$message({
                    type:'success',
                    message:'删除成功'
                })
            }).catch(() => {
                //取消
            })
        },
        handleSave(){
            if(this.editForm.id === 'undefined'){//添加
                Vue.set(this.tableData,this.tableData.length,{
                    id:Math.floor(Math.random()*100),
                    title:this.editForm.newsname,
                    icon:'http://sns-img.b0.upaiyun.com/dunzd/1709/2815/24/150839059031051506583478.jpg',
                    status:false,
                    updatetime:new Date().getFullYear() + '-' +(new Date().getMonth() + 1) + '-' +new Date().getDate(),
                    type:this.editForm.newstype
                })
            }else{
                let index = this.tableData.findIndex((item,index) => {
                    return item.id === this.editForm.id
                })
                Vue.set(this.tableData,index,{
                    id:this.editForm.id,
                    title:this.editForm.newsname,
                    icon:this.tableData[index].icon,
                    status:this.tableData[index].status,
                    updatetime:new Date().getFullYear() + '-' +(new Date().getMonth() + 1) + '-' +new Date().getDate(),
                    type:this.editForm.newstype
                })
            }
            this.dialogEditNews = false
        },
        handleCancel(){
            this.dialogEditNews = false
        }
    }
}
</script>

<style lang="scss">
    .table_item{margin:10px 0;}
    .table_column{padding:10px 0;}
</style>
