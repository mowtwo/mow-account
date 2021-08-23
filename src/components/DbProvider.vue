<template>
  <slot></slot>
</template>

<script lang="ts" setup>
import { provide, defineEmits } from '@vue/runtime-core'
import initDB from '@utils/localforageUtils'
const emit = defineEmits(['dbCompleted'])
const db = await initDB()
provide('db', db) // 当localforge初始化完成后将其注入到下级组件
emit('dbCompleted', db)
</script>

<style lang="scss"></style>
