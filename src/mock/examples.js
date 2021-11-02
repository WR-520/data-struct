const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random
// mock一组数据
const questionData = function() {
    let questions = []
    for (let i = 0; i < 100; i++) {
        let quesObject = {
            title: Random.csentence(5, 30), //  Random.csentence( min, max )
            id: Random.integer(100000, 999999),
            desc: ['困难', '中等', '简单'][Random.integer(0, 2)],
        }
        questions.push(quesObject)
    }
    return {
        status: 200,
        data: questions,
    }
}


var lists = [
    {
        // 题目数据
        title: '下列国家中是发展中的国家是？',
        questionId: 520,
        type: 'choose',
        single: true, // 单选
        options: [
            { key: 0, value: '美国' },
            { key: 1, value: '中国' },
            { key: 2, value: '韩国' },
            { key: 3, value: '英国' },
        ],
        answer: [1], // 多选时则 多个 如果是后端判题，这个可以不要，建议后端判题
        checkedOptions: [],
    },
    {
        // 题目数据
        title: '下列不属于社会主义核心价值观的是？',
        questionId: 521,
        type: 'choose',
        single: false,
        options: [
            { key: 0, value: '谄媚' },
            { key: 1, value: '民主' },
            { key: 2, value: '自私' },
            { key: 3, value: '和谐' },
        ],

        answer: [0, 2], // 多选时则 多个
        checkedOptions: [], // 选中的内容
    },
    {
        // 题目数据
        title: '下列不属于社会主义核心价值观的是？',
        questionId: 522,
        type: 'choose',
        single: false,
        options: [
            { key: 0, value: '狡猾' },
            { key: 1, value: '爱国' },
            { key: 2, value: '小气' },
            { key: 3, value: '自强' },
        ],

        answer: [0, 2], // 多选时则 多个
        checkedOptions: [], // 选中的内容
    },
]
// 查询所有选择题的数据
const choiceQuestionLists = function() {
    return {
        status: 200,
        data: lists,
    }
}
// 删除题目
const delChoiceQuestion = function(options) {
    const { questionId } = JSON.parse(options.body)
    lists = lists.filter(item => item.questionId !== questionId)
    return {
        status: 200,
        desc: '删除成功',
    }
}
// 编辑题目
const editChoices = function(options) {
    let data = JSON.parse(options.body)
    data = { ...data, answer: data.answer.sort((a, b) => a - b) }
    lists = lists.map(v => (v.questionId === data.questionId ? data : v))
    return {
        status: 200,
        desc: '成功',
    }
}
module.exports = {
    questionData,
    choiceQuestionLists,
    delChoiceQuestion,
    editChoices,
}
