const express = require('express')
const server = express()
const conn = require('./db/conn')
const Crud = require('./models/Crud')
const Router = require('./routes/CrudRoutes')



server.set('view engine', 'ejs')

server.use(
  express.urlencoded({
    extended: true,
  }),
)

server.use(express.json())

server.use(express.static('public'))

server.use(Router)

conn
  .sync()
  .then(() => {
    server.listen(3300)
  })
  .catch((err) => console.log(err))