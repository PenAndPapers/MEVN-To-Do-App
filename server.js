const express = require('express')
const app =  express()
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const dotenv = require('dotenv')
dotenv.config()

const {mongoUri, PORT} = require('./config')

const toDoRoutes = require('./routes/api/ToDo')

app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())

mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log('MongoDB database is Connected...'))

app.use('/api/todo', toDoRoutes)

app.get('/', (req, res) => res.send('<h2 style="text-align:center; font-size: 32; font-family: sans-serif;">To Do App</h2>'))

app.listen(PORT, () => console.log(`app is listening at http://localhost:${PORT}`))