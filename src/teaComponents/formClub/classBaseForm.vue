// 新建课前测、试卷 基础信息
// 未完成

<template>
    <div>
        <el-form
            :model="classBaseForm"
            ref="classBaseForm"
            label-width="24%"
            style="width:90%;"
            label-suffix=":"
        >
            <el-form-item
                prop="title"
                label="标题"
                :rules="[
                    {
                        required: true,
                        message: '请输入标题',
                        trigger: 'blur',
                    },
                ]"
            >
                <el-input
                    v-model="classBaseForm.title"
                    size="mini"
                    placeholder="请输入标题"
                >
                </el-input>
            </el-form-item>
            <el-form-item
                prop="limittime"
                label="答题时间"
                :rules="[
                    {
                        required: true,
                        message: '请输入答题时间',
                        trigger: 'blur',
                    },
                ]"
            >
                <el-input
                    v-model="classBaseForm.limittime"
                    size="mini"
                    placeholder="请输入答题时间"
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
                    v-model="classBaseForm.belong"
                    size="mini"
                    :options="syllabusData"
                    placeholder="请选择归属"
                ></el-cascader>
            </el-form-item>
            <!-- <el-form-item>
                <el-button @click="handleCancel" size="mini">取 消</el-button>
                <el-button type="primary" @click="handleSubmit" size="mini"
                    >确 定</el-button
                >
            </el-form-item> -->
        </el-form>
    </div>
</template>

<script>
import { deepClone } from 'utils/util';

export default {
    name: 'ClassBaseForm',
    data() {
        return {
            classBaseForm: deepClone(this.formData),
        };
    },
    computed: {
        syllabusData: function() {
            return this.$store.state.syllabusData;
        },
    },
};
</script>
