<template>
    <div class="container">
        <!-- 导航栏 -->
        <!-- <header id="header" class="mui-bar mui-bar-nav">
            <h1 class="mui-title">导航栏</h1>
        </header> -->
        <mt-header fixed title="云琅天上触屏版"></mt-header>
        <!-- /导航栏 -->

        <!-- 底部标签栏 -->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/user-center">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">个人中心</span>
            </router-link>
            <router-link class="mui-tab-item" to="/shop-car">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge">9</span>
                </span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
        <!-- /底部标签栏 -->

        <div class="mui-content">
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<style scoped>
    .container {
        /* 切换导航栏时去掉滚动条 */
        overflow: hidden;
    }
    .mui-bar {
        background-color: #fff;
    }
    .mui-bar-tab .mui-tab-item {
        color: #6f6464;
    }
    .mui-bar-tab .mui-tab-item.my-active {
        color: #ff772c;
    }
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
    .fade-enter {
        transform: translateX(100%);
    }
    .fade-leave-to {
        transform: translateX(-100%);
        position: absolute;
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: all .5s;
    }

</style>

<script>
    import { Toast } from 'mint-ui';

    export default {
        data() {
            return {
                toastInstance: null // Toast 的实例
            }
        },
        methods: {
            getList() {  // 模拟获取列表的方法
                // 定时器设置加载数据中的状态提示框
                this.show();
                setTimeout(() => {
                    console.log('---------显示数据----------');
                    this.toastInstance.close()
                }, 3000);
            },
            show() {
                console.log('show() 被调用了');
                this.toastInstance = Toast({
                    message: '提示: 燕赤霞速来，聂小倩在兰若寺',
                    position: 'bottom',
                    duration: 3000, // -1 弹出后不会消失
                    iconClass: 'glyphicon glyphicon-heart', // 字体图标的类名
                    className: 'mytoast' // 自定义 toast 的类名
                });
            }
        },
        created() {
            // this.getList()
        },
    }
</script>