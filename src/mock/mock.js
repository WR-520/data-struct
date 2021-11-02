// 引入mockjs
const { produceNewsData } = require('./home')
const Mock = require('mockjs')

// // 拦截ajax请求，配置mock的数据
Mock.mock('/api/articles', 'get', produceNewsData)

/******************* */
// For Examples

const {
    questionData,
    choiceQuestionLists,
    delChoiceQuestion,
    editChoices,

} = require('./examples')

// search
Mock.mock('/api/questionData', 'get', questionData)

// choice-question
Mock.mock('/api/choiceQuestionLists', 'get', choiceQuestionLists)
Mock.mock('/api/delChoiceQuestion', 'post', options =>
    delChoiceQuestion(options)
)
Mock.mock('/api/editChoices', 'post', options => editChoices(options))

/************************************************/
// For teacher Terminal
const {
    adminLogin,
    getIndexData,
    getAllclasslists,
    addClass,   
} = require('./teacher.js')

const{
  census,
  testClasses
} = require('./statistics.js')


Mock.mock('/api/adminlogin', 'post', options => adminLogin(options)) // 教师端登录
Mock.mock('/api/indexData', 'get', options => getIndexData(options)) // 教师端主页数据
Mock.mock('/api/allclasslists', 'get', options => getAllclasslists(options)) // 教师端主页数据
Mock.mock('/api/addclass', 'post', options => addClass(options)) // addClass
Mock.mock('/api/census','get', options => census(options))//19软件3班成绩统计
Mock.mock('/api/scoreclasses','get',options => testClasses(options));//分数具体