---
date: "06.03.2020"
title: "Markdown to HTML"
path: "/node/markdown-to-html"
---

## Express: send content of markdown file to client and parse it to html

example project structure:

```
server
+-src
--+-markdown
------first.md
--app.js
--index.html
```

content of first.md:
```
---    <!-- This's a front matter -->
date: "06.03.2020"
title: "First post"
---

## This is my heading

And here is some content

Want to share this function
`const function = () => 'MyString'`

```
install package `npm i front-matter` to get front matter and the remaining content in easier format.

```js
// app.js
const fs = require('fs')
const fm = require('front-matter')

// Get markdown data
app.get('/api/first', (req, res) => {
  const path = `${__dirname}/src/markdown/first.md`

  fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw err

    const content = fm(data)
    return res.json(content)
  })
})

// Display index page
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname })
})
```

This is the response when hitting `/api/first`, front matter data is placed into `attributes` and content into `body`.

```
{
  attributes: {date: "06.03.2020", title: "First post"}
  body: "## This is my heading↵↵And here is some content..."
  bodyBegin: 6
  frontmatter: "date: "06.03.2020"↵title: "First post""
}
```
---
On the client-side

Use `showdown` package (cdn) that converts `.md` to `html`
```html
<!-- index.html -->
<!-- (...) -->
<body>
  <h1>Home page for testing</h1>
  <div id="main"></div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/showdown/1.9.1/showdown.min.js"></script>
  <script>
  // instantiate showdown converter
  const converter = new showdown.Converter()

  fetch('http://localhost:3000/api/first')
    .then(response => response.json())
    .then(data => {
      // Use front matter data, for example set title of the page
      document.title = data.attributes.title
      // Convert markdown to html and insert into div#main
      const html = converter.makeHtml(data.body)
      document.querySelector('#main').innerHTML = html
    })
  </script>
</body>
```