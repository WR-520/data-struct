// 首页

<template>
    <el-tabs class="index-tabs">
        <el-tab-pane>
            <span slot="label"><i class="el-icon-date"></i> 我的课程</span>
            <ClassInfo />
        </el-tab-pane>
        <el-tab-pane>
            <span slot="label"
                ><i class="el-icon-s-operation"></i> 课程大纲</span
            >
            课程大纲
        </el-tab-pane>
    </el-tabs>
</template>
<script>
import ClassInfo from 'teaComponents/classInfo';
export default {
    name: 'AdminHome',
    data: function() {
        return {};
    },
    components: {
        ClassInfo,
    },
};
</script>
<style lang="less" scoped></style>
<style lang="less">
.index-tabs {
    margin: 0 20px;
    .el-tabs__nav-scroll {
        padding-left: 80px;
        box-sizing: border-box;
    }
}
</style>
