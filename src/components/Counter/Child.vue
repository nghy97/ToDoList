<template>
  <div>
    async: {{ getCount }}
    <button @click="asyncIncrement(1)">add</button>
  </div>
</template>

<script>
export default {
  props: ['getCount', 'asyncIncrement'],
};
</script>
