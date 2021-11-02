// admin

import Request from 'utils/request'
// index
export const adminLogin = params => {
    return Request.post('/api/adminlogin', params)
}
// 教师端主页数据
export const getIndexData = params => {
    return Request.get('/api/indexData', params)
}
// 教师端主页数据
export const getAllClassLists = params => {
    return Request.get('/api/allclasslists', params)
}
// addClass, 导入班级 addClass
export const addClass = params => {
    return Request.post('/api/addclass', params)
}
// 统计数据
export const census = params => {
    return Request.get('/api/census',params)
}
export const scoredetail = params => {
    return Request.get('/api/scoreclasses',params)
}