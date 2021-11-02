<template>
    <div id="navbar">
        <el-menu
            router
            id="nav"
            :default-active="activeIndex"
            mode="horizontal"
        >
            <el-menu-item index="/home">
                <template slot="title">
                    <!-- <img
                        id="logo"
                       
                        alt=""
                    /> -->
                </template>
            </el-menu-item>
            <el-menu-item index="/home">
                <template slot="title">
                    <i class="el-icon-s-home"></i>
                    <span>首页</span>
                    <!-- <router-link to="home">首页</router-link> -->
                </template>
            </el-menu-item>
            <el-menu-item index="/question">
                <template slot="title">
                    <i class="el-icon-edit-outline"></i>
                    <span>题库</span>
                </template>
            </el-menu-item>
            <el-menu-item index="/discuss">
                <template slot="title">
                    <i class="el-icon-chat-line-square"></i>
                    <span>讨论区</span>
                </template>
            </el-menu-item>
            <el-menu-item class="le" @click="GoCenter">
                <!-- <template slot="title">
          <el-avatar
            size="medium"
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          ></el-avatar>
        
        </template> -->
                <template slot="title">
                    <el-popover
                        placement="bottom-start"
                        width="200"
                        trigger="hover"
                    >
                        <!-- <el-button slot="reference" v-popover:popover>focus 激活</el-button> -->
                        <ul v-if="isLogined">
                            <li>个人中心</li>
                            <li @click="loginOut">退出登录</li>
                        </ul>
                        <ul v-else>
                            <li @click="goToLogin">去登录</li>
                        </ul>
                        <el-avatar
                            size="medium"
                            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                            slot="reference"
                            v-popover:popover
                        ></el-avatar>
                    </el-popover>
                    <!-- <el-button v-popover:popover>focus 激活</el-button> -->
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
// import local from "../../../utils/local";
export default {
    name: 'Navbar',
    data() {
        return {
            activeIndex: '1',
            isLogined: false,
        }
    },
    computed: {
        // isLogined: function() {
        //   return !!local.getSessionVal("token");
        // },
    },

    methods: {
        goToLogin: function() {
            // 发现问题：教师端要有一个登录入口（）
            // 根据当前路由信息，选择跳学生端还是教师端
            console.log('去登陆')
            /*this.$route.path获取当前路由地址*/
            //   let routArrs = this.$route.path.substring(1).split("/");
            //   console.log(routArrs);
            //   if (routArrs[0] !== "admin") {
            //     this.$router.push("/sign");
            //   } else {
            //     // 教师登录
            //     this.$router.push("/register");
            //     // 设计的不合理的地方就出来了，点击学生登录，再点击教师登录 登录完后自动跳到上一页，结果跳到了学生登录页？？？
            //   }
        },

        // 退出登录
        loginOut: function() {
            //   local.removeSessionVal("token")
            //  // local.clearSession(); // 清除sessionStorage就能退出来了；
            //   window.location.replace("/")
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
    }
}
</style>
