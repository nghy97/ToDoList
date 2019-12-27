<template>
  <div id="counter"></div>
</template>

<script>
export default {
  name: "counter",
  components: {},
  data() {
    return { counter: 0 };
  },
  methods: {
    increment() {
      this.counter += 1;
    }
  }
};
</script>

