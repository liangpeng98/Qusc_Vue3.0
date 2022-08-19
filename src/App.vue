<template>
  <router-view />
</template>
<script setup>
import { ref, isRef, unref, watchPostEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
const route = useRoute()
const router = useRouter()
const store = useStore()
watchPostEffect(() => {
  if (route.fullPath === '/category') {
    store.dispatch('setActive', 1)
  } else if (route.fullPath === '/') {
    store.dispatch('setActive', 0)
  }
})
</script>
