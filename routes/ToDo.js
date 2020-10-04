const {Router} = require('express')
const ToDoList = require('../../models/ToDoList')
const TodoList = require('../models/ToDoList')

const router = Router()

router.get('/', async (req, res) => {
  try {
    const toDoList = await TodoList.find()
    if (!toDoList) throw new Error('No To Do Items')
    const sorted = toDoList.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    })
    res.status(200).json(sorted)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
  
})

router.post('/', async (req, res) => {
  const newToDoItem = new ToDoList(req.body)

  try {
    const toDoList = await newToDoItem.save()
    if (!newToDoItem) throw new Error('Something went wrong while saving new To Do item.')
    res.status(200).json(toDoList)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
})

router.put("/:id", async (req, res) => {
  const {id} = req.params

  try {
    const response = await ToDoList.findByIdAndUpdate(id, req,body)
    if (!response) throw Error('Something went wrong while updating item')
    const updated = { ...response._doc, ...req.body }
    res.status(200).json(updated)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
})

router.delete("/:id", async (req, res) => {
  const {id} = req.params

  try {
    const removed = await ToDoList.findByIdAndDelete(id, req,body)
    if (!removed) throw Error('Something went wrong while deleting item')
    res.status(200).json(removed)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
})

module.exports = router