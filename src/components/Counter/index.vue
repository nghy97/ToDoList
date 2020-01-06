<template>
  <div id="counter">
    <h1>Counter</h1>
    sync: {{ getCount }}
    <button @click="syncIncrement(1)">
      add
    </button>
    <br>
    <Child
      :get-count="getCount"
      :async-increment="asyncIncrement"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'Counter',
  components: { Child: () => import('./Child') },
  computed: {
    // this.$store.getters.getCount;
    ...mapGetters(['getCount']),
  },
  methods: {
    // this.$store.commit("addCount", 10);
    ...mapMutations(['syncIncrement']),
    // this.$store.dispatch('asyncIncrement');
    ...mapActions(['asyncIncrement']),
  },
};
</script>
