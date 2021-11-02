// 新建课前测
<template>
    <el-dialog
        key="addClassexamDialog"
        :visible="addClassexamDialogVisible"
        center
        :width="width"
        title="新建课前测"
        :close-on-click-modal="false"
        :append-to-body="true"
        @close="cancelFun"
        class="addquestion"
    >
        <div class="addClassexamDialogcontainer">
            <el-steps
                :active="1"
                space="160px"
                direction="vertical"
                :align-center="true"
                class="containersteps"
            >
                <el-step title="基础信息" icon="el-icon-edit"></el-step>
                <el-step title="选择题目" icon="el-icon-finished"> </el-step>
            </el-steps>

            <div class="containerbody">
                <div class="container-top">步骤 1 222</div>

                <div slot="footer" class="container-bottom">
                    <el-button @click="handlecancelFun" size="mini"
                        >取 消</el-button
                    >
                    <el-button
                        type="primary"
                        @click="handlecancelFun"
                        size="mini"
                        >确 定</el-button
                    >
                </div>
            </div>
        </div>
    </el-dialog>
</template>
<script>
// import { Message } from 'element-ui';
// import { MessageBox } from 'element-ui';

export default {
    props: {
        addClassexamDialogVisible: Boolean,
        cancelFun: Function,
    },
    name: 'addClassexamDialog',
    data() {
        return {
            // typeId: '1', // 1 选择题 2 填空 3判断 4 简答
            // // ref: 'formref', // 表单引用
            // formData: {},
        };
    },

    methods: {
        handlecancelFun() {
            // 关闭前 逻辑交互
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
    components: {},
};
</script>
<style lang="less">
.addquestion {
    .el-dialog--center .el-dialog__body {
        padding-top: 10px;
    }
    .el-step__title {
        font-size: 12px;
    }
}
</style>
<style lang="less" scoped>
.addClassexamDialogcontainer {
    display: flex;
    .containersteps {
        width: 88px;
    }
    .containerbody {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    .container-top {
        flex: 1;
    }
    .container-bottom {
        height: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
