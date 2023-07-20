<script setup>
import { ref, computed } from 'vue'
import { useListsStore } from '@/stores/lists'

const listsStore = useListsStore()

const props = defineProps({ id: Number })

const show = ref(true)
const list = listsStore.lists.find((list) => list.id === props.id)

list.checked = computed({
  get() {
    return list.items.reduce((res, cur) => res && cur.checked, true)
  },
  set(newVal) {
    list.items.forEach((item) => (item.checked = newVal))
  }
})

const dot = computed(() => {
  let checkedCnt = 0
  list.items.forEach((item) => (checkedCnt += Number(item.checked)))
  return checkedCnt < list.items.length && checkedCnt > 0
})
</script>
<template>
  <li class="list">
    <div class="list__upper">
      <label>
        <input type="checkbox" v-model="show" class="checkbox-input visually-hidden" />
        <img src="@/assets/img/open.svg" v-if="show" class="list__img" />
        <img src="@/assets/img/closed.svg" v-else class="list__img" />
      </label>
      <label>
        <input type="checkbox" v-model="list.checked" class="visually-hidden checkbox-input" />
        <span class="checkbox" :class="{ 'checkbox--dot': dot }"></span>
        <span>{{ list.name }}</span>
      </label>
    </div>
    <ul v-show="show" class="list__ul">
      <li v-for="item in list.items" :key="item.id" class="item">
        <label>
          <input type="checkbox" v-model="item.checked" class="visually-hidden checkbox-input" />
          <span class="checkbox"></span>
          <span>{{ item.name }}</span>
        </label>
        <input type="number" class="item__number-input" v-model="item.count" />
        <input type="color" v-model="item.color" />
      </li>
    </ul>
  </li>
</template>
<style lang="scss" scoped>
.list {
  margin-top: 1rem;
  &__upper {
    display: flex;
    align-items: center;
  }
  &__img {
    width: 2.5rem;
    height: 2.5rem;
  }
  &__ul {
    padding-left: 4rem;
  }
}

.item {
  display: flex;
  gap: 0.3rem;
  align-items: center;
  &__number-input {
    width: 15%;
  }
}

.checkbox-input:checked + .checkbox {
  background-image: url('@/assets/img/check.svg');
  background-size: cover;
}
.checkbox-input:focus + .checkbox {
  box-shadow: 0 0 0 0.15em gray;
}
.checkbox {
  position: absolute;
  width: 1.2em;
  height: 1.2em;
  border: 0.1em solid black;
  border-radius: 0.3em;
  transition: box-shadow 0.1s;
  & + span {
    padding-left: 1.5em;
  }
  &--dot {
    background-image: url('@/assets/img/dot.svg');
    background-size: cover;
  }
}
</style>
