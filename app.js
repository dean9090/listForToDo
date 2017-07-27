const express = require('express')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

const todos = []
const completed = []

app.get('/', (request, response) => {
  response.render('index', { todos: todos })
})

app.post('/', (request, response) => {
  todos.push(request.body.todo)
  response.redirect('/')
})

app.listen(3000, (response, request) => {
  console.log('Port is being listened')
})
