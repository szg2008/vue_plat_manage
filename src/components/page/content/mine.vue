<template>
    <div class="">
        <v-title title="我的"></v-title>
        <div class="table_item">
            <el-row>
                <el-col :span="22">&nbsp;</el-col>
                <el-col :span="2">
                    <el-button type="primary" @click="handleEdit">添加</el-button>
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
                        <el-table-column prop="updatetime" label="更新时间" width="200" align="center" class-name="table_column"></el-table-column>
                        <el-table-column prop="person" label="操作人" width="100" align="center" class-name="table_column"></el-table-column>
                        <el-table-column label="操作" width="" align="center" class-name="table_column">
                            <template scope="scope">
                                <el-button type="text" @click="handleUp" :disabled="false">上移</el-button>
                                <el-button type="text" @click="handleDown" :disabled="false">下移</el-button>
                                <el-button type="text" @click="handleEdit">编辑</el-button>
                                <el-button type="text" @click="handleDel">删除</el-button>
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
                                <el-input v-model="editForm.newsname" placeholder='请输入名称'></el-input>
                            </div>
                        </el-form-item>
                        <el-form-item label="类型：" prop="newstype">
                            <el-select v-model="editForm.newstype">
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
                    status:true,
                    updatetime:'2017-02-14',
                    person:'lila'
                },
                {
                    title:'我的首页',
                    icon:'http://sns-img.b0.upaiyun.com/dunzd/1510/2216/23/11445502215.png',
                    status:false,
                    updatetime:'2017-02-14',
                    person:'sabo'
                },
                {
                    title:'钱包',
                    icon:'http://sns-img.b0.upaiyun.com/dunzd/1512/3115/22/145931798867381451546541.png',
                    status:true,
                    updatetime:'2017-02-14',
                    person:'lily'
                },
                {
                    title:'推荐给好友',
                    icon:'http://sns-img.b0.upaiyun.com/dunzd/1601/2814/34/146333476560971453962866.png',
                    status:false,
                    updatetime:'2017-02-14',
                    person:'john'
                },
                {
                    title:'设置',
                    icon:'http://sns-img.b0.upaiyun.com/dunzd/1510/2216/25/11445502343.png',
                    status:true,
                    updatetime:'2017-02-14',
                    person:'susu'
                }
            ],
            dialogEditNews:false,
            editForm:{
                newsname:'',
                newstype:'个人信息'
            }
        }
    },
    methods:{
        handleUp(){

        },
        handleDown(){

        },
        handleEdit(){
            this.dialogEditNews = true
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
        handleSave(){
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
