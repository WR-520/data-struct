<template>
    <div class="block">
        <el-row>
            <el-col :xs="{ span: 24 }" :sm="{ span: 12 }">
                <div class="item">
                    <div class="label">课程：</div>
                    <div class="box">数据结构第2版</div>
                </div>
                <div class="item">
                    <div class="label">人数：</div>
                    <div class="box">120人</div>
                </div>
                <div class="item">
                    <div class="label">视频数：</div>
                    <div class="box">8个</div>
                </div>
                <div class="item">
                    <div class="label">测验数：</div>
                    <div class="box">3次</div>
                </div>
            </el-col>
            <!-- <el-col :xs="{ span: 24 }" :sm="{ span: 12 }"></el-col> -->
            <el-col>
                <div class="item">
                    <div class="label">班级：</div>
                    <div class="box">
                        <el-button
                            type="primary"
                            icon="el-icon-plus"
                            size="mini"
                            circle
                            @click="addClass"
                        ></el-button>
                        <el-tag
                            :key="tag"
                            type="info"
                            effect="plain"
                            v-for="tag in dynamicTags"
                            closable
                            :disable-transitions="false"
                            @close.stop="handleClose(tag)"
                            @click="hadletoManage(52)"
                        >
                            {{ tag }}
                        </el-tag>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'ClassInfo',

    data() {
        return {
            dynamicTags: [
                '计算机科学与技术2018级3班',
                '软件工程2019级1班',
                '其他',
            ],
        };
    },

    methods: {
        handleClose(tag) {
            console.log(tag);
        },
        addClass() {},
        hadletoManage(classId) {
            this.$router.push(`class?classId=${classId}`);
        },
    },
};
</script>

<style scoped lang="less">
.block {
    padding-left: 40px;
    box-sizing: border-box;
    .item {
        display: flex;
        margin: 10px 0;
        justify-content: flex-start;
    }
    .label {
        width: 100px;
        text-align: right;
    }
    .box {
        margin: 0 10px;
        flex: 1;
        text-align: left;
    }
}
</style>
<style lang="less"></style>
