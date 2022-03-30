'use strict'
const Api = require('claudia-api-builder')
const api = new Api()

const getPizzas = require('./handlers/get-pizzas')
const createOrder = require('./handlers/create-order')
const updateOrder = require('./handlers/update-order')
const deleteOrder = require('./handlers/delete-order')

// Home
api.get('/', () => 'Welcome to Pizza API')

// Pizzas
api.get('/pizzas', () => { return getPizzas() })
api.get('/pizzas/{id}', (request) => {
  return getPizzas(request.pathParams.id)
}, {
  error: 404
})

// Orders
api.post('/orders', (request) => {
  return createOrder(request.body)
}, {
  success: 201,
  error: 400
})
api.put('/orders/{id}', (request) => {
  return updateOrder(request.pathParams.id, request.body)
}, {
  error: 400
})
api.delete('/orders/{id}', (request) => {
  return deleteOrder(request.pathParams.id)
}, {
  error: 400
})

module.exports = api