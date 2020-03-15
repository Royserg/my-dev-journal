const routes = require('express').Router()

const api = require('./api')

// API routes
routes.use('/api', api)

// Default fallback route
routes.get('*', (req, res) => {
  res.status(404).json({ message: 'Page not found' })
})

module.exports = routes
