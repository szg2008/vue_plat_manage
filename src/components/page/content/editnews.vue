<template>
    <div class="">
        <v-title title="编辑/添加资讯"></v-title>
        <el-row>
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="23">
                <el-form :model="editForm" :rules="editRules" label-width="100px">
                    <el-form-item label="标题：" :label-width="formLabelWidth" prop="title">
                        <div class="form_item">
                            <el-input v-model="editForm.title" placeholder='请输入标题' @change="handleChangeTitle"></el-input>
                        </div>
                    </el-form-item>
                    <el-form-item label="来源：" :label-width="formLabelWidth" prop="source">
                        <div class="form_item">
                            <el-input v-model="editForm.source" placeholder="请输入来源" @change="handleChangeSource"></el-input>
                        </div>
                    </el-form-item>
                    <el-form-item label="正文：" :label-width="formLabelWidth" style="height:500px" prop="content">
                        <quill-editor
                        v-model="editForm.content"
                        ref="myQuillEditor"
                        class="editor"
                        :options="editorOption"
                        @ready="onEditorReady($event)"
                        >
                        </quill-editor>
                    </el-form-item>
                    <el-form-item label="发布在频道：" :label-width="formLabelWidth" prop="channel">
                        <div class="form_item">
                            <el-select v-model="editForm.channel" clearable placeholder="请选择">
                                <el-option
                                  v-for="item in channeloptions"
                                  :key="item.id"
                                  :label="item.value"
                                  :value="item.value">
                                </el-option>
                            </el-select>
                            <el-button type="primary" @click="handleAddChannel">添加</el-button>
                            <br>
                            <el-tag
                            class="tab_item"
                            :key="tag.value"
                            v-for="tag in tags"
                            :closable="true"
                            :type="tag.id"
                            @close="handleClose(tag)"
                            >
                                {{tag.value}}
                            </el-tag>
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="handleSave">保存</el-button>
                        <el-button @click="handleCancel">取消</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Vue from 'vue'
import vTitle from '../../common/Title'
import {quillEditor} from 'vue-quill-editor'
import {addNewsData,getNewsDataById} from '../../../api/api'
export default {
    components:{
        vTitle,
        quillEditor
    },
    created(){
        let id = this.$route.params.id
        if(id){
            getNewsDataById({
                id:id
            }).then(res => {
                this.editForm.title = res.data.data[0].title
                this.editForm.source = res.data.data[0].source
            })
        }
    },
    data(){
        return {
            editForm:{
                title:'',
                source:'',
                content:'',
                channel:''
            },
            editRules:{
                title:[
                    {required:true,message:'请输入标题',trigger:'blur'},
                    {min:0,max:64,message:'标题长度在64个字符以内',trigger:'blur'}
                ],
                source:[
                    {required:true,message:'请输入来源',trigger:'blur'},
                    {min:1,max:10,message:'来源长度在10个字符以内',trigger:'blur'}
                ]
            },
            formLabelWidth:'100px',
            editorOption:{},
            channeloptions:[
                {
                    value:'鲜花',
                    id:'1f4758df171a9d8fc31b583f81917a2f'
                },
                {
                    value:'淘宝',
                    id:'7d78c30582f63ab0b7ca583f7fc7b9c0'
                },
                {
                    value:'小白兔',
                    id:'20900317bc0f202c427c583f7f3fde8d'
                },
                {
                    value:'水仙',
                    id:'1d856890a4bd4c8b03b6583f7d526c5b'
                },
                {
                    value:'最成都',
                    id:'7a83837c51ab5129c78958353acb24a9'
                }
            ],
            tags:[]
        }
    },
    methods:{
        async addNewsData(){
            const result = await addNewsData({
                id:this.$route.params.id,
                title:this.editForm.title,
                source:this.editForm.source,
                channel:this.tags
            })

            this.$alert(result.data.msg,'提示',{
                confirmButtonText:'确定',
                callback:action => {
                    this.$router.push('/content/news')
                }
            })

        },
        onEditorReady(editor){
        },
        handleChangeTitle(value){
            this.editForm.title = value
        },
        handleChangeSource(value){
            this.editForm.source = value
        },
        handleAddChannel(){
            let channel = this.editForm.channel
            let arritem,subitem
            if(!!channel) {
                arritem = this.channeloptions.find((item,index,arr) => {
                    return item.value === channel
                })
            }
            //数组的变化更新视图，使用set
            if(!!arritem){
                subitem = this.tags.filter((item,index) => {
                    return item.id === arritem.id
                })
                if(!subitem.length){
                    Vue.set(this.tags,this.tags.length,arritem)
                    this.editForm.channel = ''
                }
            }
        },
        handleSave(){
            //区分编辑和添加，通过id的值是否为空
            this.addNewsData()
        },
        handleCancel(){
            this.$router.push('/content/news')
        },
        handleClose(tag){
            this.tags.splice(this.tags.indexOf(tag), 1)
        }
    }
}
</script>

<style lang="scss">
    .form_item{display: inline-block;width:400px;}
    .editor{height: 400px;}
    .tab_item{margin-right:10px;}
</style>
