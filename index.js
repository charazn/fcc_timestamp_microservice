'use strict'

const express = require('express')
const app = express()
const moment = require('moment')
const favicon = require('serve-favicon')
app.set('port', (process.env.PORT || 3000))

app.use(favicon(__dirname + '/public/favicon.ico'))
app.use(express.static(__dirname + '/public'))

app.get('/:datequery', function (req, res) {
  var querydate = moment(req.params.datequery)
  if (querydate.isValid()) {
    res.json({
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

app.listen(app.get('port'), function (err) {
  if (err) throw err
  console.log('Node app is running on port', app.get('port'))
})
