<script setup>
import { useListsStore } from '@/stores/lists'
import ListsOutput from './ListsOutput.vue'

const listsStore = useListsStore()
</script>
<template>
  <div>
    <ListsOutput v-for="list in listsStore.lists" :key="list.id" :id="list.id" />
  </div>
</template>
<style lang="scss"></style>
