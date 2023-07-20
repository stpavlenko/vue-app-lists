<script setup>
import ListsInputs from '@/components/ListsInputs.vue'
import ListsOutputs from '@/components/ListsOutputs.vue'
</script>

<template>
  <main>
    <ListsInputs />
    <ListsOutputs />
  </main>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
html {
  font-family: 'Roboto';
}
* {
  font-family: inherit;
  box-sizing: border-box;
}
.visually-hidden {
  position: absolute !important;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0 !important;
  border: 0 !important;
  height: 1px !important;
  width: 1px !important;
  overflow: hidden;
}
ul {
  list-style: none;
}
main {
  display: flex;
  justify-content: space-evenly;
  & > * {
    padding-inline: 0.5rem;
    flex: 1 1 0px;
  }
}
#app {
  max-width: 1000px;
  margin-inline: auto;
}
</style>
