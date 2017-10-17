<template lang="html">
    <div class="">
        <v-title title="分布图"></v-title>
            <el-row>
                <el-col :span="24">
                    <div class="" id="curvecontainer"></div>
                </el-col>
            </el-row>
    </div>
</template>

<script>
import vTitle from '../../common/Title'
import echarts from 'echarts'
// import 'echarts/lib/chart/bar'
// import 'echarts/lib/component/tooltip'
// import 'echarts/lib/component/title'
export default {
    components:{
        vTitle
    },
    data(){
        return {

        }
    },
    mounted(){
        this.$nextTick(() => {
            let mycharts = echarts.init(document.getElementById('curvecontainer'))
            mycharts.setOption({
                series : [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data:[
                {value:235, name:'视频广告'},
                {value:274, name:'联盟广告'},
                {value:310, name:'邮件营销'},
                {value:335, name:'直接访问'},
                {value:400, name:'搜索引擎'}
            ]
        }
    ]
            })
        })
    },
    methods:{

    }
}
</script>

<style lang="scss">
    #curvecontainer{height: 500px;}
</style>
