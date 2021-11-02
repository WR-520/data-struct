// 班级页

<template>
    <div>班级</div>
</template>
<script>
export default {
    name: 'AdminClass',

    methods: {},
    mounted() {},
    created: function() {
        console.log('classId', this.$route.query.classId);
    },
};
</script>
