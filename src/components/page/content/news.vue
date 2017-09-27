<template lang="html">
    <div class="">
        <v-title title="资讯－鲜花"></v-title>
        <div class="table_item">
            <el-row>
                <el-col :span="6">&nbsp;</el-col>
                <el-col :span="18">
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
                    <el-table-column type="selection" width="55" align="center" class-name="table_column"></el-table-column>
                    <el-table-column prop="title" label="标题" width="" align="center" class-name="table_column"></el-table-column>
                    <el-table-column prop="publishdate" label="发布时间" width="200" align="center" class-name="table_column"></el-table-column>
                    <el-table-column prop="source" label="来源" width="120" align="center" class-name="table_column"></el-table-column>
                    <el-table-column prop="status" label="状态" width="100" align="center" class-name="table_column"></el-table-column>
                    <el-table-column label="操作" width="150" align="center" class-name="table_column">
                        <template scope="scope">
                            <el-button type="text" @click="handleEdit">编辑</el-button>
                            <el-button type="text" @click="handleDel">删除</el-button>
                            <el-button type="text" @click="handlePush">推送</el-button>
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
                    @current-change="handleCurrentChange"
                    :current-page="currentpage"
                    layout="total,prev,pager,next,jumper"
                    :total="total"
                    >
                    </el-pagination>
                </el-col>
            </el-row>
        </div>
        <el-dialog title='推送消息' :visible.sync="dialogPushFormVisible">
            <el-row>
                <el-col :span="2">&nbsp;</el-col>
                <el-col :span="20">
                    <el-form :model="pushForm" :rules="pushrules">
                        <el-form-item label="标题：" :label-width="formLabelWidth" prop="pushtitle">
                            <div class="form_item">
                                <el-input v-model="pushForm.pushtitle" placeholder='请输入标题'></el-input>
                            </div>
                        </el-form-item>
                        <el-form-item label="上传图片：" :label-width="formLabelWidth">
                            <el-upload
                            class="avatar-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            :before-upload="beforeAvatarUpload"
                            :on-success="handleAvatarSuccess"
                            >
                            <img v-if="pushImageUrl" :src="pushImageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                        </el-form-item>
                        <el-form-item label="推送内容：" :label-width="formLabelWidth" prop="pushcontent">
                            <div class="form_item">
                                <el-input type="textarea" :rows="4" v-model="pushForm.pushcontent" placeholder='请输入推送内容'></el-input>
                            </div>
                        </el-form-item>
                        <el-form-item label="链接：" :label-width="formLabelWidth" prop="pushlink">
                            <div class="form_item">
                                <el-input v-model="pushForm.pushlink" placeholder='请输入链接地址'>
                                    <template slot="prepend">http://</template>
                                    <template slot="append">.com</template>
                                </el-input>
                            </div>
                        </el-form-item>
                        <el-form-item :label-width="formLabelWidth">
                            <el-button type="primary" @click="dialogPushFormVisible = false">立即推送</el-button>
                            <el-button @click="dialogPushFormVisible = false">取消</el-button>
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
    data(){
        return {
            status:'全部',
            title:'',
            tableData:[
                {
                    title:'外滩屋顶花园设计施工，酒店鲜花绿植租赁价格',
                    publishdate:'2016-12-01 06:56:00',
                    source:'扬子晚报',
                    status:'已发布'
                },
                {
                    title:'昌平区正规鲜花包装盒制作厂家,省钱又省心',
                    publishdate:'2016-12-01 06:56:00',
                    source:'搜狐',
                    status:'未发布'
                },
                {
                    title:'北极,其实是片鲜花盛开的海洋 | 和博物学家段煦一起游  ',
                    publishdate:'2016-12-01 06:56:00',
                    source:'人民日报',
                    status:'未发布'
                },
                {
                    title:' 鲜花“美容”迎新年',
                    publishdate:'2016-12-01 06:56:00',
                    source:'新浪',
                    status:'未发布'
                },
                {
                    title:'男学生求婚美女老师 老师狠砸钻戒践踏鲜花 怒斥不要脸',
                    publishdate:'2016-12-01 06:56:00',
                    source:'网易',
                    status:'未发布'
                },
                {
                    title:'摄影图片 美丽的鲜花开在长城上',
                    publishdate:'2017-06-01 06:56:00',
                    source:'腾讯',
                    status:'未发布'
                },
                {
                    title:'男生钻戒鲜花求婚女老师 美女教师怒斥不要脸砸钻戒',
                    publishdate:'2016-12-01 06:56:00',
                    source:'华龙网',
                    status:'未发布'
                },
                {
                    title:'昆明市官渡区绿化管理中心2016年12月-2018年12月城市道路鲜花种植及摆放采购项目招标公告',
                    publishdate:'2017-10-12 06:56:00',
                    source:'城视网',
                    status:'未发布'
                },
                {
                    title:'女星高圆圆投资鲜花品牌,“花店时间”瞬间人气爆棚',
                    publishdate:'2017-06-01 06:56:00',
                    source:'凤凰网',
                    status:'未发布'
                },
                {
                    title:'技巧 | 婚礼鲜花搭配技巧',
                    publishdate:'2016-10-01 06:56:00',
                    source:'齐鲁网',
                    status:'未发布'
                }
            ],
            currentpage:2,
            total:600,
            dialogPushFormVisible:false,
            pushForm:{
                pushtitle:'',
                pushcontent:''
            },
            pushrules:{
                pushtitle:[
                    {required:true,message:'请输入推送标题',trigger:'blur'}
                ],
                pushcontent:[
                    {required:true,message:'请输入推送内容',trigger:'blur'}
                ],
                pushlink:[
                    {required:true,message:'请输入链接',trigger:'blur'}
                ]
            },
            formLabelWidth:'140px',
            pushImageUrl:''
        }
    },
    components:{
        vTitle
    },
    methods:{
        handleAdd(){
            this.$router.push('editnews')
        },
        handleEdit(){
            this.$router.push('editnews')
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
        handlePush(){
            this.dialogPushFormVisible = true
        },
        handleCurrentChange(){

        },
        beforeAvatarUpload(file){
            const allowType = ['image/jpeg','image/png']
            const type = file.type
            const size = file.size / 1024 / 1024
            if(!allowType.includes(type)){
                this.$message.error('上传格式只能是jpg或者png')
            }
            if(size > 2){
                this.$message.error('上传的图片大小不能超过2M')
            }
        },
        handleAvatarSuccess(res,file){
            this.pushImageUrl = file.url
        }
    }
}
</script>

<style lang="scss">
    .table_item{margin:10px 0;}
    .table_column{padding:10px 0;}
    .form_item{display: inline-block;width: 450px;}
    .avatar-uploader .el-upload{
        border:1px dashed #d9d9d9;
        border-radius:6px;
        cursor:pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #20a0ff;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 150px;
        height: 150px;
        line-height: 150px;
        text-align: center;
    }
    .avatar {
        width: 150px;
        height: 150px;
        display: block;
    }
</style>
