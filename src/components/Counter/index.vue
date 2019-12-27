<template>
  <div id="counter">
    <h1>Counter</h1>
    Parent: {{ getDoubleCount }}
    <br>
    <Child/>
  </div>
</template>

<script>
import Child from "./Child.vue";

import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "counter",
  components: { Child },
  computed: {
    // this.$store.getters.getDoubleCount;
    ...mapGetters(["getDoubleCount"])
  },
  methods: {
    // this.$store.commit("addCount", 10);
    ...mapMutations(["addCount"]),
    ...mapActions(["asyncIncrement"])
  }
};
</script>

