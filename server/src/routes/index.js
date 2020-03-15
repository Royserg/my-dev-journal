const routes = require('express').Router()
const api = require('./api')

// API routes
routes.use('/api', api)


module.exports = routes
