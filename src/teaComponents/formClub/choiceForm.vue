//  选择题表单

<template>
    <div>
        <el-form
            :model="chooseData"
            ref="chooseData"
            label-width="24%"
            style="width:90%;"
            label-suffix=":"
        >
        <!-- 输入题目 -->
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
                    v-model="chooseData.name"
                    size="mini"
                    placeholder="请输入题目"
                ></el-input>
            </el-form-item>

            <el-form-item
                v-for="(option, index) in chooseData.options"
                :label="'选项' + DIRECTIONARY[option.key]"
                :key="index"
                :prop="'options.' + index + '.value'"
                size="mini"
                :rules="{
                    required: true,
                    message: `选项${DIRECTIONARY[option.key]}不能为空`,
                    trigger: 'blur',
                }"
            >
                <el-input
                    v-model="option.value"
                    style="width:60%"
                    placeholder="请输入选项内容"
                ></el-input>
                <!-- 删除选项 -->
                <!-- click.stop 阻止点击事件再传播 -->
                <el-button
                    style="margin-left:5%"
                    icon="el-icon-minus"
                    circle
                    v-on:click.stop="handleDelOptions(option)"
                ></el-button>
            </el-form-item>

            <el-form-item label="是否多选">
                <el-switch
                    :active-text="
                        chooseData.mutiplyChoose
                            ? 'tips:本题为多选题'
                            : 'tips:本题为单选题'
                    "
                    v-model="chooseData.mutiplyChoose"
                   @change="handleChoiceTypeChange"
                ></el-switch>
            </el-form-item>
            <el-form-item
                label="设置答案"
                size="mini"
                :rules="answerRule"
                prop="answer"
            >
            <!-- 多选题设置答案 -->
                <el-select
                    v-if="chooseData.mutiplyChoose === true"
                    v-model="chooseData.answer"
                    placeholder="请选择答案"
                    size="mini"
                    style="width:60%"
                    multiple
 
                >
                <!-- 选项列表 -->
                    <el-option
                        v-for="item in chooseData.options"
                        :key="item.key"
                        :label="DIRECTIONARY[item.key]"
                        :value="item.key"
                      
                    >
                    </el-option>
                </el-select>
                <!-- 单选题设置答案 -->
                <el-select
                    v-else
                    v-model="chooseData.answer"
                    placeholder="请选择答案"
                    size="mini"
                    style="width:60%"
          
                >
                    <el-option
                        v-for="item in chooseData.options"
                        :key="item.key"
                        :label="DIRECTIONARY[item.key]"
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
                    v-model="chooseData.belong"
                    size="mini"
                    :options="syllabusData"
                    placeholder="请选择归属"
                ></el-cascader>
            </el-form-item>
            <!-- btn行：新增选项、取消、确定 -->
            <el-form-item>
                <el-button
                    @click="handleAddOption"
                    size="mini"
                    class="el-icon-plus el-icon--right"
                    >新增选项</el-button
                >
                <el-button @click="handleFormCancel" size="mini"
                    >取 消</el-button
                >
                <el-button type="primary" @click="handleSubmit" size="mini"
                    >确 定</el-button
                >
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import { deepClone } from 'utils/util';
import _ from 'underscore';

export default {
    name: 'ChoiceForm',
    props: {
        // 需要接收表单数据
        formData: Object,
        // formref: String,
        handlecancelFun: Function,
    },

    computed: {
        syllabusData: function() {
            return this.$store.state.syllabusData;
        },
    },
    mounted(){
       console.log("this.formData",this.formData)
    },
    created(){
      console.log("this.chooseData",this.chooseData)
    },
    data() {
        var validateAnswer = (rule, value, callback) => {
            if (value.length === 0) {
                callback(new Error('请设置答案'));
            } else {
                callback();
            }
        };

        return {
            DIRECTIONARY: 'ABCDEFGHIJKLMN',
            chooseData: deepClone(this.formData),
            answerRule: [
                {
                    type: 'array',
                    required: true,
                    validator: validateAnswer,
                    trigger: ['blur', 'onchange', 'submit'],
                },
            ],
        };
    },
    // watch: {
    //     chooseData: {
    //         handler(newVal, oldVal) {
    //             console.log('newVal,oldVal', newVal, oldVal);
    //         },
    //         deep: true,
    //         immediate: false,
    //     },
    // },
    methods: {
        // 删除一个选项
        handleDelOptions: function(option) {
            let { options } = this.chooseData;
            if (!options) {
                options = [];
            }
            // 删除该选项之后的选项数组
            let ops = options.filter(v => v.key !== option.key);
            // 重置选项的key(保证选项顺序ABCDEFG...)

            ops = ops.map((v, i) => {
                return { key: i, value: v.value };
            });
            // 重置chooseData表单数据
            this.chooseData = {
                ...this.chooseData,
                options: ops,
            };

            // 选择题的选项数目发生变化的时候

            // options 里面是否有 k
            const InOPtions = k => {
                return ops.some(v => v.key === k);
            };
            // 答案的选项必须都在 题目的选项 里面
            let { answer } = this.chooseData;
            if (Array.isArray(answer)) {
                const ans = answer.filter(v => InOPtions(v));
                this.chooseData.answer = ans;
            }
        },
        // 增加一个选项
        handleAddOption: function() {
           let {options} = this.chooseData;
           if( !options){
               options = [];
           }
           let op = {key:options.length,value:''};
           this.chooseData = {
               ...this.chooseData,
               options:[...options,op]
           } 
        },
        // 切换单选/双选 清空answer
        handleChoiceTypeChange: function() {
            if(this.chooseData.mutiplyChoose === true)
            this.chooseData.answer = [];
            else
            this.chooseData.answer = '';
            console.log("answer",this.chooseData.answer)
        },

        //单选的时候手动修改answer,目地：兼容element ui select组件
        handleSingleChooseChange: function(v) {
            this.chooseDailogData = {
                ...this.chooseDailogData,
                answer: [v],
            };
        },

        handleSubmit: function() {
            this.$refs['chooseData'].validate(async valid => {
                if (valid) {
                    console.log('this.chooseDailogData', this.chooseData);
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
        handleFormCancel: function() {
            this.handlecancelFun();
        },
    },
};
</script>
