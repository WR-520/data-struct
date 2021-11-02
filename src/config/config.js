const configMap = {
    local: {
        // httpUrl: 'http:192.168.1.102:3000',
    },
    development: {
        httpUrl: '',
    },
    production: {
        httpUrl: '',
    },
}

console.log('环境:', process.env.NODE_ENV)

const env = process.env.NODE_ENV
const config = configMap[env]
if (env === 'local') {
    require('../mock/mock.js')
}
export default config
