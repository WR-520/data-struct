<template>
    <div>
        <div class="floder" title="收藏夹" @click="handleFloderVisible">
            <i class="el-icon-s-claim floder-icon"></i>
        </div>

        <div>
            <el-dialog
                key="quvisible"
                title="收藏夹"
                center
                :visible.sync="quvisible"
                :append-to-body="true"
                :width="width"
            >
                <QuestionsLists
                    :recordArray="questionsData"
                    :showAns="true"
                    :deleteFun="handledelete"
                    deleteDesc="取消收藏"
                />

                <span slot="footer">
                    <el-button
                        type="primary"
                        size="mini"
                        @click="quvisible = false"
                        >关闭</el-button
                    >
                </span>
            </el-dialog>
        </div>
    </div>
</template>
<script>
import QuestionsLists from 'teaComponents/exClub/questionsLists';
import { Message } from 'element-ui';
import { MessageBox } from 'element-ui';

export default {
    name: 'Folder',
    data() {
        return {
            questionsData: this.$store.state.questionsData,
            quvisible: false,
        };
    },
    methods: {
        handleFloderVisible: function() {
            this.quvisible = true;
        },
        // cancelFun: function(done) {
        //     done();
        // },
        handledelete: questionId => {
            const that = this;
            Message.success('操作成功');
            // MessageBox({
            //     title: '提示',
            //     message: '此操作将永久删除该题目, 是否继续?',
            //     confirmButtonText: '确定',
            //     cancelButtonText: '取消',
            //     type: 'warning',
            //     callback: async function(action) {
            //         if (action === 'confirm') {
            //             const { questionId } = item;
            //             const res = await delChoiceQuestion({ questionId });
            //             if (res.status === 200) {
            //                 Message.success('操作成功');
            //                 that.getLists();
            //             }
            //         }
            //     },
            // });
        },
    },
    computed: {
        width: function() {
            return document.documentElement.clientWidth >= 768
                ? '600px'
                : '100%';
        },
    },
    mounted() {
        console.log(this.$store.state.questionsData);
    },
    components: {
        QuestionsLists,
    },
};
</script>
<style lang="less">
.floder {
    position: fixed;
    bottom: 100px;
    left: 20px;
    width: 48px;
    height: 48px;
    line-height: 48px;
    border-radius: 50%;
    border: aliceblue 2px solid;
    background-color: #2196f3b5;
    z-index: 10;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    cursor: pointer;

    animation: rotating 5s linear infinite;
    -moz-animation: rotating 5s linear infinite; /* Firefox */
    -webkit-animation: rotating 5s linear infinite; /* Safari and Chrome */
    -o-animation: rotating 5s linear infinite; /* Opera */

    animation-play-state: running;
    -webkit-animation-play-state: running;
}
.floder:hover {
    background-color: #e91e63;
    animation-play-state: paused;
    -webkit-animation-play-state: paused;
}
.floder-icon {
    font-size: 36px;
    vertical-align: middle;
    color: aliceblue;
}
@keyframes rotating {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
