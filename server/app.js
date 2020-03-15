const express = require('express')
const app = express()
const cors = require('cors')

// Set /src as a base directory
global.__basedir = `${__dirname}/src`

const routes = require('./src/routes')

// Apply json body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// Enable cors
app.use(cors())

// Routes
app.use(routes)

const PORT = process.env.PORT || 3000
app.listen(PORT, error => {
  if (error) {
    console.log(`Error while running: ${error}`)
  }
  console.log(`Server running on port: ${PORT}`)
})
