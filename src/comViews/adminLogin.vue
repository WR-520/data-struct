<template>
    <div class="wrap">
        <el-row>
            <!-- <el-col
                :xs="{ span: 0, offset: 0 }"
                :sm="{ span: 24 }"
                :md="{ span: 24 }"
                :lg="{ span: 24 }"
                :xl="{ span: 24 }"
            >
                <div style="height:60px;width:100%"></div>
            </el-col> -->
            <el-col
                :xs="{ span: 24, offset: 0 }"
                :sm="{ span: 12, offset: 6 }"
                :md="{ span: 10, offset: 7 }"
                :lg="{ span: 8, offset: 8 }"
                :xl="{ span: 6, offset: 9 }"
            >
                <div class="container">
                    <!-- <div class="img">
                        <img
                            id="logo"
                            alt=""
                        />
                    </div> -->

                    <div class="title">教师端登录</div>
                    <el-form
                        :model="loginForm"
                        ref="loginForm"
                        label-width="25%"
                    >
                        <el-form-item
                            label="用户账户"
                            prop="username"
                            :rules="[
                                {
                                    required: true,
                                    message: '请输入用户账户',
                                    trigger: 'blur',
                                },
                            ]"
                        >
                            <el-input
                                v-model="loginForm.username"
                                placeholder="密码：数字9开头的任意字符串"
                                style="width:90%"
                            ></el-input>
                        </el-form-item>

                        <el-form-item
                            label="密码"
                            prop="password"
                            :rules="[
                                {
                                    required: true,
                                    message: '请输入密码',
                                    trigger: 'blur',
                                },
                            ]"
                        >
                            <el-input
                                style="width:90%"
                                placeholder="密码：数字9开头的任意字符串"
                                v-model="loginForm.password"
                            ></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button
                                style="width:60%"
                                type="primary"
                                @click="submitForm('loginForm')"
                                >登录</el-button
                            >
                        </el-form-item>
                    </el-form>
                    <div class="forget">
                        <router-link to="">忘记密码？</router-link>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import local from 'utils/local.js'
import { adminLogin } from 'server/teacher.js'
import { Message } from 'element-ui'
export default {
    name: 'AdminLogin',
    data() {
        return {
            loginForm: {
                username: '',
                password: '',
            },
        }
    },
    methods: {
        submitForm: function(refsName) {
            this.$refs[refsName].validate(async valid => {
                if (valid) {
                    let res = await adminLogin(this.loginForm)
                    if (res.status === 200) {
                        console.log('login', res)
                        const { token } = res.data
                        local.clearSession()
                        local.setSessionVal('userinfo', res.data)
                        local.setSessionVal('token', token)
                        this.$router.replace('/admin')
                    } else {
                        Message({ message: res.desc, type: 'error' })
                    }
                }
            })
        },
    },
}
</script>
<style lang="less" scoped>
.wrap {
    height: 100%;
    padding-top: 80px;
    background: rgba(216, 214, 214, 0.04);
    position: relative;
}

.container {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    background-color: #ffffff;
    border: 1px solid #f3eded;
    padding-bottom: 30px;
    .headtitle {
        text-align: center;
        font-size: 24px;
        padding: 10px;
        box-sizing: border-box;
    }
    .title {
        text-align: center;
        font-size: 20px;
        padding: 10px;
        box-sizing: border-box;
    }
    .forget {
        padding: 10px 10%;
        box-sizing: border-box;
        text-align: right;
    }
    .forget a {
        text-decoration: none;
        color: lightgrey;
    }
}
.img {
    width: 100%;
    padding: 15px 10%;

    box-sizing: border-box;
    img {
        width: 80%;
        height: 50px;
    }
}
@media only screen and (max-width: 767px) {
    .container {
        background-color: #ffffff;
        box-shadow: none;
        border: none;
    }
}
</style>
