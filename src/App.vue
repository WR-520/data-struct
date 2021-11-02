<template>
    <div id="app">
        <!-- Component TeaNavbar 头部-->
        <router-view name="nav" class="nav"></router-view>
         <!-- defalut Component -->
        <router-view class="body"> </router-view>
        <!-- 尾部 -->
        <Footer></Footer>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import local from 'utils/local';
import { deepClone } from 'utils/util';
import Footer from './components/footer';
export default {
    name: 'App',
    components: {
        Footer,
    },

    created() {
        // const store = local.getSessionVal('store');
        // if (store) {
        //     this.$store.replaceState(
        //         Object.assign({}, this.$store.state, store)
        //     );
        // }
        // //在页面刷新时将vuex里的信息保存到sessionStorage里
        // window.addEventListener('beforeunload', () => {
        //     local.setSessionVal('store', deepClone(this.$store.state));
        // });
    },
};
</script>

<style>
html {
    height: 100%;
}
body {
    height: 100%;
    width: 100%;
    margin: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    height: 100%;
    flex-direction: column;
}
.nav {
    position: fixed;
    width: 100%;
    z-index: 10;
}
.body {
    flex: 1;
    margin-top: 61px;
}
</style>
