<template>
  <div class="back-top" :class="{ show: flag }" @click="onScrollTop">
    <van-icon class="icon" name="back-top" color="#1989fa" />
  </div>
</template>

<script>
import { toRefs, reactive } from 'vue'
export default {
  setup() {
    const state = reactive({
      flag: true
    })
    window.onscroll = function() {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      //   console.log(scrollTop)
      state.flag = scrollTop > 200 ? false : true
    }
    const onScrollTop = () => {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }
    return {
      ...toRefs(state),
      onScrollTop
    }
  }
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
