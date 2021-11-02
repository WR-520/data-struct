// 试题展示控件
<template>
    <div class="dtablePanel">
        <el-table
            :data="tableData"
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
            <el-table-column
                label="时间"
                prop="createDate"
                width="125%"
            ></el-table-column>
            <el-table-column label="状态" prop="statusDesc"></el-table-column>
            <el-table-column
                label="答题数"
                prop="ansNumber"
                width="60%"
            ></el-table-column>
            <el-table-column label="正确率" prop="accuracy" width="60%">
            </el-table-column>
            <el-table-column label="操作" width="200%">
                <template slot="header">
                    <div>操作</div>
                    <el-checkbox
                        class="only-checkbox"
                        @click.native="OnlyMe($event)"
                        size="mini"
                        label="只看我的"
                        border
                    />
                </template>
               

                <template slot-scope="scope">
                    <el-button type="text" size="mini">收纳</el-button>
                    <el-button
                        type="text"
                        size="mini"
                        @click="handleEdit(scope.row)"
                        >编辑
                    </el-button>

                    <el-button type="text" size="mini">{{
                        scope.row.status === 1 ? '发布' : '撤回'
                    }}</el-button>
                    <el-button type="text" size="mini">移除</el-button>
                </template>
            </el-table-column>
        </el-table>
         <EditQuestionDialog
                :editQuvisible="editQuvisible"
                :cancelFun="cancelFun"
                :dataForm="dataForm"
            ></EditQuestionDialog>
    </div>
</template>
// 题库表格
<style lang="less">
.demo-table-expand {
    font-size: 0;
}
.demo-table-expand label {
    width: 90px;
    color: #99a9bf;
}
.demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
}
.dtablePanel {
    .el-table tr th {
        background-color: #eee9e9;
    }
}
</style>
<style lang="less" scoped>
.only-checkbox {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    height: 22px !important;
    border: rgb(253, 253, 253) 1px solid;
}
</style>
<script>
import EditQuestionDialog from 'teaComponents/quClub/EditQuestionDialog';
import ChoiceDesc from 'teaComponents/quClub/choiceDesc';
import JudgmentDesc from 'teaComponents/quClub/judgmentDesc';
import CompletionDesc from 'teaComponents/quClub/completionDesc';
import ShortanswerDesc from 'teaComponents/quClub/shortanswerDesc';

import local from '../../utils/local'
import { deepClone } from '../../utils/util';
export default {
    name: 'DTablePanel',
    computed: {
      
    },
    data() {
        return {
            onlyShowMyQ: false, // 只看我自己的
            tableData: [
                {
                    id: '87122',
                    name: '下列属于社会主义核心价值观的是？',
                    capterId: 3,
                    capter: '线性表',
                    section: '第1节 结构',
                    status: 0,
                    ansNumber: 124,
                    statusDesc: '已发布',
                    type: '选择题',
                    mutiplyChoose: false,
                    options: [
                        { key: 0, value: '团结' },
                        { key: 1, value: '和谐' },
                        { key: 2, value: '文明' },
                        { key: 3, value: '奉献' },
                    ],
                    checkedOptions: [],
                    answers: [0],
                    typeId: 1,
                    accuracy: '51%',
                    creator: '王军',
                    createDate: '2020-12-23',
                },
                {
                    id: '87122',
                    name: '下列不属于社会主义核心价值观的是？',
                    capterId: 3,
                    capter: '线性表',
                    section: '第1节 结构',
                    status: 1,
                    ansNumber: 124,
                    statusDesc: '已发布',
                    accuracy: '51%',
                    type: '选择题',
                    mutiplyChoose: true,
                    options: [
                        { key: 0, value: '团结' },
                        { key: 1, value: '嘲讽' },
                        { key: 2, value: '谩骂' },
                        { key: 3, value: '团结' },
                    ],
                    answers: [1, 2],
                    checkedOptions: [],
                    typeId: 1,
                    creator: '王军',
                    createDate: '2020-12-23',
                },
                {
                    id: '87123',
                    name: '团结友爱不属于社会主义核心价值观的内容？',
                    capterId: 3,
                    capter: '线性表',
                    section: '第1节 结构',
                    ansNumber: '',
                    status: 0,
                    statusDesc: '未发布',
                    accuracy: '',
                    options: [
                        { key: 0, value: '正确' },
                        { key: 1, value: '错误' },
                    ],
                    type: '判断题',
                    checkedOptions: [],
                    answers: { key: 0, value: '正确' },
                    typeId: 3,
                    creator: '王军',
                    createDate: '2020-12-23',
                },
                {
                    id: '87125',
                    name: '社会主义核心价值观：_____、_____、_____？',
                    capterId: 3,
                    capter: '线性表',
                    ansNumber: 124,
                    section: '第1节 结构',
                    accuracy: '21%',
                    status: 1,
                    statusDesc: '已发布',
                    options: [
                        { capType: 0, value: '社会主义核心价值观：' },
                        { capType: 1, value: '' },
                        { capType: 1, value: '' },
                        { capType: 1, value: '' },
                    ],
                    answers: ['团结', '友爱', '奉献'],
                    type: '填空题',
                    typeId: 2,
                    creator: '周明明',
                    createDate: '2020-12-23',
                },
                {
                    id: '87126',
                    name: '写出社会主义核心价值观的内容？',
                    capterId: 3,
                    capter: '线性表',
                    ansNumber: 124,
                    section: '第1节 结构',
                    status: 0,
                    statusDesc: '已发布',
                    accuracy: '81%',
                    sectionId: 2,
                    answers: '爱国、富强、团结、友爱、互助',
                    type: '简答题',
                    typeId: 4,
                    creator: '吴菲菲',
                    createDate: '2020-12-23',
                },
            ],
            // 编辑组件的dataForm
            dataForm: {},
            copyTableData:{

            },
            editQuvisible: false,
        };
    },
    components: {
        ChoiceDesc,
        JudgmentDesc,
        CompletionDesc,
        ShortanswerDesc,
        EditQuestionDialog,
    
    },
    created(){
      this.copyTableData = deepClone(this.tableData);
    },
    methods: {
        cancelFun() {
            // this.eidtQuvisible = false;
            this.editQuvisible = false;
        },
        handleEdit(dataForm) {
           console.log("eeedataForm",dataForm);
          this.dataForm = dataForm;
          
            this.editQuvisible = true;
            console.log('this.editQuvisible', this.editQuvisible);
        },
        OnlyMe(e){
            if(e.target.tagName === 'INPUT') return;
            //  local.getSessionVal("userinfo"); 这里从local获取登录的教师的id
            const Tid = "吴菲菲";
            console.log("this.onlyShowMyQ",this.onlyShowMyQ)
            if(!this.onlyShowMyQ){
            this.tableData =  this.tableData.filter(function(item){
                return item.creator === Tid
            })}
            else{
                this.tableData = this.copyTableData;
            } 
            this.onlyShowMyQ = !this.onlyShowMyQ;
          
        }
    },
};
</script>
