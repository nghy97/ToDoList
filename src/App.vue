<template>
  <div id="app">
    <ToDoList/>
    <Counter/>
  </div>
</template>

<script>
import ToDoList from "./components/ToDoList";
import Counter from "./components/Counter";

export default {
  name: "app",
  components: {
    ToDoList,
    Counter
  }
};
</script>

