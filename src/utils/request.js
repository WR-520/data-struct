
import axios from 'axios'
import { Message } from 'element-ui'
import router from '@/router/index'
// import config from '../config/config'
import local from 'utils/local'
// 设置请求地址
// axios.defaults.baseURL = config.httpUrl + '/api' //设置请求服务器地址
axios.defaults.timeout = 5000 //请求超时时间
//请求拦截器
axios.interceptors.request.use(config => {
    //取出本地token

    const tk = local.getSessionVal('token') // token有的话，
    if (tk) {
        config.headers.Authorization = tk //统一给后端携带令牌
    }
    return config
})

// 响应拦截器
axios.interceptors.response.use(
    response => {
        //
        console.log('response', response)
        // 响应拦截器先拦截住
        // 如果code和msg都有

        if (response.data && response.status === 200) {
            // 将code和msg提取出来
            let { status, desc } = response.data
            if (status === 'XXX') {
                // 对应的状态码
                Message.error(desc)
            } else if (status === 500) {
                Message.error(desc)
                router.replace('/adminlogin')
            } else if (status === 402) {
                // 账号密码错误
                Message.error(desc)
            }
            return response.data
        }
    },
    err => {
        // 这里不需要做其它操作
        console.log(err)
    }
)
var Request = {
    get(url, data = {}) {
        return axios.get(url, { params: data })
    },
    post(url, data = {}) {
        return axios.post(url, data)
    },
}
export default  Request
