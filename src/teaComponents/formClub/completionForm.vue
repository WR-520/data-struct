// 填空题 表单
<template>
    <div class="completionData">
        <el-form
            :model="completionData"
            ref="completionData"
            label-width="24%"
            style="width:90%;"
            label-suffix=":"
        >
            <el-form-item prop="title">
                <label slot="label">
                    {{ '题目描述' }}

                    <el-tooltip
                        effect="dark"
                        content="系统自动根据您插入的题目文本与答案内容自动生成题目描述，不可编辑"
                        placement="top-start"
                    >
                        <i class="el-icon-question"></i>
                    </el-tooltip>
                </label>
                <el-input
                    v-model="completionData.title"
                    size="mini"
                    :readonly="true"
                    resize="none"
                    :show-word-limit="true"
                    type="textarea"
                    autosize
                    placeholder="题目描述,编辑时，系统自动生成"
                >
                </el-input>
            </el-form-item>
            <el-form-item
                v-for="(option, index) in completionData.options"
                :key="index"
                :prop="'options.' + index + '.value'"
                size="mini"
                :rules="{
                    required: true,
                    message: `${
                        option.capType === 0 ? '请输入题目文本' : '请设置答案'
                    }`,
                    trigger: 'blur',
                }"
            >
                <label slot="label">
                    {{ option.capType === 0 ? '题目文本' : '答案' }}

                    <el-tooltip
                        v-if="option.capType === 1"
                        class="item"
                        effect="dark"
                        content="请设置答案以及答案后置标点(可选，默认无)"
                        placement="top-start"
                    >
                        <i class="el-icon-question"></i>
                    </el-tooltip>
                </label>
                <el-input
                    v-model="option.value"
                    style="width:60%"
                    :placeholder="
                        option.capType === 0 ? '请输入题目文本' : '请设置答案'
                    "
                    @input="handleInput"
                >
                    <el-select
                        v-if="option.capType === 1"
                        v-model="option.punctuation"
                        slot="append"
                        :clearable="true"
                        size="mini"
                        placeholder=""
                        class="character"
                    >
                        <el-option
                            v-for="(pu, ins) in punctuation"
                            :key="ins"
                            :label="pu.label"
                            :value="pu.value"
                        ></el-option>
                    </el-select>
                </el-input>
                <el-button
                    style="margin-left:5%"
                    icon="el-icon-minus"
                    circle
                    v-on:click.stop="handleDelOptions(index)"
                ></el-button>
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
                    size="mini"
                    style="width:70%"
                    v-model="completionData.belong"
                    :options="syllabusData"
                    placeholder="请选择归属"
                ></el-cascader>
            </el-form-item>
            <el-form-item>
                <el-button
                    @click="handleAddFields(0)"
                    size="mini"
                    class="el-icon-plus el-icon--right"
                    >插入题目文本</el-button
                >
                <el-button
                    @click="handleAddFields(1)"
                    size="mini"
                    class="el-icon-plus el-icon--right"
                    >插入答题</el-button
                >
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

const PUNCTUATIONMAP = {
    '': '',
    1: '，',
    2: '、',
    3: '：，',
    4: '；',
    5: '？',
    6: '。',
    7: ',',
    8: '.',
    9: ':',
    10: ';',
    11: '?',
}; // 空格 默认
export default {
    name: 'CompletionForm',
    props: {
        formData: Object,
        handlecancelFun: Function,
    },
    data() {
        return {
            completionData: deepClone(this.formData),
            punctuation: [
                { label: '，', value: 1 },
                { label: '、', value: 2 },
                { label: '：', value: 3 },
                { label: '；', value: 4 },
                { label: '？', value: 5 },
                { label: '。', value: 6 },
                { label: ',', value: 7 },
                { label: '.', value: 8 },
                { label: ':', value: 9 },
                { label: ';', value: 10 },
                { label: '?', value: 11 },
            ],
        };
    },
    methods: {
        handleAddFields: function(key) {
            const { options } = this.completionData;
            let _options = [];
            if (Array.isArray(options)) {
                _options = options;
            }
            // 填空题数组
            _options.push({
                capType: key,
                value: '',
                punctuation: '',
            });

            this.completionData = {
                ...this.completionData,
                options: _options,
            };
        },

        handleDelOptions: function(i) {
            this.completionData.options.splice(i, 1);
            this.transformTitle();
        },
        handleCancel: function() {
            this.handlecancelFun();
        },
        handleSubmit: function() {
            this.$refs['completionData'].validate(async valid => {
                if (valid) {
                    console.log(
                        'this.completionData success',
                        this.completionData
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

        handleInput: throttle(function() {
            this.transformTitle();
        }, 500),
        
        // 转换成表单题目
        transformTitle: function() {
            console.log('transformTitle', this.completionData);
            // 填空题表单的options（文本+需要填的空）
            const { options } = this.completionData;
            if (options && options.length > 0) {
                let titArrs = '';
                for (let i = 0; i < options.length; i++) {
                    // 文本
                    if (options[i].capType === 0) {
                        titArrs += options[i].value;
                    }
                    // 答案 
                    else {
                        let ins = options[i].punctuation;
                        titArrs += '______' + PUNCTUATIONMAP[ins] + ' ';
                    }
                }
                // console.log(titArrs);
                this.completionData.title = titArrs;
            }
        },
    },
    computed: {
        syllabusData: function() {
            return this.$store.state.syllabusData;
        },
    },
};
</script>
<style lang="less">
.completionData {
    .character {
        padding: 0;
        .el-input__inner {
            padding: 0;
            padding-left: 10px;
            font-size: 18px;
            font-weight: bold;
        }
    }
}
</style>
