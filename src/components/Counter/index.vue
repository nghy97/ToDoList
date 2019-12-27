<template>
  <div id="counter">
    <h1>Counter</h1>
    Parent: {{ $store.state.count }}
    <br>
    <button v-on:click="addCount">+</button>
    <button v-on:click="subCount">-</button>
    <!-- Child 컴포넌트를 등록하고 counter 데이터 속성을 props로 전달한다. -->
    <Child/>
  </div>
</template>

<script>
import Child from "./Child.vue";

export default {
  name: "counter",
  components: { Child },
  methods: {
    addCount() {
      this.$store.state.count += 1;
    },
    subCount() {
      this.$store.state.count -= 1;
    }
  }
};
</script>

