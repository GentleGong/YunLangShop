import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import App from './App.vue'

import 'mint-ui/lib/style.css'
// import MintUI from 'mint-ui'
// Vue.use(MintUI)
//  按需导入相关模块

import { Header, Swipe, SwipeItem } from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import './lib/mui-master/dist/css/mui.min.css'
import './lib/mui-master/examples/hello-mui/css/icons-extra.css'

import './css/index.css'


// 导入自己的路由模块
import routerModule from './router.js'

const router = new VueRouter(routerModule)

// 处理 http 请求的 vue 模块
import vueResource from 'vue-resource'
Vue.use(vueResource)

// import axios from 'axios'
// Vue.use(axios)

let vm = new Vue({
    el: '#app',
    data: {},
    render(h) {
        return h(App)
    },
    router: router
})