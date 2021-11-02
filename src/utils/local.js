

//封装本地存储的封装
export default {
    getSessionVal(val) {
    let key = window.btoa(val)
        let value = sessionStorage.getItem(key)

        if (value) {
            value = JSON.parse(decodeURIComponent(window.atob(value)))
        }
        return value
    },
    setSessionVal(key, val) {
        let _key = window.btoa(key)
        let _val = window.btoa(encodeURIComponent(JSON.stringify(val)))
        sessionStorage.setItem(_key, _val)
    },
    // 退出登录的时候直接 请空sessionStorage里的内容，再重定向到首页
    clearSession() {
        sessionStorage.clear()
    },
}
