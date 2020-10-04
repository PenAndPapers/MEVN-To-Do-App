const {Schema, model} = require('mongoose')

const ToDoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now()
  }
})

const TodoList = model('toDoList', ToDoSchema)

module.exports = TodoList