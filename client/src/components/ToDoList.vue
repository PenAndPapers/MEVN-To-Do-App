<template>
  <div class="to-do-list">
    <UpdateToDo
      class="mb-5"
      :to-do="selectedToDo"
      v-if="selectedToDo._id"
      @hideUpdateForm="hideUpdateForm"
    />
    <h2 class="title is-3">To Do List</h2>
    <div
      class="to-do-item mb-4 columns"
      v-for="(todo, index) in toDoList"
      :key="index"
    >
      <span class="column">{{todo.title}}</span>
      <i class="fas fa-edit has-text-link cursor" @click="updateToDo(todo)"></i>
      <DeleteToDo :to-do-id="todo._id" />
    </div>
  </div>
</template>

<script>
import UpdateToDo from './UpdateToDo'
import DeleteToDo from './DeleteToDo'
export default {
  name: 'ToDoList',
  props: {
    toDoList: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  components: {
    UpdateToDo,
    DeleteToDo
  },
  data () {
    return {
      selectedToDo: {}
    }
  },
  methods: {
    hideUpdateForm () {
      this.selectedToDo = {}
    },
    updateToDo (toDo) {
      this.selectedToDo = toDo
    }
  }
}
</script>
