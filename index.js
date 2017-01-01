'use strict'

const express = require('express')
const app = express()
const moment = require('moment')
const favicon = require('serve-favicon')
// const path = require('path')
// const bodyParser = require('body-parser')
app.set('port', (process.env.PORT || 3000))

app.use(favicon(__dirname + '/public/favicon.ico'))

// body-parser
// Express route-specific https://github.com/expressjs/body-parser#express-route-specific

// create application/json parser
// var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))

// Don't need to use a root path app.get('/', function())
// Below will serve all files that are in the public directory
app.use(express.static(__dirname + '/public'))

// Don't need to use a templating engine for this project
// https://expressjs.com/en/guide/using-template-engines.html
// app.set('views', path.join(__dirname, '/views'))
// app.set('view engine', 'ejs')

// app.get('/', function (request, response) {
//   response.render('pages/index')
// })

// app.get('/', (request, response) => {
//   response.render('home', {
//     name: 'John'
//   })
// })

// // GET
// app.get('/users', function (req, res, next) {

// })

// app.get('/cool', function (request, response) {
//   response.send(cool())
// })

// // POST /login gets urlencoded bodies
// app.post('/login', urlencodedParser, function (req, res) {
//   if (!req.body) return res.sendStatus(400)
//   res.send('welcome, ' + req.body.username)
// })

// // POST /api/users gets JSON bodies
// app.post('/api/users', jsonParser, function (req, res) {
//   if (!req.body) return res.sendStatus(400)
//   // create user in req.body
// })

// app.post('/users', function (req, res, next) {
//   // var user = req.body
//   var user = req.query
// })


// Listen
app.listen(app.get('port'), function (err) {
  if (err) throw err
  console.log('Node app is running on port', app.get('port'))
})
