---
date: "11.03.2020"
title: "Express skeleton"
path: "/snippets/express-skeleton"
---


```javascript
const express = require('express')
const app = express()

// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
// Parse application/json
app.use(express.json())
// Server static files from public dir
app.use(express.static('public'))

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Hello' })
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
      console.log(`Error running the server, ${error}`);
  }
  console.log(`Server is running on port: ${PORT}`)
})
```