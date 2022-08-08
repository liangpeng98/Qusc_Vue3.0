<template>
  <div
    class="back-top"
    :class="{ show: flag }"
    @click="onScrollTop"
  >
    <van-icon
      class="icon"
      name="back-top"
      color="#1989fa"
    />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const flag = ref(true)
window.onscroll = function () {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop
  flag.value = scrollTop > 200 ? false : true
}
const onScrollTop = () => {
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}
</script>

<style lang="less" scoped>
.back-top {
  width: 29px;
  height: 29px;
  border-radius: 15px;
  border: 1px solid #ccc;
  background-color: #fff;
  position: fixed;
  bottom: 100px;
  right: 10px;
  z-index: 999;
  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-52%, -50%);
    font-size: 20px;
    color: #b8d1db !important;
  }
}
.show {
  display: none;
}
</style>
