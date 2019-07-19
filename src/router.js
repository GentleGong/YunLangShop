import home from './components/navbar/home.vue'
import userCenter from './components/navbar/userCenter.vue'
import shopCar from './components/navbar/shopCar.vue'
import search from './components/navbar/search.vue'

const router = {
    routes: [
        {
            path: '/',
            component: home
        },
        {
            path: '/home',
            component: home
        },
        {
            path: '/user-center',
            component: userCenter
        },
        {
            path: '/shop-car',
            component: shopCar
        },
        {
            path: '/search',
            component: search
        }
    ],
    // linkActiveClass: 'mui-active' // 配置路由的高亮样式
    linkActiveClass: 'my-active' // 配置路由的高亮样式
}

export default router