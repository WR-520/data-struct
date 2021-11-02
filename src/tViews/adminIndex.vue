//教师端主体布局 
<template>
    <div>
        <el-row style="height:100%">
           <!-- 侧边栏 -->
            <el-col
                :xs="{ span: 24 }"
                :sm="{ span: 4 }"
                :md="{ span: 4 }"
                :lg="{ span: 3 }"
                :xl="{ span: 2 }"
            >
                <TeaMenu />
                <!-- <router-view name="menu"></router-view> -->
            </el-col>

            <el-col
                :xs="{ span: 24 }"
                :sm="{ span: 20 }"
                :md="{ span: 20 }"
                :lg="{ span: 21 }"
                :xl="{ span: 22 }"
            >      
                  <!-- 根据路由展示的内容栏 -->
                <router-view :key="_key"></router-view>
            </el-col>
        </el-row>
        <Folder />
    </div>
</template>
<script>
import TeaMenu from 'teaComponents/teaMenu';
import Folder from 'teaComponents/folder';

export default {
    name: 'AdminIndex',
    methods: {},
    mounted() {},
    components: {
        TeaMenu,
        Folder,
    },
    computed: {
        _key: function() {
            console.log(this.$route);
            return this.$route.fullPath;
        },
    },
};
</script>
<style lang="less"></style>
