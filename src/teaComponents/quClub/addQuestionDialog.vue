// 添加试题（新建题目）模态框
// close:dialog关闭的回调
<template>
    <el-dialog
        key="addQuvisible"
        :visible="addQuvisible"
        center
        :width="width"
        title="新建题目"
        :close-on-click-modal="false"
        :append-to-body="true"
        @close="cancelFun"
        class="addquestion"
    >
    <!-- 切换栏  默认选中选择题-->
        <el-tabs v-model="typeId" size="mini">
            <el-tab-pane label="选择题" name="1">
                <!-- 选择题表单 -->
                <ChoiceForm
                    v-if="typeId === '1'"
                    :formData="formData"
                    :handlecancelFun="handlecancelFun"
                />
            </el-tab-pane>
            <el-tab-pane label="填空题" name="2">
                <CompletionForm
                    v-if="typeId === '2'"
                    :formData="formData"
                    :handlecancelFun="handlecancelFun"
                />
            </el-tab-pane>
            <el-tab-pane label="判断题" name="3">
                <JudgmentForm
                    v-if="typeId === '3'"
                    :formData="formData"
                    :handlecancelFun="handlecancelFun"
                />
            </el-tab-pane>
            <el-tab-pane label="简答题" name="4"
                ><ShortanswerForm
                    v-if="typeId === '4'"
                    :formData="formData"
                    :handlecancelFun="handlecancelFun"
            /></el-tab-pane>
        </el-tabs>
    </el-dialog>
</template>
<script>
// import { Message } from 'element-ui';
// import { MessageBox } from 'element-ui';
import ChoiceForm from 'teaComponents/formClub/choiceForm.vue';
import CompletionForm from 'teaComponents/formClub/completionForm.vue';
import JudgmentForm from 'teaComponents/formClub/judgmentForm.vue';
import ShortanswerForm from 'teaComponents/formClub/shortanswerForm.vue';

export default {
    props: {
        addQuvisible: Boolean,
        cancelFun: Function,
    },
    name: 'AddQuestionDialog',
    data() {
        return {
            typeId: '1', // 1 选择题 2 填空 3判断 4 简答
            // ref: 'formref', // 表单引用
            formData: {},
        };
    },

    methods: {
        handleClick(v) {
            console.log(typeof v);
        },
        handlecancelFun() {
            this.cancelFun();
        },
    },
    mounted() {},
    computed: {
        width: function() {
            return document.documentElement.clientWidth >= 768
                ? '600px'
                : '100%';
        },
    },
    components: {
        ChoiceForm,
        CompletionForm,
        JudgmentForm,
        ShortanswerForm,
    },
};
</script>
<style lang="less">
.addquestion {
    .el-dialog--center .el-dialog__body {
        padding-top: 10px;
    }
}
</style>
