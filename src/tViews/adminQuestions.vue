// 题库
<template>
    <div>
        <!-- 查询面板控件 -->
        <SearchPanel :searchForm="selectParams" :submitFun="submitSearch" />
       <!-- 按钮控件 -->
        <ButtonPanel :btnGroup="btnGroup" />
        <DTablePanel> </DTablePanel>
        <!-- 分页控件 -->
        <Pagination />
        <!-- 添加试题的模态框控件 -->
        <AddQuestionDialog
            :addQuvisible="addQuvisible"
            :cancelFun="addQuestionCancel"
        />
    </div>
</template>
<script>
import SearchPanel from 'teaComponents/quClub/searchPanel.vue';
import ButtonPanel from 'teaComponents/quClub/buttonPanel.vue';
import DTablePanel from 'teaComponents/quClub/dtablePanel.vue';
import Pagination from 'teaComponents/quClub/pagination.vue';
import AddQuestionDialog from 'teaComponents/quClub/addQuestionDialog.vue';
const quLists = [
    { text: '选择题', value: 0 },
    { text: '填空题', value: 1 },
    { text: '判断题', value: 2 },
    { text: '简答题', value: 3 },
];
export default {
    name: 'AdminQuestions',
    data() {
        return {
            chapterLists: [
                { text: '线性表', value: 0 },
                { text: '栈和队列', value: 1 },
                { text: '树', value: 2 },
            ],
            sectionLists: [{text:'线性表的性质',value:0}],
            addQuvisible: false, // 添加试题的模态框可见性
            btnGroup: [
                {
                    type: '',
                    label: '添加试题',
                    fun: this.handleAddQuestion,
                },
            ],
        };
    },
    methods: {
        //提交搜索
        submitSearch(params) {
            console.log('params', params);
        },
        //添加试题
        handleAddQuestion() {
            this.addQuvisible = true; // 添加试题的模态框可见性
        },
        //
        addQuestionCancel() {
            // 取消/关闭
            this.addQuvisible = false;
        },
    },
    mounted() {},
    computed: {
        selectParams: function() {
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
                    optionsLists: quLists,
                },
                {
                    label: '状态',
                    value: 'status',
                    type: 'select',
                    optionsLists: [
                        { text: '已发布', value: 0 },
                        { text: '未发布', value: 1 },
                    ],
                },
            ];
        },
    },
    components: {
        SearchPanel,
        ButtonPanel,
        DTablePanel,
        Pagination,
        AddQuestionDialog,
    },
};
</script>
