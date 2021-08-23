<template>
  <suspense>
    <DbProvider @db-completed="dbCompletedHandle">
      <router-view></router-view>
    </DbProvider>
    <template #fallback>
      <!-- 这里放置骨架屏 -->
    </template>
  </suspense>
</template>

<script lang="ts" setup>
import DbProvider from './components/DbProvider.vue'
const dbCompletedHandle = (db: LocalForage) => {
  // 这里进行初始化配置
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
