<template lang="html">
    <div class="container">
        <v-head></v-head>
        <v-menu></v-menu>
        <div class="content">
            <el-row>
                <el-col :span="5">
                    <v-slidebar></v-slidebar>
                </el-col>
                <el-col :span="19">
                    <transition name="fade" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </el-col>
            </el-row>

        </div>
    </div>
</template>

<script>
import vHead from './Header'
import vMenu from './Menu'
import vSlidebar from './SlideBar'
export default {
    components:{//注册组件
        vHead,
        vMenu,
        vSlidebar
    }
}
</script>

<style lang="scss">
    .container{
        width:1120px;
        margin:0 auto;
    }
    .content{margin-top:20px;}
</style>
