<template lang="html">
    <div class="">
        <v-title title="信息推送"></v-title>
        <div class="table_item">
            <el-row>
                <el-col :span="24">
                    <div class="form_item">
                        <span>标题：</span>
                        <el-input v-model="title" placeholder='请输入标题'></el-input>
                    </div>
                    <div class="form_item">
                        <span>推送起止时间：</span>
                        <el-date-picker
                            class="date-picker"
                            v-model="date"
                            type="daterange"
                            placeholder="选择日期范围">
                        </el-date-picker>
                    </div>
                    <div class="form_item">
                        <span>推送类型：</span>
                        <el-select v-model="type">
                            <el-option value="自定义">自定义</el-option>
                            <el-option value="绑定">绑定</el-option>
                        </el-select>
                    </div>
                    <div class="form_item">
                        <span>状态：</span>
                        <el-select v-model="status">
                            <el-option value="全部">全部</el-option>
                            <el-option value="成功">成功</el-option>
                            <el-option value="失败">失败</el-option>
                        </el-select>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="21">&nbsp;</el-col>
                <el-col :span="3">
                    <el-button type="primary" @click="dialogPushNewContent=true">推送新内容</el-button>
                </el-col>
            </el-row>
        </div>
        <div class="table_item">
            <el-row>
                <el-table :data='tableData' border>
                    <el-table-column type="selection" width="55" align="center" class-name="table_column"></el-table-column>
                    <el-table-column prop="title" label="标题" width="" align="center" class-name="table_column"></el-table-column>
                    <el-table-column prop="pushdate" label="推送时间" width="150" align="center" class-name="table_column"></el-table-column>
                    <el-table-column prop="type" label="推送类型" width="100" align="center" class-name="table_column"></el-table-column>
                    <el-table-column prop="column" label="所属栏目" width="100" align="center" class-name="table_column"></el-table-column>
                    <el-table-column prop="status" label="状态" width="100" align="center" class-name="table_column"></el-table-column>
                    <el-table-column prop="person" label="推送人" width="80" align="center" class-name="table_column"></el-table-column>
                    <el-table-column label="操作" width="90" align="center" class-name="table_column">
                        <template scope="scope">
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
                    @current-change="handleCurrentChange"
                    :current-page="currentpage"
                    layout="total,prev,pager,next,jumper"
                    :total="total"
                    >
                    </el-pagination>
                </el-col>
            </el-row>
        </div>
        <el-dialog title="推送" :visible.aync="dialogPushNewContent">
            <el-row>
                <el-col :span="1">&nbsp;</el-col>
                <el-col :span="22">
                    <span>已绑定栏目：</span>
                    <el-radio-group v-model="bindColumn">
                        <el-radio :label="0">里约直击</el-radio>
                        <el-radio :label="1">新闻动态</el-radio>
                        <el-radio :label="2">相关图片</el-radio>
                        <el-radio :label="3">熊猫</el-radio>
                        <el-radio :label="4">北京吃喝</el-radio>
                        <el-radio :label="5">羊蝎子</el-radio>
                    </el-radio-group>
                </el-col>
                <el-col :span="1">&nbsp;</el-col>
            </el-row>
            <br>
            <el-row>
                <el-col :span="1">&nbsp;</el-col>
                <el-col :span="22">
                    <el-table :data='pushData' border>
                        <el-table-column prop="title" label="标题" width="" align="center" class-name="table_column"></el-table-column>
                        <el-table-column prop="publishdate" label="发布时间" width="200" align="center" class-name="table_column"></el-table-column>
                        <el-table-column label="操作" width="150" align="center" class-name="table_column">
                            <template scope="scope">
                                <el-button type="text" @click="handlePush">推送</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-col>
                <el-col :span="1">&nbsp;</el-col>
            </el-row>
            <br>
            <el-row>
                <el-col :span="3">&nbsp;</el-col>
                <el-col :span="18">
                    <el-pagination
                    small
                    layout="prev, pager, next"
                    :total="120">
                    </el-pagination>

                </el-col>
                <el-col :span="3"><el-button @click="dialogPushNewContent=false">关闭</el-button></el-col>
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
            title:'',
            date:'',
            type:'',
            status:'',
            tableData:[
                {
                    title:'“.手机”域名注册在成都启动',
                    pushdate:'2017-09-23',
                    type:'自定义',
                    column:'最成都',
                    status:'推送成功',
                    person:'lily'
                },
                {
                    title:'12星座射手座新月许愿攻略',
                    pushdate:'2017-10-23',
                    type:'自定义',
                    column:'协议',
                    status:'推送成功',
                    person:'chao'
                },
                {
                    title:'创意信息签订战略合作协议',
                    pushdate:'2017-08-18',
                    type:'自定义',
                    column:'最成都',
                    status:'推送成功',
                    person:'lily'
                },
                {
                    title:'焦圈每日精华点评作品图集',
                    pushdate:'2017-01-24',
                    type:'绑定',
                    column:'淘宝',
                    status:'推送成功',
                    person:'steve'
                },
                {
                    title:'河北·白沟市场采购贸易方式试点启动',
                    pushdate:'2017-05-05',
                    type:'自定义',
                    column:'水仙',
                    status:'推送成功',
                    person:'John'
                },{
                    title:'成都人坐网约车最易丢什么',
                    pushdate:'2017-07-20',
                    type:'绑定',
                    column:'小白兔',
                    status:'推送成功',
                    person:'halei'
                }
            ],
            currentpage:6,
            total:67,
            dialogPushNewContent:false,
            bindColumn:2,
            pushData:[
                {
                    title:'外滩屋顶花园设计施工，酒店鲜花绿植租赁价格',
                    publishdate:'2017-02-12'
                },
                {
                    title:'鲜花盛放 希望重塑',
                    publishdate:'2017-02-12'
                },
                {
                    title:'成都最具影响力的生活',
                    publishdate:'2017-02-12'
                },
                {
                    title:'鲜花电商谁会成为消费升级的最大黑马',
                    publishdate:'2017-02-12'
                },
                {
                    title:'成都宝贝家族儿童摄影',
                    publishdate:'2017-02-12'
                },
                {
                    title:'社区_成都吃喝玩乐',
                    publishdate:'2017-02-12'
                }
            ]
        }
    },
    methods:{
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
        handleCurrentChange(){

        },
        handlePush(){
            this.dialogPushNewContent = false
        }
    }
}
</script>

<style lang="scss">
    .table_item{margin:10px 0;}
    .table_item .el-col{margin-bottom: 10px;}
    .form_item{display:inline-block;}
    .form_item .el-input{width:120px;margin-right: 10px;}
    .form_item .date-picker{width:240px;}
    .table_column{padding:10px 0;}
</style>
