import HelloWorld from '../components/helloworld';
import Navbar from '../components/navbar';
import ExHome from '../examples/home';
import Index from '../examples/index';
import AvatarUpload from '../examples/avatar-upload';
import Search from '../examples/search';
import ChoiceQuestion from '../examples/choice-question';
import Template from '../examples/template';
/* 正式内容 */
import VueRouter from 'vue-router';
import teaIndex from './teaIndex';
import AdminLogin from 'comViews/adminLogin';
import { isLogined } from 'utils/util';

export const routes = [
    {
        path: '/',
        components: {
            nav: Navbar,
            default: HelloWorld,
        },
    },
    {
        path: '/examples',
        components: {
            default: Index,
        },
        redirect: '/examples/index',
        children: [
            {
                path: 'index',
                component: ExHome,
            },
            {
                path: 'avatarUpload',
                component: AvatarUpload,
            },
            {
                path: 'search',
                component: Search,
            },
            {
                path: 'choice-question',
                component: ChoiceQuestion,
            },
            {
                path: 'template',
                component: Template,
            },
        ],
    },
    // 登录
    {
        path: '/adminlogin',
        component: AdminLogin,
    },
    // 扩展运算
    //导入教师端路由
    ...teaIndex,
];
const router = new VueRouter({
    routes,
    linkExactActiveClass: 'active', // 精确匹配
});

// 全局路由守卫 beforeEach 防止恶意跳转
//判断一下有没有教师token 没有得话强制跳登录页
router.beforeEach((to, from, next) => {
    const adminPath = [
        '/admin',
        '/admin/index',
        '/admin/classexam',
        '/admin/class',
        '/admin/questions',
        '/admin/test',
        '/admin/onlineexam',
        '/admin/statistics',
    ];
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title;
    }

    if (adminPath.includes(to.path)) {
        if (isLogined()) {
            next(); //放行
        } else {
            console.log('重定向到登录');
            next('/adminlogin'); //重置到登录
        }
    } else {
        next(); //放行
    }
});

export default router;
