<template>
  <div id="app">
    <ToDoList/>
  </div>
</template>

<script>
import ToDoList from "./components/ToDoList";

export default {
  name: "app",
  components: {
    ToDoList
  }
};
</script>

