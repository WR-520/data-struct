// 课前测
<template>
    <div>
        <SearchPanel :searchForm="selectParams" :submitFun="submitSearch" />
        <ButtonPanel :btnGroup="btnGroup" />
        <ETablePanel :tableData="tableData" :myChoose="myChoose" @reset="reset"/>
        <Pagination />
        <AddClassexamDialog
            :addClassexamDialogVisible="addClassexamDialogVisible"
            :cancelFun="addClassexampleCancel"
        />
    </div>
</template>
<script>
// 课前测
import SearchPanel from 'teaComponents/quClub/searchPanel.vue';
import ButtonPanel from 'teaComponents/quClub/buttonPanel.vue';
import ETablePanel from 'teaComponents/exClub/etablePanel.vue';
import Pagination from 'teaComponents/quClub/pagination.vue';
import AddClassexamDialog from 'teaComponents/exClub/addClassexamDialog.vue';

export default {
    name: 'AdminClassexam',
    data() {
        return {
            chapterLists: [
                { text: '线性表', value: 0 },
                { text: '栈和队列', value: 1 },
                { text: '树', value: 2 },
            ],
            sectionLists: [],
            btnGroup: [
                {
                    type: '',
                    label: '新建课前测',
                    fun: this.handleAddClassexam,
                },
                {
                    type: '',
                    label: '从收藏夹生成',
                    fun: this.handleAddClassexam,
                },
            ],
            tableData: [
                {
                    id: '87122',
                    name: '线性表第一次课前测',
                    capterId: 3,
                    capter: '线性表',
                    section: '第1节 结构',
                    status: 0,

                    statusDesc: '已发布',
                    quesnumber: 5,

                    creator: '王军',
                    createDate: '2020-12-23',
                },
                {
                    id: '87122',
                    name: '线性表第一次课前测',
                    capterId: 3,
                    capter: '线性表',
                    section: '第1节 结构',
                    status: 0,
                    quesnumber: 5,
                    statusDesc: '已发布',

                    creator: '王军',
                    createDate: '2020-12-23',
                },
                {
                    id: '87123',
                    name: '线性表第一次课前测',
                    capterId: 3,
                    capter: '线性表',
                    section: '第1节 结构',
                    ansNumber: '',
                    status: 0,
                    statusDesc: '未发布',
                    quesnumber: 5,
                    creator: '王军',
                    createDate: '2020-12-23',
                },
                {
                    id: '87125',
                    name: '线性表第一次课前测',
                    capterId: 3,
                    capter: '线性表',
                    ansNumber: 124,
                    section: '第1节 结构',
                    quesnumber: 3,
                    status: 0,
                    statusDesc: '已发布',

                    creator: '周明明',
                    createDate: '2020-12-23',
                },
                {
                    id: '87126',
                    name: '线性表第一次课前测',
                    capterId: 3,
                    capter: '线性表',
                    ansNumber: 124,
                    section: '第1节 结构',
                    status: 0,
                    statusDesc: '已发布',

                    sectionId: 2,
                    quesnumber: 2,
                    creator: '吴菲菲',
                    createDate: '2020-12-23',
                },
            ], // 表格数据 
            myChoose:{
                paperName: '',
                time: '',
                choose: [],
                tiankong: [],
                judge: [],
                jiandati: [],
            },
            addClassexamDialogVisible: false,
        };
    },
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
    methods: {
        submitSearch(params) {
            console.log('搜索参数', params);
        },

        addClassexampleCancel() {
            this.addClassexamDialogVisible = false;
        },
        handleAddClassexam() {
            this.addClassexamDialogVisible = true; // 添加试题的模态框可见性
        },
        reset(val){
            this.myChoose = val;
        }
    },
    mounted() {
        // console.log(
        //     'console.log(this.$store.state.count)',
        //     this.$store.state.count
        // );
    },
    components: {
        SearchPanel,
        ButtonPanel,
        ETablePanel,
        Pagination,
        AddClassexamDialog,
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
