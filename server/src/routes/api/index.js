const api = require('express').Router()
const { getPost, getPosts } = require(`${__basedir}/repositories/posts`)

api.get('/', (req, res) => {
  res.json({ about: 'This is a journal about stuff I learned' })
})

api.get('/:category', async (req, res) => {
  const { category } = req.params

  try {
    const files = await getPosts(category)
    res.json(files)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
})

api.get('/:category/:filename', async (req, res) => {
  const { category, filename } = req.params

  try {
    const file = await getPost(category, filename + '.md')
    res.json(file)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
})

module.exports = api
