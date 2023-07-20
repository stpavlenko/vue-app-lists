<script setup>
import { ref, computed, watch } from 'vue'
import { useListsStore } from '@/stores/lists'

const listsStore = useListsStore()

const props = defineProps({ id: Number })

const list = listsStore.lists.find((list) => list.id === props.id)
const isRandom = ref(false)

const checkedItems = computed(() => list.items.filter((item) => item.checked))
const randomItems = computed(() => {
  if (isRandom.value) {
    const array = []
    checkedItems.value.forEach((item) => {
      for (let i = 1; i <= item.count; i++) {
        array.push({ id: i, color: item.color })
      }
    })
    return shuffle(array)
  }
  return []
})

const labelText = computed(() => {
  if (isRandom.value) return 'Sort'
  return 'Randomize'
})

function removeBox(item) {
  item.count -= 1
}

function removeBoxFromRandom(color) {
  list.items.find((item) => item.color === color).count -= 1
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }

  return array
}
</script>
<template>
  <div class="output">
    <span class="output__upper">
      {{ list.name }}
      <label v-if="checkedItems.length">
        <input type="checkbox" v-model="isRandom" class="visually-hidden" />
        <span class="output__button">
          {{ labelText }}
        </span>
      </label>
    </span>
    <div v-if="!isRandom">
      <div class="output__items">
        <div v-for="item in checkedItems" :key="item.id" class="output__item">
          <div
            v-for="number in item.count"
            :key="number"
            :style="{ background: item.color }"
            class="output__box"
            @click="removeBox(item)"
          ></div>
        </div>
      </div>
    </div>
    <div class="output__items">
      <div v-if="isRandom" class="output__item">
        <div
          class="output__box"
          v-for="(box, index) in randomItems"
          :key="index"
          :style="{ background: box.color }"
          @click="removeBoxFromRandom(box.color)"
        ></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.output {
  margin-top: 1rem;
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  &__items {
    margin-top: 0.8rem;
  }
  &__upper {
    gap: 1em;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
  }
  &__button {
    border: 1px solid black;
    padding: 0.2em 1em;
    border-radius: 0.3em;
    transition: 0.2s;
    &:hover {
      background: #e3e3e3;
    }
    cursor: pointer;
  }
  &__item {
    display: flex;
    flex-wrap: wrap;
    gap: 0.2rem;
    margin-top: 0.2rem;
  }
  &__box {
    cursor: pointer;
    width: 1rem;
    height: 1rem;
  }
}
</style>
