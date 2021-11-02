<template>
    <div>
        <div class="container" v-for="li in lists" v-bind:key="li.path">
            <router-link v-bind:to="li.path">
                {{ li.path }}
            </router-link>
        </div>

        <!-- <router-link to="/home">Home</router-link> -->
    </div>
</template>
<style lang="less" scoped>
.container {
    text-align: left;
    margin: 10px 30px;
}
</style>

<script>
import { routes } from '../router/index'

export default {
    name: 'ExHome',

    data() {
        return {
            lists: routes.filter(v => v.path === '/examples')[0].children,
        }
    },
    methods: {
        // requestData() {
        //     axios
        //         .get('/api/articles')
        //         .then(e => {
        //             let data = e.data
        //             if (data.data && Array.isArray(data.data)) {
        //                 this.articles = data.data
        //             }
        //             console.log(this.articles)
        //         })
        //         .catch(err => {
        //             console.log(err)
        //         })
        // },
    },
    created() {
        //  console.log(routes)
        // this.requestData()
    },
}
</script>
