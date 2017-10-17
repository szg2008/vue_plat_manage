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
                title: { text: '我的云平台使用分布图' },
                tooltip: {
                    name:'http://echarts.baidu.com/tutorial.html#%E5%9C%A8%20webpack%20%E4%B8%AD%E4%BD%BF%E7%94%A8%20ECharts'
                },
                xAxis: {
                    data: ["内容管理","高级设置","App打包","运营服务","企业会员"]
                },
                yAxis: {},
                series: [{
                    name: '点击率',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10]
                }]
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
