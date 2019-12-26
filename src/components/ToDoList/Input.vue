<template>
  <div>
    <input type="text" v-model="toDo">
    <button @click="addToDo">추가</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toDo: ""
    };
  },
  methods: {
    addToDo() {
      alert(this.toDo);
      this.resetToDo();
    },
    resetToDo() {
      this.toDo = "";
    }
  }
};
</script>

<style>
</style>