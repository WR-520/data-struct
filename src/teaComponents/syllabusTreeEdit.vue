<template>
    <el-tree
        :data="data"
        node-key="id"
        default-expand-all
        :expand-on-click-node="false"
    >
        <span class="custom-tree-node" slot-scope="{ node, data }">
            <span>{{ node.label }}</span>
            <span class="btn-group">
                <el-button
                    type="text"
                    size="mini"
                    @click="() => append(data)"
                    v-if="data.type !== 2"
                >
                    Append
                </el-button>
                <el-button
                    v-if="data.type !== 0"
                    type="text"
                    size="mini"
                    @click="() => remove(node, data)"
                >
                    Delete
                </el-button>
            </span>
        </span>
    </el-tree>
</template>
<script>
export default {
    name: 'SyllabusTreeEdit',
    // props: {
    //     syllabusDialogVisible: Boolean,
    //     setSyllabusDialogVisible: Function,
    // },
    data() {
        const data = [
            {
                id: 1,
                type: 0, // 0 课程名（不准删） 1 章节名 2 节名（不准有字节点）
                label: '数据结构第2版',
                children: [
                    {
                        id: 4,
                        type: 1,
                        label: '二级 1-1',
                        children: [
                            {
                                id: 9,
                                type: 2,
                                label: '三级 1-1-1',
                            },
                            {
                                id: 10,
                                type: 2,
                                label: '三级 1-1-2',
                            },
                        ],
                    },
                    {
                        id: 42,
                        type: 1,
                        label: '二级 1-1',
                        children: [
                            {
                                id: 49,
                                type: 2,
                                label: '三级 1-1-1',
                            },
                            {
                                id: 50,
                                type: 2,
                                label: '三级 1-1-2',
                            },
                        ],
                    },
                    {
                        id: 51,
                        type: 1,
                        label: '二级 1-1',
                        children: [
                            {
                                id: 59,
                                type: 2,
                                label: '三级 1-1-1',
                            },
                            {
                                id: 60,
                                type: 2,
                                label: '三级 1-1-2',
                            },
                        ],
                    },
                ],
            },
        ];
        return {
            data: JSON.parse(JSON.stringify(data)),
        };
    },
    computed: {},
    methods: {
        append(data) {
            const newChild = {
                id: data.id * 10 + 1,
                label: '未命名',
                children: [],
            };
            if (!data.children) {
                this.$set(data, 'children', []);
            }
            data.children.push(newChild);
        },
        remove(node, data) {
            const parent = node.parent;
            const children = parent.data.children || parent.data;
            const index = children.findIndex(d => d.id === data.id);
            children.splice(index, 1);
        },
    },
};
</script>

<style scoped lang="less">
.block {
    max-height: 600px;
    overflow: auto;
}
.btn-group {
    margin-left: 60px;
}
</style>
<style lang="less"></style>
