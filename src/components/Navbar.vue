<template>
  <van-tabbar
    v-model="data"
    fixed
    class="nav-bar"
    @change="onChangeHandle"
  >
    <van-tabbar-item icon="wap-home-o" to="/">首页</van-tabbar-item>
    <van-tabbar-item icon="apps-o" to="/category">分类</van-tabbar-item>
    <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
    <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import { ref,onMounted } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const data = ref(null)
onMounted(()=>{
  data.value = store?.state?.active
})
const onChangeHandle = (v) => {
  store.dispatch('setActive', v)
}
</script>

<style lang="less" scoped>
.nav-bar {
  width: 100%;
  height: 44px;
  border-top: 1px solid #ccc;
  z-index: 999;
}
</style>
