<template>
  <header>
    <h1 v-if="isVisible">To Do List</h1>
  </header>
</template>

<script>
export default {
  data: () => ({
    isVisible: true
  }),
}
</script>