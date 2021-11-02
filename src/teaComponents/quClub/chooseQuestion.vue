//选择试题
<template>
    <div class="classexamTable">
        <el-table
            :data="copyData"
            style="width: 100%"
            size="mini"
            :highlight-current-row="true"
        >
            <!-- 编辑对话框 -->

            <el-table-column type="expand">
                <!-- slot-scope 声明了被接收的 prop 对象
                 会作为 props 变量存在于 <template> 作用域中 -->
                <template slot-scope="props">
                    <ChoiceDesc
                        v-if="props.row.typeId === 1"
                        :record="props.row"
                        :showAns="true"
                    />

                    <CompletionDesc
                        v-else-if="props.row.typeId === 2"
                        :record="props.row"
                        :showAns="true"
                    />
                    <JudgmentDesc
                        v-else-if="props.row.typeId === 3"
                        :record="props.row"
                        :showAns="true"
                    />
                    <ShortanswerDesc
                        v-else-if="props.row.typeId === 4"
                        :record="props.row"
                        :showAns="true"
                    />

                    <span v-else>{{ props.row.name }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="编号"
                prop="id"
                width="80%"
            ></el-table-column>
            <el-table-column
                label="题目"
                prop="name"
                width="360%"
            ></el-table-column>
            <el-table-column label="题型" prop="type"></el-table-column>
            <el-table-column label="章" prop="capter"></el-table-column>
            <el-table-column label="节" prop="section"></el-table-column>

            <el-table-column label="来源" prop="creator"></el-table-column>
            <el-table-column label="操作" width="200%">
                <template slot-scope="scope">
                    <el-checkbox
                        label="添加到试卷"
                        :checked="scope.row.checked"
                        @change="addIntoPaper(scope.row)"
                    ></el-checkbox>
                </template>
            </el-table-column>
        </el-table>
        <el-button @click="savePaper()"> 浏览当前组卷 </el-button>
        <currentPaper :dialogVisible="dialogVisible" :myChoose="myChoose" @reset="resetForm" @ToClose="ToClose" />
    </div>
</template>
<script>
import ChoiceDesc from 'teaComponents/quClub/choiceDesc';
import JudgmentDesc from 'teaComponents/quClub/judgmentDesc';
import CompletionDesc from 'teaComponents/quClub/completionDesc';
import ShortanswerDesc from 'teaComponents/quClub/shortanswerDesc';
import currentPaper from 'teaComponents/exClub/currentPaperDialog';
export default {
    name: 'OnLineTablePanel',
    props: {
        tableData: Array, // 表格数据
    },
    components: {
        ChoiceDesc,
        JudgmentDesc,
        CompletionDesc,
        ShortanswerDesc,
        currentPaper
    },
    computed: {},
    data() {
        return {
          

            dialogVisible: false,
            // 当前组卷情况
            // myChoose:
            myChoose: {
                // 试卷名
                paperName: '',
                // 开始时间截止时间
                time: '',
                // 发布的班级
                classes:'',
                // 选择题数组
                choose: [],
                // 填空题数组
                tiankong: [],
                // 判断题数组
                judge: [],
                // 简答题数组
                jiandati: [],
                // 分数
                score: 0,
                // 题量
                num:0,
                // 归属
                belong:""
            },

            //   copyData即是tableData加checked属性
            copyData: [],
            ruleForm: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: '',
            },
           
        };
    },

    methods: {
        // calculate(number) {
        //     console.log(number);
        //     this.myChoose.score += parseInt(number);
        // },
        ToClose(dialogVisible){
          this.dialogVisible = dialogVisible
        },
        resetForm(val){
          console.log("resetFormVal",val);
          this.myChoose = val;
        },
        addIntoPaper(row) {
            console.log(row.id);

            console.log('row.checked', row.checked);
            // 如果原来没有选（现在勾选了）
            if (!row.checked) {
                //    当前组卷情况
                switch (row.type) {
                    case '选择题':
                        this.myChoose.choose.push(row);
                        break;
                    case '填空题':
                        this.myChoose.tiankong.push(row);
                        break;
                    case '判断题':
                        this.myChoose.judge.push(row);
                        break;
                    case '简答题':
                        this.myChoose.jiandati.push(row);
                        break;
                }
                this.myChoose.num+=1;
            } else {
                // 原来选择了（现在没有选）
                var type;
                switch (row.type) {
                    case '选择题':
                        type = 'choose';
                        break;
                    case '填空题':
                        type = 'tiankong';
                        break;
                    case '判断题':
                        type = 'judge';
                        break;
                    case '简答题':
                        type = 'jiandati';
                        break;
                }
                const index = this.myChoose[type].findIndex(
                    (item) => item.id === row.id
                );
                this.myChoose[type].splice(index, 1);
                this.myChoose.num-=1;
            }
            row.checked = !row.checked;
            console.log('this.myChoose', this.myChoose);
        },
        savePaper() {
            // 向后端提交
            this.dialogVisible = true;
            console.log(this.myChoose);
        },
        // handleClose() {
        //     this.dialogVisible = false;
        // },
        // submitForm(formName) {
        //     this.$refs[formName].validate((valid) => {
        //         if (valid) {
        //             alert('submit!');
        //         } else {
        //             console.log('error submit!!');
        //             return false;
        //         }
        //     });
        // },

        // resetForm(formName) {
        //     this.$refs[formName].resetFields();
        //     this.myChoose = {
        //         paperName: '',
        //         time: '',
        //         choose: [],
        //         tiankong: [],
        //         judge: [],
        //         jiandati: [],
        //     };
        // },
    },
    mounted() {
        this.tableData.map((item) => {
            // checked：是否被选中 value:分值
            this.copyData.push(
                Object.assign({}, item, { checked: false }, { value: 0 })
            );
        });
        console.log('this.copyData', this.copyData);
    },
};
</script>
<style lang="less">
.classexamTable {
    .el-table tr th {
        background-color: #eee9e9;
    }
}
.el-form-item {
    text-align: left;
}
</style>
