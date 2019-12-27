<template>
  <div id="to-do-list">
    <Header/>
    <!-- v-bind:addToDo === :addToDo -->
    <Input :addToDo="addToDo"/>
    <List :toDos="toDos" :removeToDo="removeToDo" :completeToDo="completeToDo"/>
    <Footer/>
  </div>
</template>

<script>
import Header from "./Header";
import Input from "./Input";
import List from "./List";
import Footer from "./Footer";

export default {
  name: "to-do-list",
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

