// 考试 表格
<template>
    <div class="classexamTable">
        <el-table
            :data="tableData"
            style="width: 100%;"
            size="mini"
            :highlight-current-row="true"
        >
            <el-table-column
                label="编号"
                prop="id"
                width="80%"
            ></el-table-column>
            <el-table-column
                label="标题"
                prop="name"
                width="240%"
            ></el-table-column>

            <el-table-column label="归属" prop="belong"></el-table-column>

            <el-table-column label="来源" prop="creator"></el-table-column>
            <el-table-column
                label="开始时间"
                prop="startTime"
                width="150%"
            ></el-table-column>
            <el-table-column
                label="开始时间"
                prop="endTime"
                width="150%"
            ></el-table-column>
            <el-table-column label="题量" prop="quesnumber" width="60%">
            </el-table-column>
            <el-table-column label="状态" prop="statusDesc"></el-table-column>
            <el-table-column label="操作" width="200%">
                <template slot-scope="scope">
                    <el-button type="text" size="mini" @click="edit()">编辑</el-button>
                    <el-button type="text" size="mini" @click="ToCensus()">分数统计</el-button>
                    <el-button type="text" size="mini">发布</el-button>
                    <el-button type="text" size="mini">移除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    name: 'OnLineTablePanel',
    props: {
        tableData: Array, // 表格数据
        myChoose:Object
    },
    data() {
        return {};
    },

    methods: {
         ToClose(dialogVisible){
          this.dialogVisible = dialogVisible
        }, 
          ToCensus(){
        //    this.$router.push({name:'admin/statistics',params:{pid:'1111',tid:'5555',all:1}});
        this.$router.push({path:'/admin/statistics'})
       },
    },
    mounted() {
        // console.log(
        //     'console.log(this.$store.state.count)',
        //     this.$store.state.count
        // );
    },
};
</script>
<style lang="less">
.classexamTable {
    .el-table tr th {
        background-color: #eee9e9;
    }
}
</style>
