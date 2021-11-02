//超长截取，悬浮显示 组件
<template>
    <el-tooltip
        class="item"
        effect="light"
        :content="content"
        placement="top-start"
    >
        <el-button @click="hanldeClassClick">{{ label }}</el-button>
    </el-tooltip>
</template>
<style lang="less" scoped>
.item {
    margin: 4px;
}
</style>
<script>
export default {
    name: 'TooltipButton',
    props: {
        label: String,
        content: String,
        hanldeClassClick: Function,
    },
}
</script>
