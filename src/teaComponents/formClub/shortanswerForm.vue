<template>
    <div>
        <el-form
            :model="shortanswerForm"
            ref="shortanswerForm"
            label-width="24%"
            style="width:90%;"
            label-suffix=":"
        >
            <el-form-item
                prop="title"
                label="题目"
                :rules="[
                    {
                        required: true,
                        message: '请输入题目',
                        trigger: 'blur',
                    },
                ]"
            >
                <el-input
                    v-model="shortanswerForm.title"
                    size="mini"
                    placeholder="请输入题目"
                    resize="none"
                    :show-word-limit="true"
                    type="textarea"
                    autosize
                >
                </el-input>
            </el-form-item>
            <el-form-item
                prop="answer"
                label="参考答案"
                :rules="[
                    {
                        required: true,
                        message: '请输入参考答案',
                        trigger: 'blur',
                    },
                ]"
            >
                <el-input
                    v-model="shortanswerForm.answer"
                    size="mini"
                    placeholder="请输入参考答案"
                    resize="none"
                    :show-word-limit="true"
                    type="textarea"
                    autosize
                >
                </el-input>
            </el-form-item>
            <el-form-item
                label="选择归属"
                size="mini"
                :rules="[
                    {
                        required: true,
                        message: '请选择归属',
                        trigger: 'blur',
                    },
                ]"
                prop="belong"
            >
                <el-cascader
                    style="width:70%"
                    v-model="shortanswerForm.belong"
                    size="mini"
                    :options="syllabusData"
                    placeholder="请选择归属"
                ></el-cascader>
            </el-form-item>
            <el-form-item>
                <el-button @click="handleCancel" size="mini">取 消</el-button>
                <el-button type="primary" @click="handleSubmit" size="mini"
                    >确 定</el-button
                >
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import { deepClone } from 'utils/util';

export default {
    name: 'ShortanswerForm',
    props: {
        formData: Object,
        handlecancelFun: Function,
    },
    data() {
        return {
            shortanswerForm: deepClone(this.formData),
        };
    },

    computed: {
        syllabusData: function() {
            return this.$store.state.syllabusData;
        },
    },
    methods: {
        handleCancel: function() {
            this.handlecancelFun();
        },
        handleSubmit: function() {
            const that = this;
            this.$refs['shortanswerForm'].validate(async valid => {
                if (valid) {
                    console.log(
                        'this.shortanswerForm success',
                        that.shortanswerForm
                    );
                    // const data = deepClone(this.chooseDailogData);
                    // let res = await editChoices(data);
                    // if (res.status === 200) {
                    //     Message.success('保存成功');
                    //     this.visible = false;
                    //     this.getLists();
                    // }
                }
            });
        },
    },
};
</script>
