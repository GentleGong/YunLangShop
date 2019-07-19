<template>
  <div class="container-body">
    <!-- 轮播图 -->
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="item in swipeList" :key="item.id">
        <img :src="item.img" alt />
      </mt-swipe-item>
    </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu1.png" alt />
          <div class="mui-media-body">新闻资讯</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu2.png" alt />
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu3.png" alt />
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu4.png" alt />
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu5.png" alt />
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu6.png" alt />
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>


<style lang="scss" scopes>
.container-body {
  height: 100%;
  .mint-swipe {
    height: 200px;
    .mint-swipe-items-wrap {
      .mint-swipe-item {
        img {
          width: 100%;
          height: 100%;
          // transform: translateX(-50%);
          // margin-left: 50%;
        }
      }
    }
    .mint-swipe-indicators {
      .mint-swipe-indicator {
        // background-color: #fff;
        opacity: 0.4;
        &.is-active {
          opacity: 1;
        }
      }
    }
  }
  .mui-grid-view {
    &.mui-grid-9 {
      background-color: #fff;
      .mui-table-view-cell {
        a {
          img {
            width: 60px;
          }
        }
      }
    }
  }
}
</style>

<script>
// http://www.liulongbin.top:3005
import axios from "axios";
axios.defaults.baseURL = "http://www.liulongbin.top:3005";

import { Toast } from "mint-ui";

export default {
  data() {
    return {
      swipeList: [
          {
              id: 1,
              url: '',
              img: '../../images/nav1.dpg'
          },
          {
              id: 2,
              url: '',
              img: '../../images/nav2.jpg'
          },
          {
              id: 3,
              url: '',
              img: '../../images/nav3.dpg'
          },
          {
              id: 4,
              url: '',
              img: '../../images/nav4.dpg'
          },
          {
              id: 5,
              url: '',
              img: '../../images/nav5.dpg'
          },
          {
              id: 6,
              url: '',
              img: '../../images/nav6.dpg'
          },
          {
              id: 7,
              url: '',
              img: '../../images/nav7.dpg'
          },
      ]
    };
  },
  created() {
    // this.getSwipeData();
  },
  methods: {
    getSwipeData() {
      /* this.$http
        .get("http://www.liulongbin.top:3005/api/getLunbo")
        .then(res => {
          console.log(res);
          if (res.status == 200) {
            // {id: 1, url: "http://www.itcast.cn/subject/phoneweb/index.html", img: "http://www.itcast.cn/subject/webzly/images/1.jpg"}
            this.swipeList = res.body.message;
          }
        })
        .catch(error => {
          console.log(error);
        }); */

      axios
        .get("/api/getLunbo")
        .then(res => {
          console.log(res.data);
          if (res.status == 200 || res.data.status == 0) {
            console.log(res.data.message);
            this.swipeList = res.data.message;
          } else {
            Toast({
              message: "提示: 获取数据失败",
              position: "bottom",
              duration: 3000
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>