<template>
    <div>
        <el-form
            :model="judgementData"
            ref="judgementData"
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
                    v-model="judgementData.title"
                    size="mini"
                    placeholder="请输入题目"
                >
                </el-input>
            </el-form-item>
            <el-form-item
                v-for="(option, index) in judgementData.options"
                :key="index"
                :prop="'options.' + index + '.value'"
                size="mini"
            >
                <label slot="label">
                    {{ '选项' + (index + 1) }}

                    <el-tooltip
                        effect="dark"
                        content="系统自动生成选择项，不可编辑"
                        placement="top-start"
                    >
                        <i class="el-icon-question"></i>
                    </el-tooltip>
                </label>
                <el-input
                    v-model="option.value"
                    style="width:60%"
                    :readonly="true"
                >
                </el-input>
            </el-form-item>
            <el-form-item
                label="设置答案"
                size="mini"
                :rules="[
                    {
                        required: true,
                        message: '设置答案',
                        trigger: 'blur',
                    },
                ]"
                prop="answer"
            >
                <el-select
                    v-model="judgementData.answer"
                    placeholder="请选择答案"
                    size="mini"
                    style="width:60%"
                >
                    <el-option
                        v-for="item in judgementData.options"
                        :key="item.key"
                        :label="item.value"
                        :value="item.key"
                    >
                    </el-option>
                </el-select>
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
                    v-model="judgementData.belong"
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
import { deepClone, throttle } from 'utils/util';

export default {
    name: 'JudgmentForm',
    props: {
        formData: Object,
        handlecancelFun: Function,
    },
    data() {
        return {
            judgementData: deepClone(this.formData),
        };
    },
    created() {
        if (!this.judgementData.hasOwnProperty('options')) {
            this.judgementData.options = [
                { key: 0, value: '正确' },
                { key: 1, value: '错误' },
            ];
        }
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
            this.$refs['judgementData'].validate(async valid => {
                if (valid) {
                    console.log(
                        'this.judgementData success',
                        that.judgementData
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
