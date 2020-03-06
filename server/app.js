const express = require('express')
const app = express()

// Apply json body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ about: 'This is kinda journal about stuff I learned' })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, error => {
  if (error) {
    console.log(`Error while running: ${error}`)
  }
  console.log(`Server running on port: ${PORT}`)
})
