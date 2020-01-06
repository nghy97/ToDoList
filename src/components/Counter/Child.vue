<template>
  <div>
    async: {{ getCount }}
    <button @click="asyncIncrement()">
      add
    </button>
  </div>
</template>

<script>
export default {
  props: {
    getCount: {
      type: Function,
      default: () => 0,
    },
    asyncIncrement: {
      type: Function,
      default: () => false,
    },
  },
};
</script>
