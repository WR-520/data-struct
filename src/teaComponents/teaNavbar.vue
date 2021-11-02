// 头部navbar组件
<template>
    <div id="navbar">
        <el-menu router id="nav" mode="horizontal">
            <el-menu-item index="/admin">
                <template slot="title">
                    <!-- <img
                        id="logo"

                        alt=""
                    /> -->
                </template>
            </el-menu-item>

            <el-menu-item class="le" @click="GoCenter">
                <template slot="title">
                    <el-popover
                        placement="bottom-start"
                        trigger="hover"
                        popper-class="pop-person"
                    >
                    <!-- 登录与否 若登录：显示“退出登录” 若未登录：显示"去登录" -->
                        <ul class="pop-person-ul" v-if="isLogined">
                            <li>个人中心</li>
                            <li @click="loginOut">退出登录</li>
                        </ul>
                        <ul class="pop-person-ul" v-else>
                            <li @click="goToLogin">去登录</li>
                        </ul>
                        <!-- 用户头像 -->
                        <el-avatar
                            size="medium"
                            :src="avatar"
                            slot="reference"
                            v-popover:popover
                        ></el-avatar>
                    </el-popover>
                </template>
            </el-menu-item>
            <el-menu-item class="ri" index="NewsCenter">
                <template slot="title">
                    <i class="el-icon-bell"></i>
                </template>
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script>
import { isLogined } from 'utils/util'
import local from 'utils/local'
export default {
    name: 'TeaNavbar',
    data() {
        return {
            activeIndex: '1',
            //  isLogined: false,
        }
    },
    // 计算属性是基于它们的响应式依赖进行缓存的。只在相关响应式依赖发生改变时它们才会重新求值。

    computed: {
        // 是否登录
        isLogined: () => isLogined(),
        // 用户信息
        userInfo: () => local.getSessionVal('userinfo'),
        // 用户头像：如果没有登录则展示默认头像
        avatar: function() {
            return (
                this.userInfo.avatar ||
                'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
            )
        },
    },

    methods: {
        goToLogin: function() {},

        // 退出登录
        loginOut: function() {
            local.clearSession() // 清除sessionStorage就能退出来了；
            this.$router.replace('/adminlogin')
        },
        GoCenter: function() {
            //    if(this.isLogined){
            //      this.$router.push('/Center')
            //    }
        },
    },
    mounted() {},
    components: {},
}
</script>

<style scoped lang="less">
#navbar {
    #logo {
        width: 100px;
        height: 100%;
    }
    #nav {
        position: relative;
        .le {
            position: absolute;
            right: 20px;
        }
        .ri {
            position: absolute;
            right: 80px;
        }
        .el-icon-bell {
            font-size: 23px;
        }
        .el-avatar > img {
            width: 100%;
        }
    }
}
</style>
<style lang="less">
.el-avatar > img {
    width: 100%;
}
.pop-person {
    padding: 0;

    .pop-person-ul {
        list-style: none;
        text-align: center;
        margin: 0;
        padding: 0;
    }
    .pop-person-ul li {
        cursor: pointer;
        padding: 10px;
        box-sizing: border-box;
    }
}
</style>
