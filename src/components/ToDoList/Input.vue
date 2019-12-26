<template>
  <div>
    <input type="text" v-model="toDo">
    <button @click="addToDo(toDo); resetToDo();">추가</button>
  </div>
</template>

<script>
export default {
  props: ["addToDo"],
  data() {
    return {
      toDo: ""
    };
  },
  methods: {
    resetToDo() {
      this.toDo = "";
    }
  }
};
</script>

<style>
</style>