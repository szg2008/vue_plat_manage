<template lang="html">
    <div class="">
        <v-title title="信息推送"></v-title>
        <div class="table_item">
            <el-row>
                <el-col :span="3">&nbsp;</el-col>
                <el-col :span="21">
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
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">&nbsp;</el-col>
                <el-col :span="12">
                    <div class="form_item">
                        <span>推送类型：</span>
                        <el-select v-model="status">
                            <el-option value="全部">全部</el-option>
                            <el-option value="成功">成功</el-option>
                            <el-option value="失败">失败</el-option>
                        </el-select>
                    </div>
                    <el-button type="primary">添加</el-button>
                    <el-button type="primary">推送新内容</el-button>
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
            total:67
        }
    },
    methods:{
        handleDel(){

        },
        handleCurrentChange(){

        }
    }
}
</script>

<style lang="scss">
    .table_item{margin:10px 0;}
    .table_item .el-col{margin-bottom: 10px;}
    .form_item{display:inline-block;}
    .form_item .el-input{width:120px;margin-right: 10px;}
    .form_item .date-picker{width:260px;}
    .table_column{padding:10px 0;}
</style>
