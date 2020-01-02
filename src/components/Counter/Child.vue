<template>
  <div>
    async: {{ getCount }}
    <button @click="asyncIncrement()">add</button>
  </div>
</template>

<script>
export default {
  props: ['getCount', 'asyncIncrement'],
};
</script>
