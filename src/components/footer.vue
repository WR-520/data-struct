<template>
    <div id="foot">
        <a
            class="item"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44080202000058"
        ></a>
        <span class="item"> 版权所有©WR</span>

        <a class="item" href="http://www.beian.miit.gov.cn" style="color:red;"
            >粤ICP备15053357号</a
        >

        <span class="item">粤公网安备 44080202000058</span>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {}
    },
    methods: {},
    mounted() {},
    components: {},
    computed: {},
}
</script>

<style scoped lang="less">
#foot {
    box-sizing: border-box;
    width: 100%;
    min-height: 70px;
    background: #d3dce6;
    opacity: 1;
    font-size: 15px;
    line-height: 1.42857143;
    color: #333;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    .item {
        margin: 0 15px;
    }
}
</style>
