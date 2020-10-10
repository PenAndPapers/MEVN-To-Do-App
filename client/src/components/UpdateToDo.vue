<template>
  <div class="">
    <h2 class="title is-3">Edit To Do <i class="fas fa-trash-alt has-text-danger cursor" @click="hideUpdateForm"></i></h2>
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
        <button class="button is-link" @click="updateToDo">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'UpdateToDo',
  props: {
    toDo: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  watch: {
    toDo: {
      handler (nVal, oVal) {
        this.title = nVal.title
        this.description = nVal.description
      },
      deep: true,
      immediate: true
    }
  },
  data () {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    hideUpdateForm () {
      this.$emit('hideUpdateForm')
    },
    async updateToDo () {
      const response = await axios.put('/api/todo/' + this.toDo._id, {
        title: this.title,
        description: this.description
      })

      if (response.status === 200 && response.statusText === 'OK') this.hideUpdateForm()
    }
  }
}
</script>
