<template>
  <div id="app"></div>
</template>

<script>
import Header from "./components/ToDoList/Header";
import Input from "./components/ToDoList/Input";
import ToDos from "./components/ToDoList/ToDos";
import Footer from "./components/ToDoList/Footer";

export default {
  name: "app",
  components: {
    Header,
    Input,
    ToDos,
    Footer
  }
};
</script>

