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
                title : {
                text: '城市分布图',
                subtext: '',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['北京','上海','广州','深圳','杭州']
            },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'北京'},
                        {value:310, name:'上海'},
                        {value:234, name:'广州'},
                        {value:135, name:'深圳'},
                        {value:1548, name:'杭州'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
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
