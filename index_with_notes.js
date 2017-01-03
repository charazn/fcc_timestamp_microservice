'use strict'

const express = require('express')
const app = express()
const moment = require('moment')
// const moment = require('moment-timezone');
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

app.get('/:datequery', function (req, res) {
  var querydate = moment(req.params.datequery)
  if (querydate.isValid()) {
    res.json({
      // unix: querydate.tz('Asia/Hong_Kong').format('X'),
      // natural: querydate.tz('Asia/Hong_Kong').format('LLLL')
      unix: querydate.format('X'),
      natural: querydate.format('YYYY MMMM D dddd')
    })
  } else {
    res.json({
      unix: null,
      natural: null
    })
  }
})

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
//
// })

// app.get('/cool', function (request, response) {
//   response.send(cool())
// })

// Listen
app.listen(app.get('port'), function (err) {
  if (err) throw err
  console.log('Node app is running on port', app.get('port'))
})
