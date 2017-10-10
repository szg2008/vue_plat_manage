<template lang="html">
    <div class="">
        <v-title title="第三方设置"></v-title>
        <el-tabs v-model="activeName" type="card">
            <el-tab-pane label="分享" name="first">
                <el-form :model="shareForm">
                    <el-row>
                        <el-col :span="3">&nbsp;</el-col>
                        <el-col :span="2">微博：</el-col>
                        <el-col :span="19">
                            <el-form-item label="App Key：" :label-width="formLabelWidth" prop="share.key">
                                <div class="form-item">
                                    <el-input v-model="shareForm.share.key"></el-input>
                                </div>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="5">&nbsp;</el-col>
                        <el-col :span="19">
                            <el-form-item label="App Secret：" :label-width="formLabelWidth" prop="share.secret">
                                <div class="form-item">
                                    <el-input v-model="shareForm.share.secret"></el-input>
                                </div>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <br>
                    <el-row>
                        <el-col :span="3">&nbsp;</el-col>
                        <el-col :span="2">微信：</el-col>
                        <el-col :span="19">
                            <el-form-item label="App ID：" :label-width="formLabelWidth" prop="wx.id">
                                <div class="form-item">
                                    <el-input v-model="shareForm.wx.id"></el-input>
                                </div>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="5">&nbsp;</el-col>
                        <el-col :span="19">
                            <el-form-item label="App Secret：" :label-width="formLabelWidth" prop="wx.secret">
                                <div class="form-item">
                                    <el-input v-model="shareForm.wx.secret"></el-input>
                                </div>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <br>
                    <el-row>
                        <el-col :span="3">&nbsp;</el-col>
                        <el-col :span="2">QQ：</el-col>
                        <el-col :span="19">
                            <el-form-item label="App ID：" :label-width="formLabelWidth" prop="qq.id">
                                <div class="form-item">
                                    <el-input v-model="shareForm.qq.id"></el-input>
                                </div>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="5">&nbsp;</el-col>
                        <el-col :span="19">
                            <el-form-item label="App Key：" :label-width="formLabelWidth" prop="qq.key">
                                <div class="form-item">
                                    <el-input v-model="shareForm.qq.key"></el-input>
                                </div>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <br>
                    <el-row>
                        <el-col :span="5">&nbsp;</el-col>
                        <el-col :span="19">
                            <el-form-item label="" :label-width="formLabelWidth">
                                <div class="form-item">
                                    <el-button type="primary">保存设置</el-button>
                                </div>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="腾讯云" name="second">
                <el-form :model="tencentForm">
                    <el-row>
                        <el-col :span="5">&nbsp;</el-col>
                        <el-col :span="19">
                            <el-form-item label="Secret ID：" :label-width="formLabelWidth" prop="id">
                                <div class="form-item">
                                    <el-input v-model="tencentForm.id"></el-input>
                                </div>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="5">&nbsp;</el-col>
                        <el-col :span="19">
                            <el-form-item label="Secret Key：" :label-width="formLabelWidth" prop="key">
                                <div class="form-item">
                                    <el-input v-model="tencentForm.key"></el-input>
                                </div>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <br>
                    <el-row>
                        <el-col :span="5">&nbsp;</el-col>
                        <el-col :span="19">
                            <el-form-item label="" :label-width="formLabelWidth">
                                <div class="form-item">
                                    <el-button type="primary">保存设置</el-button>
                                </div>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="短信宝" name="third">
                <el-form :model="messageForm">
                    <el-row>
                        <el-col :span="5">&nbsp;</el-col>
                        <el-col :span="19">
                            <el-form-item label="用户名：" :label-width="formLabelWidth" prop="username">
                                <div class="form-item">
                                    <el-input v-model="messageForm.username"></el-input>
                                </div>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="5">&nbsp;</el-col>
                        <el-col :span="19">
                            <el-form-item label="密码：" :label-width="formLabelWidth" prop="password">
                                <div class="form-item">
                                    <el-input v-model="messageForm.password"></el-input>
                                </div>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="5">&nbsp;</el-col>
                        <el-col :span="19">
                            <el-form-item label="签名：" :label-width="formLabelWidth" prop="signture">
                                <div class="form-item">
                                    <el-input v-model="messageForm.signture"></el-input>
                                </div>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <br>
                    <el-row>
                        <el-col :span="5">&nbsp;</el-col>
                        <el-col :span="19">
                            <el-form-item label="" :label-width="formLabelWidth">
                                <div class="form-item">
                                    <el-button type="primary">保存设置</el-button>
                                </div>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="高德地图" name="fourth">
                <el-form :model="gaodeForm">
                    <el-row>
                        <el-col :span="5">&nbsp;</el-col>
                        <el-col :span="19">
                            <el-form-item label="Android：" :label-width="formLabelWidth" prop="android">
                                <div class="form-item">
                                    <el-input v-model="gaodeForm.android"></el-input>
                                </div>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="5">&nbsp;</el-col>
                        <el-col :span="19">
                            <el-form-item label="Ios：" :label-width="formLabelWidth" prop="ios">
                                <div class="form-item">
                                    <el-input v-model="gaodeForm.ios"></el-input>
                                </div>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <br>
                    <el-row>
                        <el-col :span="5">&nbsp;</el-col>
                        <el-col :span="19">
                            <el-form-item label="" :label-width="formLabelWidth">
                                <div class="form-item">
                                    <el-button type="primary">保存设置</el-button>
                                </div>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </el-tab-pane>
        </el-tabs>
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
            activeName: 'first',
            formLabelWidth:'100px',
            shareForm:{
                share:{
                    key:'',
                    secret:''
                },
                wx:{
                    id:'',
                    secret:''
                },
                qq:{
                    id:'',
                    key:''
                }
            },
            tencentForm:{
                id:'',
                key:''
            },
            messageForm:{
                username:'',
                password:'',
                signture:''
            },
            gaodeForm:{
                android:'',
                ios:''
            }
        }
    }
}
</script>

<style lang="scss">
    .el-row{margin:10px 0;}
    .el-col{height: 36px;line-height: 36px;}
    .el-tabs__item{width:120px;text-align:center;}
    .el-tabs__header{margin:0 0 30px;}
    .el-form-item__content{display:inline-block;margin-left:30px !important}
    .form-item{width:300px;}
</style>
