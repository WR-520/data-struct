// 工具函数
import local from './local';
// 深拷贝（解决子组件无法改变父组件传来的值的问题）
export const deepClone = function(obj) {
    var cloneObj = new obj.constructor();
    if(obj === null) return obj;
    if(obj instanceof Date) return obj;
    if(obj instanceof RegExp) return obj;
    if(typeof obj !== 'object') return obj;

    for(var i in obj){
    if(obj.hasOwnProperty(i)){
        cloneObj[i] = deepClone(obj[i]);
    }
}
return cloneObj;
    // return JSON.parse(JSON.stringify(value));
};



// 判断是否登录
export const isLogined = () => {
    // 从本地获取token
    // 第一次!运算，隐式转换真假值，第二次!运算 还原原来的真/假
    return !!local.getSessionVal('token');
};

//使用时间戳实现节流 
export const throttle = (fun, delay) => {
    let preMs = 0;
    return function(...args) {
        const that = this;
        let curMs = Date.now();
        if (curMs - preMs >= delay) {
            fun.apply(that, args);
            preMs = curMs;
        }
    };
};
