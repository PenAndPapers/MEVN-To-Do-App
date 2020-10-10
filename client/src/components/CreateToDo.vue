<template>
  <div class="">
    <h2 class="title is-3">Add To Do</h2>
    <div class="field">
      <label class="label">Title</label>
      <div class="control">
        <input class="input" type="text" placeholder="Title" v-model="title">
      </div>
    </div>
    <div class="field">
      <label class="label">Description</label>
      <div class="control">
        <textarea class="input" type="text" placeholder="Description" v-model="description" />
      </div>
    </div>
    <div class="field">
      <div class="control">
        <button class="button is-link" @click="addToDo" :disabled="!title || !description">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CreateToDo',
  data () {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    resetForm () {
      this.title = this.description = ''
    },
    async addToDo () {
      const response = await axios.post('api/todo', {
        title: this.title,
        description: this.description
      })
      if (response.status === 200 && response.statusText === 'OK') this.resetForm()
    }
  }
}
</script>
