const fp = require('fastify-plugin')

function fastifyStarter (fastify, options, next) {
  let counter = 0

  fastify.decorate('counter', function () {
    return counter
  })

  fastify.decorate('increment', function () {
    counter = counter + 1
  })

  fastify.decorate('decrement', function () {
    counter = Math.max(counter - 1, 0)
  })

  next()
}

const plugin = fp(fastifyStarter, {
  fastify: '5.x',
  name: 'fastify-starter'
})

module.exports = plugin
module.exports.default = plugin
module.exports.fastifyStarter = plugin
