// 教师端侧边菜单栏组件
<template>
    <div class="layout">
        <!-- defalut-active:默认活跃路由 -->
        <el-menu router :default-active="acticeIndex" :mode="mode">
            <el-row>
                <el-col
                    :xs="{ span: 4 }"
                    :sm="{ span: 24 }"
                    :md="{ span: 24 }"
                    :lg="{ span: 24 }"
                    :xl="{ span: 24 }"
                >
                    <el-menu-item index="/admin/index">
                        <i class="el-icon-notebook-2"></i>
                        <span slot="title">主页</span>
                    </el-menu-item>
                </el-col>
                <el-col
                    :xs="{ span: 6 }"
                    :sm="{ span: 24 }"
                    :md="{ span: 24 }"
                    :lg="{ span: 24 }"
                    :xl="{ span: 24 }"
                >
                    <el-menu-item index="/admin/test">
                        <i class="el-icon-notebook-2"></i>
                        <span slot="title">课程信息</span>
                    </el-menu-item>
                </el-col>
                <el-col
                    :xs="{ span: 4 }"
                    :sm="{ span: 24 }"
                    :md="{ span: 24 }"
                    :lg="{ span: 24 }"
                    :xl="{ span: 24 }"
                >
                    <el-menu-item index="/admin/statistics">
                        <i class="el-icon-s-data"></i>
                        <span slot="title">统计</span>
                    </el-menu-item>
                </el-col>
                <el-col
                    :xs="{ span: 6 }"
                    :sm="{ span: 24 }"
                    :md="{ span: 24 }"
                    :lg="{ span: 24 }"
                    :xl="{ span: 24 }"
                >
                    <!-- <el-menu-item index="/admin/telllst">
                        <i class="el-icon-folder-opened"></i>
                        <span slot="title">试卷发布</span>
                    </el-menu-item> -->
                    <el-submenu
                        index="/admin"
                        :popper-append-to-body="false"
                        class="sub-menu"
                        popper-class="pop-menu"
                    >
                        <template slot="title">
                            <i class="el-icon-edit-outline"></i>
                            <span slot="title">试卷发布</span>
                        </template>
                        <el-menu-item index="/admin/classexam"
                            >课前测</el-menu-item
                        >
                        <el-menu-item index="/admin/onlineexam"
                            >试卷</el-menu-item
                        >
                    </el-submenu>
                </el-col>
                <el-col
                    :xs="{ span: 4 }"
                    :sm="{ span: 24 }"
                    :md="{ span: 24 }"
                    :lg="{ span: 24 }"
                    :xl="{ span: 24 }"
                >
                    <el-menu-item index="/admin/questions">
                        <i class="el-icon-folder-opened"></i>
                        <span slot="title">题库</span>
                    </el-menu-item>
                </el-col>
            </el-row>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: 'TeaMenu',
    data() {
        return {};
    },

    computed: {
        mode: function() {
            return document.documentElement.scrollWidth >= 768
                ? 'vertical'
                : 'horizontal';
        },
        acticeIndex: function() {
            let { path } = this.$route;
            return path;
        },
    },
    methods: {},
    mounted() {
        console.log(this.$route);
    },
    components: {},
};
</script>

<style lang="less">
.layout {
    .el-menu-item {
        padding: 0;
    }
    .sub-menu {
        width: 100%;
        position: relative;
        padding: 0;
        background: rgb(253, 251, 251);
        .el-submenu__title {
            padding: 0;
        }
        .el-submenu__icon-arrow {
            position: relative;
            top: 0;
            right: 0;
        }
        .el-menu-item {
            min-width: 0;
        }
    }
    .el-menu :focus {
        outline: 0;
    }
    .pop-menu {
        width: 100%;
        .el-menu {
            width: 100%;
            min-width: 0;
        }
        .el-menu-item {
            min-width: 0;
        }
    }
}
.tac {
    flex-grow: 1;
}
</style>
