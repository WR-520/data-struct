// 填空题描述 组件
<template>
    <div class="completionDesc">
        <div>
            <span>{{ '【填空题】' }}</span
            ><span>{{ record.name }}</span>
        </div>

        <div class="answerbox" v-if="showAns">
            正确答案：<span
                v-for="(ans, ind) in record.answers"
                :key="ind"
                class="answerSpan"
                >{{ ans }}
                <i v-if="ind !== record.answers.length - 1">、</i></span
            >
        </div>
    </div>
</template>
<script>
export default {
    props: {
        record: Object,
        showAns: Boolean,
    },
    name: 'CompletionDesc',
    data() {
        return {};
    },
    methods: {},
    mounted() {},
};
</script>
<style lang="less" scoped>
.completionDesc {
    font-size: 12px;
}
.options {
    margin: 8px 0;
    margin-left: 18px;
}
.answerbox {
    padding: 10px 20px 0 20px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 12px;
    font-weight: 500;
    text-align: left;
    box-sizing: border-box;
}
</style>
<style lang="less">
.CompletionDesc {
    .el-checkbox__label {
        font-size: 12px;
    }
}
</style>
