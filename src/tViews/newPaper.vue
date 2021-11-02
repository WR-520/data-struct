// 新建试卷
<template>
    <div>
        <SearchPanel :searchForm="selectParams" :submitFun="submitSearch" />
        <!-- 点击新建试卷 -->
    
        <choose-question :tableData="tableData" />
        <Pagination />
     
       
    
    </div>
</template>
<script>
//
import SearchPanel from 'teaComponents/quClub/searchPanel.vue';
import ChooseQuestion from 'teaComponents/quClub/chooseQuestion.vue';
import Pagination from 'teaComponents/quClub/pagination.vue';
// OnLineTablePanel
export default {
    name: 'AdminOnlineexam',
    data() {
        return {
          
            chapterLists: [
                { text: '线性表', value: 0 },
                { text: '栈和队列', value: 1 },
                { text: '树', value: 2 },
            ],
            sectionLists: [{ text: '线性表的性质', value: 0 }],
            types: [
                { text: '选择题', value: 0 },
                { text: '填空题', value: 1 },
                { text: '判断题', value: 2 },
                { text: '简答题', value: 3 },
            ],
            // 后端返回的全是题库里已发布的试题
            tableData: [
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
                    statusDesc: '已发布',
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
        };
    },
    computed: {
        selectParams: function () {
            return [
                { label: '关键字', value: 'keywords', type: 'input' },

                {
                    label: '归属章',
                    value: 'chapter',
                    type: 'select',
                    optionsLists: this.chapterLists,
                },
                {
                    label: '归属节',
                    value: 'section',
                    type: 'select',
                    optionsLists: this.sectionLists,
                },
                {
                    label: '题型',
                    value: 'type',
                    type: 'select',
                    optionsLists: this.types,
                },
            ];
        },
    },
    methods: {
        submitSearch(params) {
            console.log('params', params);
        },
  
    
    },
    mounted() {
        // console.log(
        //     'console.log(this.$store.state.count)',
        //     this.$store.state.count
        // );
    },
    components: {
        SearchPanel,
 
        ChooseQuestion,
        Pagination,
    },
};
</script>
<style lang="less">
.classexamPanel {
    .el-table tr th {
        background-color: #eee9e9;
    }
}
</style>
