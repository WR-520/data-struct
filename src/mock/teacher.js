const Mock = require('mockjs')
const { indexData, classLists } = require('./tConst.js')
// 获取 mock.Random 对象
const Random = Mock.Random

// 教师登录
const adminLogin = function(options) {
    const { username, password } = JSON.parse(options.body)
    if (username[0] === '9' && password[0] === '9') {
        return {
            status: 200,
            data: {
                name: Random.cname(),
                avatar: Random.image('200x100'),
                token: Random.string('lower', 25),
            },
        }
    } else {
        return {
            status: 402,
            desc: '账号或密码输入错误',
        }
    }
}
// 教师端主页数据
const getIndexData = () => {
    return {
        status: 200,
        data: indexData,
    }
}
// 获取班级列表
const getAllclasslists = () => {
    return {
        status: 200,
        data: classLists,
    }
}
// 添加班级
const addClass = options => {
    const { classId } = JSON.parse(options.body)
    const value = classLists.filter(v => v.classId === classId)
    indexData.classLists.concat(value)
    return {
        status: 200,
        desc: '成功',
    }
}



module.exports = {
    adminLogin,
    getIndexData,
    getAllclasslists,
    addClass,
    
}
