// 判断题描述

<template>
    <div class="judgmentDesc">
        <div>
            <span>{{ '【判断题】' }}</span
            ><span>{{ record.name }}</span>
        </div>
        <div class="options">
            <el-checkbox-group
                v-model="record.checkedOptions"
                :min="0"
                :max="1"
            >
                <el-checkbox
                    v-for="op in record.options"
                    :label="DICTIONARY[op.key]"
                    :key="op.key"
                >
                    {{ op.value }}
                </el-checkbox>
            </el-checkbox-group>
        </div>

        <div class="answerbox" v-if="showAns">
            正确答案：<span class="answerSpan">{{ record.answers.value }}</span>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        record: Object,
        showAns: Boolean,
    },
    name: 'JudgmentDesc',
    data() {
        return {
            DICTIONARY: 'ABCDEFGHIJK',
        };
    },
    methods: {},
    mounted() {},
};
</script>
<style lang="less" scoped>
.judgmentDesc {
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
.answerSpan {
    margin: 0 4px;
    color: #04e015;
}
</style>
<style lang="less">
.judgmentDesc {
    .el-checkbox__label {
        font-size: 12px;
    }
}
</style>
