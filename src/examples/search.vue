<template>
    <div>
        <h3>Search</h3>
        <el-input
            v-model="input"
            placeholder="请输入内容"
            v-on:input="searchLists"
        ></el-input>
    </div>
</template>
<style lang="stylus"></style>
<script>
import { getQuestions, getArticles } from '../server/examples';
export default {
    name: 'Search',
    data() {
        return {
            input: '',
            input3: '',
            select: '',
        };
    },
    methods: {
        async searchLists(e) {
            console.log(e);
            // const res = await getQuestions()
            // console.log(res)
        },
    },
    async created() {
        // const res = await getQuestions()
        // console.log(res)
        // const res2 = await getArticles()
        // console.log(res2)
    },
};
</script>
