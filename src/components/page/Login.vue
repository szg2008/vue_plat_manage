<template>
    <div class="">
        <el-row :gutter="20">
            <el-col :span="4">&nbsp;</el-col>
            <el-col :span="8">
                <div class="img-container">
                    <img src="http://sns-img.b0.upaiyun.com/dunzd/1710/1616/30/151078115621761508142606.png" width=540>
                </div>
            </el-col>
            <el-col :span="8">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="0px" class="login-container">
                    <h3 class="title">平台登录</h3>
                    <el-form-item prop="account">
                        <el-input type="text" v-model="ruleForm.account" auto-complete="off" placeholder="账号"></el-input>
                    </el-form-item>
                    <el-form-item prop="checkPass">
                        <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off" placeholder="密码"></el-input>
                    </el-form-item>
                    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
                    <el-form-item style="width:100%;">
                        <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit" :loading="logining">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span="4">&nbsp;</el-col>
        </el-row>

    </div>
</template>

<script>
    export default {
    data() {
      return {
        logining: false,
        ruleForm: {
          account: 'admin',
          checkPass: '111111'
        },
        rules: {
          account: [
              { required: true, message: '请输入账号', trigger: 'blur' },
          ],
          checkPass: [
              { required: true, message: '请输入密码', trigger: 'blur' },
          ]
        },
        checked: true
      };
    },
    methods: {
      handleSubmit(ev) {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
              this.$router.push({ path: '/content' })
          } else {
              return
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
  .img-container{
      margin:180px auto;
  }
</style>
