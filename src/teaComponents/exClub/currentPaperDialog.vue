<template>
    <div id="currentPaperDialog">
        <el-dialog
            title="当前组卷"
            :visible.sync="dialogVisible"
            width="60%"
            :before-close="handleClose"
        >
            <!--  表单 -->
            <el-form
                :model="myChoose"
                ref="myChoose"
                label-width="100px"
                class="demo-ruleForm"
            >
                <el-form-item label="试卷名称" >
                    <el-input v-model="myChoose.paperName"></el-input>
                </el-form-item>
                <el-form-item label="考试时间" >
                    <div class="block">
                        <el-date-picker
                            v-model="myChoose.time"
                            type="datetimerange"
                            range-separator="至"
                            :picker-options="pickerOptions"
                            start-placeholder="开始日期时间"
                            end-placeholder="结束日期时间"
                        >
                        </el-date-picker>
                    </div>
                </el-form-item>
                <el-form-item label="当前卷面分值">
                    <el-input disabled v-model="myChoose.score"> </el-input>
                </el-form-item>
                <el-form-item label="选择发布班级">
                    <el-select
                        v-model="myChoose.classes"
                        multiple
                        filterable
                        allow-create
                        default-first-option
                        placeholder="请选择发布班级"
                    >
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                </el-form-item>
                <div v-if="myChoose.choose.length !== 0">
                    选择题
                    <el-form-item
                        v-for="(item, key) in myChoose.choose"
                        :key="key"
                    >
                        {{ key + 1 }}、
                        <ChoiceDesc :record="item" :showAns="true" />
                        <el-checkbox v-model="item.checked">
                            加入该题目
                        </el-checkbox>
                        <el-row v-if="item.checked">
                            <el-col :span="3"> 设置分数： </el-col>
                            <el-col :span="10">
                                <el-input
                                    v-model="item.value"
                                    type="number"
                                    @change="calculate(item.value)"
                                ></el-input>
                            </el-col>
                        </el-row>
                    </el-form-item>
                </div>
                <div v-if="myChoose.tiankong.length !== 0">
                    填空题

                    <el-form-item
                        v-for="(item, key) in myChoose.tiankong"
                        :key="key"
                    >
                        {{ key + 1 }}、
                        <CompletionDesc :record="item" :showAns="true" />

                        <el-checkbox v-model="item.checked">
                            加入该题目
                        </el-checkbox>
                        <el-row v-if="item.checked">
                            <el-col :span="3"> 设置分数： </el-col>

                            <el-col :span="10">
                                <el-input
                                    v-model="item.value"
                                    type="number"
                                    @change="calculate(item.value)"
                                ></el-input>
                            </el-col>
                        </el-row>
                    </el-form-item>
                </div>
                <div v-if="myChoose.judge.length !== 0">
                    判断题
                    <el-form-item
                        v-for="(item, key) in myChoose.judge"
                        :key="key"
                    >
                        {{ key + 1 }}、
                        <JudgmentDesc :record="item" :showAns="true" />
                        <el-checkbox v-model="item.checked">
                            加入该题目
                        </el-checkbox>
                        <el-row v-if="item.checked">
                            <el-col :span="3"> 设置分数： </el-col>
                            <el-col :span="10">
                                <el-input
                                    v-model="item.value"
                                    type="number"
                                    @change="calculate(item.value)"
                                ></el-input>
                            </el-col>
                        </el-row>
                    </el-form-item>
                </div>
                <div v-if="myChoose.jiandati.length !== 0">
                    简答题
                    <el-form-item
                        v-for="(item, key) in myChoose.jiandati"
                        :key="key"
                    >
                        {{ key + 1 }}、
                        <ShortanswerDesc :record="item" :showAns="true" />
                        <el-checkbox v-model="item.checked">
                            加入该题目
                        </el-checkbox>
                        <el-row v-if="item.checked">
                            <el-col :span="3"> 设置分数： </el-col>
                            <el-col :span="10">
                                <el-input
                                    v-model="item.value"
                                    type="number"
                                    @change="calculate(item.value)"
                                ></el-input>
                            </el-col>
                        </el-row>
                    </el-form-item>
                </div>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="handleClose()">取 消</el-button>
                <el-button @click="resetForm('myChoose')">重 置</el-button>
                <el-button
                    type="primary"
                    @click="
                        submitForm('myChoose');
                        dialogVisible = false;
                    "
                    >立即创建</el-button
                >
            </span>
        </el-dialog>
    </div>
</template>

<script>
import ChoiceDesc from 'teaComponents/quClub/choiceDesc';
import JudgmentDesc from 'teaComponents/quClub/judgmentDesc';
import CompletionDesc from 'teaComponents/quClub/completionDesc';
import ShortanswerDesc from 'teaComponents/quClub/shortanswerDesc';
export default {
    name: 'currentPaper',
    props: {
        dialogVisible: Boolean,
        myChoose: Object,
    },
    data() {
        return {
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() < Date.now() - 8.64e7;
                },
            },
              options:[
               {value:"19软件3班",label:'19软件3班'},
               {value:"19软件2班",label:'19软件2班'},
               {value:"19软件1班",label:'19软件1班'}
            ],
        };
    },
    methods: {
        handleClose() {
            // this.dialogVisible = false;
            this.$emit("ToClose",false)
        },
        calculate(number) {
            console.log(number);
            this.myChoose.score += parseInt(number);
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
  
            this.$emit("reset", {
                paperName: '',
                time: '',
                choose: [],
                tiankong: [],
                judge: [],
                jiandati: [],
            })

        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    },
    mounted() {},
    components: { ChoiceDesc, JudgmentDesc, CompletionDesc, ShortanswerDesc },
};
</script>

<style>
</style>