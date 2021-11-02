 //统计
<template>
    <div id="AdminStatistics">
        <search-panel :searchForm="selectParams" :submitFun="submitSearch" />
        <echarts :title="title" :pieChartData="pieChartData" />
        <el-table :data="censusDetail" border style="width: 100%">
            <el-table-column prop="sid" label="ID" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名"> </el-table-column>
            <el-table-column prop="number" label="分数"> </el-table-column>
            <el-table-column prop="number" sortable label="分数">
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import echarts from '@/components/echarts';
import { census, scoredetail } from '../server/teacher';
import SearchPanel from '../teaComponents/quClub/searchPanel.vue';
export default {
    name: 'AdminStatistics',
    methods: {
        submitSearch(params) {
            console.log('搜索参数', params);
        },
    },
    data() {
        return {
            title: {
                text: '第一次测验',
                subtext: '',
            },

            pieChartData: [
                { value: 10, name: '不及格' },
                { value: 5, name: '及格' },
            ],
            censusDetail: [],
          
        };
    },

    created() {
        // this在网络请求的异步代码块中的this与当前数据所在类的this非同一作用域
        census().then((val) => {
            //   console.log("census",val)
            console.log('this.censusDetail', this.censusDetail);
            this.censusDetail = val;
            console.log('census', this.censusDetail);
        });
        scoredetail().then(function (val) {
            console.log('scoreclasses', val);
        });
    },

    computed: {
        selectParams: function () {
            return [
               

                {
                    label: '班别',
                    value: 'classes',
                    type: 'select',
                    optionsLists: [
                        { text:"全部",value:0},
                        { text: '19软件3', value: 1 },
                        { text: '19软件2', value: 2 },
                    ],
                },
            ];
        },
    },
    components: {
        echarts,
        SearchPanel
    },
    mounted() {},
};
</script>
