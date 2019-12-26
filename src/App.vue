<template>
  <div id="app">
    <Header/>
    <Input :addToDo="addToDo"/>
    <ToDos/>
    <Footer/>
  </div>
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
  },
  data() {
    return {
      toDos: []
    };
  },
  methods: {
    addToDo(toDo) {
      if (toDo) {
        this.toDos.push({
          toDo,
          key: new Date().getTime()
        });
      }
    }
  }
};
</script>

