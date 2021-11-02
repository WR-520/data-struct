<template>
    <div class="buttonpanel">
        <el-button
            v-for="(btn, index) in btnGroup"
            :key="index"
            @click="btn.fun"
            size="mini"
            >{{ btn.label }}<i class="el-icon-plus el-icon--right"></i
        ></el-button>
    </div>
</template>
<script>
export default {
    name: 'ButtonPanel',
    props: {
        // handleAddClass: Function,
        btnGroup: Array,
    },
    methods: {
        // handleAddClass: function() {
        //     console.log('add');
        // },
    },
    mounted() {},
};
</script>
<style lang="less" scoped>
.buttonpanel {
    border-top: 1px solid #e3e0e0;
    padding: 20px;
    padding-left: 60px;
    box-sizing: border-box;
    text-align: left;
}
</style>
