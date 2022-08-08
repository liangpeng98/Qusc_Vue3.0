<template>
  <van-swipe
    class="swipe"
    :autoplay="3000"
    indicator-color="white"
  >
    <van-swipe-item
      v-for="(item, i) in list"
      :key="i"
    >
      <van-image
        height="100%"
        :src="item.src"
        @click="onHandle(item)"
      />
    </van-swipe-item>
  </van-swipe>
</template>

<script setup>
const porps = defineProps({
  list: Array
})
const emits = defineEmits(['handle'])
// ctx 是一个对象 它暴露三个组件的 property  attrs, slots, emit
const onHandle = (v) => {
  // Attribute (非响应式对象)
  // console.log(ctx.attrs)

  // 插槽 (非响应式对象)
  // console.log(ctx.slots)

  // 触发事件 (方法)
  emits('handle', v)
}
</script>
<style scoped lang="less">
.swipe {
  width: 100%;
  height: 100%;
}
</style>
