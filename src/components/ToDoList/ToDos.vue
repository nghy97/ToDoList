<template>
  <ul>
    <li v-for="toDo in toDos" :key="toDo.key">
      <input type="checkbox" @change="completeToDo(toDo.key);">
      {{ toDo.toDo }}
      <button v-on:click="removeToDo(toDo.key)">삭제</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["toDos", "removeToDo", "completeToDo"]
};
</script>

<style>
</style>