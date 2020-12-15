const express = require('express')
const app = express()

const routes = require('./routes')
app.use('/', routes)

app.listen(1234, () => {
  console.log('running on http://localhost:1234')
})
