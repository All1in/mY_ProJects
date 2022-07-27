<template>
  <div>
    <h2>My ToDo application</h2>
    <hr />

    <router-view />
  </div>
</template>

<script>
import ToDoList from "@/components/ToDoList";
import AddToDo from "@/components/AddToDo";
export default {
  name: "App",
  data() {
    return {
      todos: [
        { id: 1, title: "Buy bread", completed: false },
        { id: 2, title: "Buy milk", completed: false },
        { id: 3, title: "Buy nuts", completed: false },
      ],
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
      .then((response) => response.json())
      .then((json) => {
        this.todos = json;
      });
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
    },
    AddToDo(todo) {
      this.todos.push(todo);
    },
  },
  components: {
    ToDoList,
    AddToDo,
  },
};
</script>
