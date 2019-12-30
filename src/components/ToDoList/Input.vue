<template>
  <div class="input">
    <input @keyup.enter="resetToDo()" type="text" v-model="toDo" />
    <button @click="resetToDo()">추가</button>
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
      this.addToDo(this.toDo);
      this.toDo = "";
    }
  }
};
</script>

<style>
</style>