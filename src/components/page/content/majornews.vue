<template lang="html">
    <div class="">
        <v-title title="要闻"></v-title>
        <div class="table_item">
            <el-row>
                <el-col :span="16">&nbsp;</el-col>
                <el-col :span="8">
                    <div class="" style="display:inline-block">
                        <el-input v-model="title" placeholder='请输入标题'></el-input>
                    </div>
                    <el-button type="primary">搜索</el-button>
                </el-col>
            </el-row>
        </div>
        <div class="table_item">
            <el-row>
                <el-table :data='tableData' border>
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
                            <el-button type="text" @click="handleDel">删除</el-button>
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
export default {
    components:{
        vTitle
    },
    data(){
        return {
            title:'',
            tableData:[
                {
                    title:'外滩屋顶花园设计施工，酒店鲜花绿植租赁价格',
                    publishdate:'2016-12-01 06:56:00',
                    thumb:'http://pic5.zhongsou.com/img?id=5209a554f20e8739e79'
                },
                {
                    title:'昌平区正规鲜花包装盒制作厂家,省钱又省心',
                    publishdate:'2016-12-01 06:56:00',
                    thumb:'http://pic5.zhongsou.com/img?id=52025be6c070fba1940'
                },
                {
                    title:'北极,其实是片鲜花盛开的海洋 | 和博物学家段煦一起游  ',
                    publishdate:'2016-12-01 06:56:00',
                    thumb:'http://pic5.zhongsou.com/img?id=520dafafe7bd3c0e0d3'
                },
                {
                    title:' 鲜花“美容”迎新年',
                    publishdate:'2016-12-01 06:56:00',
                    thumb:'http://pic5.zhongsou.com/img?id=52021d75c13fc849abd'
                },
                {
                    title:'男学生求婚美女老师 老师狠砸钻戒践踏鲜花 怒斥不要脸',
                    publishdate:'2016-12-01 06:56:00',
                    thumb:'http://pic5.zhongsou.com/img?id=520c703a9686b37e7bd'
                },
                {
                    title:'摄影图片 美丽的鲜花开在长城上',
                    publishdate:'2017-06-01 06:56:00',
                    thumb:'http://pic5.zhongsou.com/img?id=520b7cdbe10c607c1c0'
                },
                {
                    title:'男生钻戒鲜花求婚女老师 美女教师怒斥不要脸砸钻戒',
                    publishdate:'2016-12-01 06:56:00',
                    thumb:'http://pic5.zhongsou.com/img?id=520ff1a9812f07fb9f0'
                },
                {
                    title:'昆明市官渡区绿化管理中心2016年12月-2018年12月城市道路鲜花种植及摆放采购项目招标公告',
                    publishdate:'2017-10-12 06:56:00',
                    thumb:'http://pic5.zhongsou.com/img?id=52063fa648092266c0c'
                },
                {
                    title:'女星高圆圆投资鲜花品牌,“花店时间”瞬间人气爆棚',
                    publishdate:'2017-06-01 06:56:00',
                    thumb:'http://pic5.zhongsou.com/img?id=520c6996c3f7047e108'
                },
                {
                    title:'技巧 | 婚礼鲜花搭配技巧',
                    publishdate:'2016-10-01 06:56:00',
                    thumb:'http://pic5.zhongsou.com/img?id=520e189087157c58c53'
                }
            ],
            currentpage:2,
            total:406
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

        }
    }
}
</script>

<style lang="scss">
    .table_item{margin:10px 0;}
    .table_column{padding:5px 0;}
    .table_column img{vertical-align: middle;}
</style>
