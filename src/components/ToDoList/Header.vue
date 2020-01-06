<template>
  <header>
    <h1 v-if="isVisible">
      To Do List
    </h1>
    <h1 v-else>
      안 보이지?
    </h1>
  </header>
</template>

<script>
export default {
  data: () => ({
    isVisible: true
  })
};
</script>