<template>
  <div id="app">
    <CreateToDo class="mb-5" />
    <ToDoList :to-do-list="items" />
  </div>
</template>

<script>
import axios from 'axios'
import CreateToDo from './components/CreateToDo'
import ToDoList from './components/ToDoList'

export default {
  name: 'App',
  components: {
    CreateToDo,
    ToDoList
  },
  data () {
    return {
      items: []
    }
  },
  async mounted () {
    const response = await axios.get('api/todo')
    this.items = response.data
    console.log(this.items)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.pointer {
  cursor: pointer;
}
</style>
