<template>
    <div class="block">
        <el-tree :data="data" :props="defaultProps" accordion> </el-tree>
    </div>
</template>
<script>
import local from 'utils/local';
let id = 1000;
export default {
    name: 'SyllabusTree',

    data() {
        return {
            data: [
                {
                    id: 0,
                    label: '数据结构第2版',
                    children: [
                        {
                            label: '第一章、绪论',
                            id: 1,
                        },
                        {
                            label: '第二章、链表',
                            children: [
                                {
                                    label: '第1节、单向链表',
                                },
                                {
                                    label: '第2节、双向链表',
                                },
                            ],
                        },
                        {
                            label: '第三章、栈与队列',
                            children: [
                                {
                                    label: '第1节、栈',
                                },
                                {
                                    label: '第2节、队列',
                                },
                            ],
                        },
                    ],
                },
            ],
            defaultProps: {
                children: 'children',
                label: 'label',
            },
        };
    },

    methods: {
        // append(data) {
        //     const newChild = { id: id++, label: 'testtest', children: [] };
        //     if (!data.children) {
        //         this.$set(data, 'children', []);
        //     }
        //     data.children.push(newChild);
        // },
        // remove(node, data) {
        //     const parent = node.parent;
        //     const children = parent.data.children || parent.data;
        //     const index = children.findIndex(d => d.id === data.id);
        //     children.splice(index, 1);
        // },
    },
};
</script>

<style scoped lang="less">
.syllabus-btn {
    padding: 6px 12px;
    float: right;
    margin-right: 18px;
}
.block {
    max-height: 600px;
    overflow: auto;
}
</style>
<style lang="less"></style>
