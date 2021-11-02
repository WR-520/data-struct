<template>
    <div>
        <h2>Examples</h2>
        <router-view></router-view>
    </div>
</template>
<script>
import axios from 'axios'
// import { routes } from '../router/index'

export default {
    name: 'Index',
    // props: {
    //     msg: String,
    // },
    // data() {
    //     return {
    //         lists: routes.filter(v => v.path === '/examples')[0].children,
    //     }
    // },
    methods: {
        requestData() {
            axios
                .get('/api/articles')
                .then(e => {
                    let data = e.data
                    if (data.data && Array.isArray(data.data)) {
                        this.articles = data.data
                    }
                    console.log(this.articles)
                })
                .catch(err => {
                    console.log(err)
                })
            //  '/api/questionData'
            axios.get('/api/questionData').then(e => {
                console.log('e', e)
            })
        },
    },
    mounted() {
        //  console.log(routes)
        //  this.requestData()
    },
}
</script>
