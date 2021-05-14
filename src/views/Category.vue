<template>
  <!-- 商品分类 -->
  <div class="category">
    <header class="cat-search">
      <div class="back">
        <van-icon name="arrow-left" class="back-icon" color="#666" />
      </div>
      <div class="search">
        <van-icon name="search" class="search-icon" color="#666" />
        <span class="search-text">清风徐来，水波不兴</span>
      </div>
    </header>
    <section class="cat-content">
      <div class="left-side">
        <ul class="side-ul">
          <li
            class="item-li"
            v-for="(item, i) in categoryList"
            :key="i"
            :class="{ active: currentIndex === item.categoryId }"
            @click="onSelectSideHandle(item.categoryId)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="right-good"></div>
    </section>
    <Navbar />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  setup() {
    const state = reactive({
      categoryList: [
        { name: '热门推荐', categoryId: 1 },
        { name: '手机数码', categoryId: 2 },
        { name: '电脑办公', categoryId: 3 },
        { name: '汽车生活', categoryId: 4 },
        { name: '母婴童装', categoryId: 5 },
        { name: '家居家装', categoryId: 6 },
        { name: '医药保健', categoryId: 7 },
        { name: '玩具乐器', categoryId: 8 },
        { name: '酒水饮料', categoryId: 9 },
        { name: '食品生鲜', categoryId: 10 },
        { name: '运动户外', categoryId: 11 },
        { name: '国际大牌', categoryId: 12 }
      ],
      currentIndex: 1
    })
    const onSelectSideHandle = id => {
      state.currentIndex = id
    }
    return {
      ...toRefs(state),
      onSelectSideHandle
    }
  }
}
</script>

<style lang="less" scoped>
.category {
  height: 100%;
  .cat-search {
    height: 40px;
    line-height: 40px;
    display: flex;
    background-color: #fff;
    border-bottom: 1px solid rgb(223, 219, 219);
    .back {
      width: 40px;
      text-align: center;
      .back-icon {
        line-height: 40px;
        font-size: 18px;
        font-weight: 700;
      }
    }
    .search {
      margin: 5px 10px;
      width: 70%;
      height: 30px;
      line-height: 30px;
      background-color: #f7f7f7;
      border-radius: 15px;
      display: flex;
      .search-icon {
        font-size: 18px;
        line-height: 30px;
        margin-left: 18px;
      }
      .search-text {
        margin-left: 10px;
        color: #888;
      }
    }
  }
  .cat-content {
    display: flex;
    height: calc(100% - 86px);
    .left-side {
      height: 100%;
      overflow: scroll;
      width: 85px;
      text-align: center;
      font-size: 14px;
      color: #333;
      background-color: #f6f6f6;
      .side-ul {
        .item-li {
          height: 46px;
          line-height: 46px;
        }
      }
    }
    .right-good {
      flex: 1;
      background-color: #fff;
    }
  }
  .active {
    color: orange;
    background-color: #fff;
  }
}
</style>
