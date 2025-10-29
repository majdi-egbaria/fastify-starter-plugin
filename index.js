const fp = require('fastify-plugin')

function fastifyStarter (fastify, options, next) {
  fastify.decorate('starterData', {
    counter: options.initialValue ? Number(options.initialValue) : 0
  })

  fastify.decorate('counter', function () {
    return fastify.starterData.counter
  })

  fastify.decorate('increment', function () {
    fastify.starterData.counter = fastify.starterData.counter + 1
  })

  fastify.decorate('decrement', function () {
    fastify.starterData.counter = Math.max(fastify.starterData.counter - 1, 0)
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
