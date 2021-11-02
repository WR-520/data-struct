import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        questionsData: [
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
                name:
                    '写出社会主义核心价值观的内容？写出社会主义核心价值观的内容？写出社会主义核心价值观的内容？写出社会主义核心价值观的内容？',
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
        syllabusData: [
            {
                value: '1',
                label: '第一章 线性表',
                children: [
                    {
                        value: '1',
                        label: '第1小节 绪论',
                    },
                    {
                        value: '2',
                        label: '第2小节 结构',
                    },
                    {
                        value: '3',
                        label: '第3小节 搜素',
                    },
                    {
                        value: '4',
                        label: '第4小节 广义线性表',
                    },
                ],
            },
            {
                value: '2',
                label: '第二章 线性表',
                children: [
                    {
                        value: '1',
                        label: '第1小节 绪论',
                    },
                    {
                        value: '2',
                        label: '第2小节 结构',
                    },
                    {
                        value: '3',
                        label: '第3小节 搜素',
                    },
                    {
                        value: '4',
                        label: '第4小节 广义线性表',
                    },
                    {
                        value: 'xiaolv',
                        label: '效率',
                    },
                ],
            },
            {
                value: '4',
                label: '第一章 线性表',
                children: [
                    {
                        value: '1',
                        label: '第1小节 绪论',
                    },
                    {
                        value: 'yizhi',
                        label: '一致',
                    },
                    {
                        value: 'fankui',
                        label: '反馈',
                    },
                    {
                        value: 'xiaolv',
                        label: '效率',
                    },
                ],
            },
            {
                value: '5',
                label: '第一章 线性表',
                children: [
                    {
                        value: '1',
                        label: '第1小节 绪论',
                    },
                    {
                        value: 'yizhi',
                        label: '一致',
                    },
                    {
                        value: 'fankui',
                        label: '反馈',
                    },
                    {
                        value: 'xiaolv',
                        label: '效率',
                    },
                ],
            },
        ],
    },
    mutations: {
    },
    getters: {
        questionsDataLength: state => state.questionsData.length,
    },
});

export default store;
