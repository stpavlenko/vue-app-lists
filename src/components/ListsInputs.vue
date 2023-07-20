<script setup>
import { ref } from 'vue'
import { useListsStore } from '@/stores/lists'
import ListsInput from '@/components/ListsInput.vue'

const listsStore = useListsStore()
</script>
<template>
  <div>
    <ul>
      <ListsInput v-for="list in listsStore.lists" :key="list.id" :id="list.id" />
    </ul>
  </div>
</template>
<style lang="scss"></style>
