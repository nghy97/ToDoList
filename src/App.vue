<template>
  <div id="app">
    <ToDoList />
    <Counter />
  </div>
</template>

<script>
import ToDoList from "./components/ToDoList";
import Counter from "./components/Counter";

// eslint-disable-next-line
console.log(1);

export default {
  name: "app",
  components: {
    ToDoList,
    Counter
  }
};
</script>

