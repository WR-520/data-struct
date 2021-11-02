<template>
    <div>
        我是slot,演示slot与template
        <slot name="expand" v-bind:user="user"></slot>
    </div>
</template>
<script>
export default {
    name: 'Panel',
    data() {
        return {
            user: {
                name: '张三',
            },
        };
    },
};
</script>
