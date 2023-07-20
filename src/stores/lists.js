import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useListsStore = defineStore('lists', () => {
  const lists = ref([
    {
      id: 1,
      name: 'list1',
      checked: true,
      items: [
        {
          id: 1,
          checked: true,
          name: 'item1',
          count: 5,
          color: '#FF0000'
        },
        {
          id: 2,
          checked: true,
          name: 'item2',
          count: 5,
          color: '#FFFF00'
        },
        {
          id: 3,
          checked: true,
          name: 'item3',
          count: 5,
          color: '#00FF00'
        }
      ]
    },
    {
      id: 2,
      name: 'list2',
      checked: true,
      items: [
        {
          id: 1,
          checked: true,
          name: 'item1',
          count: 7,
          color: '#FF0000'
        },
        {
          id: 2,
          checked: false,
          name: 'item2',
          count: 10,
          color: '#FFFF00'
        },
        {
          id: 3,
          checked: false,
          name: 'item3',
          count: 2,
          color: '#00FF00'
        }
      ]
    },
    {
      id: 3,
      name: 'list3',
      checked: true,
      items: [
        {
          id: 1,
          checked: true,
          name: 'item1',
          count: 11,
          color: '#FF0000'
        },
        {
          id: 2,
          checked: true,
          name: 'item2',
          count: 3,
          color: '#FFFF00'
        },
        {
          id: 3,
          checked: true,
          name: 'item3',
          count: 50,
          color: '#00FF00'
        }
      ]
    },
    {
      id: 4,
      name: 'list4',
      checked: false,
      items: [
        {
          id: 1,
          checked: false,
          name: 'item1',
          count: 24,
          color: '#FF0000'
        },
        {
          id: 2,
          checked: false,
          name: 'item2',
          count: 13,
          color: '#FFFF00'
        },
        {
          id: 3,
          checked: false,
          name: 'item3',
          count: 6,
          color: '#00FF00'
        }
      ]
    },
    {
      id: 5,
      name: 'list5',
      checked: true,
      items: [
        {
          id: 1,
          checked: true,
          name: 'item1',
          count: 16,
          color: '#FF0000'
        },
        {
          id: 2,
          checked: true,
          name: 'item2',
          count: 4,
          color: '#FFFF00'
        },
        {
          id: 3,
          checked: false,
          name: 'item3',
          count: 8,
          color: '#00FF00'
        }
      ]
    }
  ])

  return { lists }
})
