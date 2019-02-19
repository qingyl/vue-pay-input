import Vue from 'vue'
import Router from 'vue-router'
import payInput from '@/components/payInput'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'payInput',
        component: payInput
    }]
})