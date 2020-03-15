const fs = require('fs')
const fm = require('front-matter')

const MD_ROOT = `${__basedir}/markdown/`

const getPosts = category => {
  return new Promise((resolve, reject) => {
    const path = MD_ROOT + category

    fs.readdir(path, async (error, files) => {
      if (error) {
        reject(error)
      }

      // For each file in the directory, get its content
      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        try {
          files[i] = await getPost(category, file)
        } catch (error) {
          reject(error)
        }
      }
      resolve(files.map(file => file.attributes))
    })
  })
}

const getPost = (category, filename) => {
  return new Promise((resolve, reject) => {
    const path = `${MD_ROOT}${category}/${filename}`
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(error)
      }
      const content = fm(data)
      resolve(content)
    })
  })
}

// app.get('/create', (req, res) => {
//   const content =
//     "## huehue, that's the heading\nmaybe a paragrapht\n\n### Something Else?\n\n ```javascript\nconst function = () => {\nreturn 'MyString'\n}\n```"

//   fs.appendFile(`${markdownRoot}/addedFile.md`, content, err => {
//     if (err) throw err
//     return res.json({ message: 'file created' })
//   })
// })

module.exports = {
  getPosts,
  getPost
}
