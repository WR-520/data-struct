// 题目描述 列表
<template>
    <div class="queslist">
        <el-collapse accordion>
            <el-collapse-item
                v-for="(record, index) in recordArray"
                :key="index"
            >
                <template slot="title">
                    <div class="list-item-box">
                        <div class="list-item">
                            {{ `【${record.type}】` }}{{ record.name }}
                        </div>
                        <div class="delete-box">
                            <i
                                :title="deleteDesc"
                                class="el-icon-delete delete-box-i"
                                @click.stop="deleteFun"
                            ></i>
                        </div>
                    </div>
                </template>
                <ChoiceDesc
                    v-if="record.typeId === 1"
                    :record="record"
                    :showAns="showAns"
                />

                <CompletionDesc
                    v-else-if="record.typeId === 2"
                    :record="record"
                    :showAns="showAns"
                />
                <JudgmentDesc
                    v-else-if="record.typeId === 3"
                    :record="record"
                    :showAns="showAns"
                />
                <ShortanswerDesc
                    v-else-if="record.typeId === 4"
                    :record="record"
                    :showAns="showAns"
                />

                <span v-else>未知错误，请联系老师！</span>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script>
import ChoiceDesc from 'teaComponents/quClub/choiceDesc';
import JudgmentDesc from 'teaComponents/quClub/judgmentDesc';
import CompletionDesc from 'teaComponents/quClub/completionDesc';
import ShortanswerDesc from 'teaComponents/quClub/shortanswerDesc';
export default {
    name: 'QuestionsLists',
    props: {
        recordArray: Array,
        showAns: Boolean,
        deleteFun: Function,
        deleteDesc: String,
    },
    data() {
        return {};
    },
    components: {
        ChoiceDesc,
        JudgmentDesc,
        CompletionDesc,
        ShortanswerDesc,
    },
};
</script>
<style lang="less" scoped>
.list-item-box {
    height: 100%;
    flex: 1;
    display: flex;
    overflow: hidden;

    // white-space: nowrap;
    // text-overflow: ellipsis;
}
.list-item {
    width: 90%;
    overflow: hidden;

    white-space: nowrap;
    text-overflow: ellipsis;
}

.delete-box-i {
    box-sizing: border-box;
    padding: 6px;
}
</style>
