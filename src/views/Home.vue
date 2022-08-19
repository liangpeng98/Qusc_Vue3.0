<template>
  <div class="home">
    <header class="home-header">
      <div class="pro-title">趣商城</div>
      <div class="search">山河无恙，人间皆安</div>
      <div class="login-title" @click="onLoginHandle">登录</div>
    </header>
    <Swipe
      class="home-swipe"
      :list="swipeList"
      @handle="onLinkJDHandle"
    ></Swipe>
    <nav class="home-nav">
      <div class="nav-item" v-for="item in categoryList" :key="item.categoryId">
        <img :src="item.imgUrl" alt="" />
        <span>{{ item.name }}</span>
      </div>
    </nav>
    <div class="pro-box good-list">
      <div
        class="good-item"
        v-for="(item, i) in goodList"
        :key="i"
        @click="onDetailHandle"
      >
        <div class="good-item-img">
          <img
            style="display: block; width: 100%; height: 100%"
            :src="item.src"
          />
        </div>
        <div class="good-item-desc">{{ item.desc }}</div>
      </div>
    </div>
    <Navbar />
    <Backtop />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { Toast } from 'vant'
import Swipe from '@/components/Swipe.vue'
import Navbar from '@/components/Navbar.vue'
import Backtop from '@/components/Backtop.vue'
import banner1 from '@/assets/img/banner1.png'
import banner2 from '@/assets/img/banner2.png'
import banner3 from '@/assets/img/banner3.png'
import banner4 from '@/assets/img/banner4.png'
import banner5 from '@/assets/img/banner5.png'
import good1 from '@/assets/img/good1.png'
import good2 from '@/assets/img/good2.png'
import good3 from '@/assets/img/good3.png'
import good4 from '@/assets/img/good4.png'
import good5 from '@/assets/img/good5.png'
import good6 from '@/assets/img/good6.png'
import good7 from '@/assets/img/good7.png'
// data数据
const swipeList = reactive([
  { name: 'img1', src: banner1 },
  { name: 'img2', src: banner2 },
  { name: 'img3', src: banner3 },
  { name: 'img4', src: banner4 },
  { name: 'img5', src: banner5 },
])
const categoryList = reactive([
  {
    name: '新蜂超市',
    imgUrl: 'https://s.yezgea02.com/1604041127880/%E8%B6%85%E5%B8%82%402x.png',
    categoryId: 100001,
  },
  {
    name: '新蜂服饰',
    imgUrl: 'https://s.yezgea02.com/1604041127880/%E6%9C%8D%E9%A5%B0%402x.png',
    categoryId: 100003,
  },
  {
    name: '全球购',
    imgUrl:
      'https://s.yezgea02.com/1604041127880/%E5%85%A8%E7%90%83%E8%B4%AD%402x.png',
    categoryId: 100002,
  },
  {
    name: '新蜂生鲜',
    imgUrl: 'https://s.yezgea02.com/1604041127880/%E7%94%9F%E9%B2%9C%402x.png',
    categoryId: 100004,
  },
  {
    name: '新蜂到家',
    imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%88%B0%E5%AE%B6%402x.png',
    categoryId: 100005,
  },
  {
    name: '充值缴费',
    imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%85%E5%80%BC%402x.png',
    categoryId: 100006,
  },
  {
    name: '9.9元拼',
    imgUrl: 'https://s.yezgea02.com/1604041127880/9.9%402x.png',
    categoryId: 100007,
  },
  {
    name: '领劵',
    imgUrl: 'https://s.yezgea02.com/1604041127880/%E9%A2%86%E5%88%B8%402x.png',
    categoryId: 100008,
  },
  {
    name: '省钱',
    imgUrl: 'https://s.yezgea02.com/1604041127880/%E7%9C%81%E9%92%B1%402x.png',
    categoryId: 100009,
  },
  {
    name: '全部',
    imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%A8%E9%83%A8%402x.png',
    categoryId: 100010,
  },
])
const goodList = reactive([
  {
    name: 'good1',
    src: good1,
    desc: '力宝克（REBOK）功放机家用大功率专业5.1家庭影院蓝牙KTV音响重低音数字hifi定阻功放  1600W双解码hifi大功率（A5）',
  },
  { name: 'good2', src: good2 },
  { name: 'good3', src: good3 },
  { name: 'good4', src: good4 },
  { name: 'good5', src: good5 },
  { name: 'good6', src: good6 },
  { name: 'good7', src: good7 },
])
const stroe = useStore()
const router = useRouter()
// 方法
const onLoginHandle = () => {}
const onLinkJDHandle = (v) => {
  window.open('https://www.jd.com/')
}
const onDetailHandle = () => {
  Toast.fail('暂无详情数据')
}
// 模板中用到的数据方法return出去
</script>
<style lang="less" scoped>
.home-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 40px;
  width: 100%;
  line-height: 40px;
  background-color: rgb(184, 209, 219);
  display: flex;
  text-align: center;
  .pro-title {
    width: 70px;
    font-size: 16px;
    font-weight: 700;
    color: rgb(114, 64, 64);
  }
  .search {
    width: 60%;
    height: 30px;
    line-height: 32px;
    text-indent: 20px;
    text-align: left;
    border: 1px solid #ccc;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    margin: 4px 0;
    color: #888;
  }
  .login-title {
    flex: 1;
    font-size: 14px;
  }
}
.home-swipe {
  height: 150px;
  width: 96%;
  margin: 0 auto;
  margin-top: 42px;
  border-radius: 6px;
  background-color: #ccc;
}

/* 菜单 */
.home-nav {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  .nav-item {
    width: 20%;
    height: 70px;
    img {
      display: block;
      width: 40px;
      margin: 5px auto 0;
    }
    span {
      display: block;
      height: 25px;
      line-height: 25px;
      font-size: 12px;
    }
  }
}

.good-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 50px;
  .good-item {
    background-color: #fff;
    width: 49%;
    margin-top: 2%;
    border-radius: 6px;
    overflow: hidden;
    .good-item-img {
      width: 100%;
      height: 147px;
    }
    .good-item-desc {
      height: 31px;
      font-size: 12px;
      word-break: break-all;
      color: #1a1a1a;
      margin-top: 5px;
      line-height: 16px;
      margin-bottom: 3px;
      padding: 0 4px;

      /* 将对象设置为弹性伸缩盒子模型 */
      display: -webkit-box;
      /* 设置对象的子元素的排列方式：从上到下垂直排列子元素 */
      -webkit-box-orient: vertical;
      /* 限制块元素显示的文本行数 */
      -webkit-line-clamp: 2;
      /* 溢出隐藏 */
      overflow: hidden;
      /* 多行文本溢出显示省略号 */
      text-overflow: ellipsis;
    }
  }
}
</style>
