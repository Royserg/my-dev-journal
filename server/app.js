const express = require('express')
const app = express()

const fs = require('fs')
const showdown = require('showdown')
const converter = new showdown.Converter()

const fm = require('front-matter')
const markdownRoot = `${__dirname}/src/markdown/`

// Apply json body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routes
app.get('/', (req, res) => {
  const path = `${__dirname}/src/markdown/first.md`
  // res.sendFile('index.html', { root: __dirname })
  // res.sendFile('src/markdown/first.md', { root: __dirname })
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw err

    const content = fm(data)
    const html = converter.makeHtml(content.body)
    // return res.json({
    //   title: content.attributes.title,
    //   date: content.attributes.date,
    //   content: html
    // })
    return res.send(html)
  })
  // res.send()
})

app.get('/create', (req, res) => {
  const content =
    "## huehue, that's the heading\nmaybe a paragrapht\n\n### Something Else?\n\n ```javascript\nconst function = () => {\nreturn 'MyString'\n}\n```"

  fs.appendFile(`${markdownRoot}/addedFile.md`, content, err => {
    if (err) throw err
    return res.json({ message: 'file created' })
  })
})

app.get('/api', (re, res) => {
  res.json({ about: 'This is kinda journal about stuff I learned' })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, error => {
  if (error) {
    console.log(`Error while running: ${error}`)
  }
  console.log(`Server running on port: ${PORT}`)
})
