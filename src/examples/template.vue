<template>
    <div>
        <h3>vue template</h3>
        <Panel
            ><template v-slot:expand="slotProps">
                <h4>this is panel</h4>
                <span> {{ slotProps.user.name }}</span>
                <div>
                    这在设计封装数据逻辑同时允许父级组件自定义部分布局的可复用组件时是最有用的。
                </div>
            </template></Panel
        >
    </div>
</template>

<script>
import Panel from './coms/panel';
export default {
    name: 'Template',
    data() {
        return {};
    },
    components: {
        Panel,
    },
};
</script>
