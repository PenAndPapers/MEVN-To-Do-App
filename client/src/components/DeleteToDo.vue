<template>
  <i class="fas fa-trash-alt has-text-danger cursor" @click="deleteToDo"></i>
</template>

<script>
import axios from 'axios'
export default {
  name: 'DeleteToDo',
  props: {
    toDoId: {
      type: String,
      default: '',
      required: true
    }
  },
  methods: {
    async deleteToDo () {
      await axios.delete('api/todo/' + this.toDoId)
    }
  }
}
</script>
