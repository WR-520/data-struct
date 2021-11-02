<template>
    <div class="pagination">
        <el-pagination
            small
            background
            :hide-on-single-page="true"
            layout="prev, pager, next"
            :total="80"
            @current-change="handleCurrentChange"
        >
        </el-pagination>
    </div>
</template>
<script>
export default {
    name: 'Pagination',
    methods: {
        handleCurrentChange(v) {
            console.log('current', v);
        },
    },
    mounted() {},
};
</script>
<style lang="less" scoped>
.pagination {
    text-align: right;
    margin: 20px;
}
</style>
