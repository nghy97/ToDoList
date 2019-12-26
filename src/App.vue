<template>
  <div id="app">
    <Header/>
    <!-- v-bind:addToDo === :addToDo -->
    <Input :addToDo="addToDo"/>
    <List :toDos="toDos" :removeToDo="removeToDo" :completeToDo="completeToDo"/>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/ToDoList/Header";
import Input from "./components/ToDoList/Input";
import List from "./components/ToDoList/List";
import Footer from "./components/ToDoList/Footer";

export default {
  name: "app",
  components: {
    Header,
    Input,
    List,
    Footer
  },
  data() {
    return {
      toDos: [{ toDo: "sample", key: new Date().getTime(), completed: false }]
    };
  },
  methods: {
    addToDo(toDo) {
      if (toDo) {
        this.toDos.push({
          toDo,
          key: new Date().getTime(),
          completed: false
        });
      }
    },
    removeToDo(key) {
      this.toDos = this.toDos.filter(toDo => toDo.key !== key);
    },
    completeToDo(key) {
      this.toDos = this.toDos.map(toDo => {
        if (toDo.key === key) {
          return { ...toDo, completed: !toDo.completed };
        }

        return toDo;
      });
    }
  }
};
</script>

