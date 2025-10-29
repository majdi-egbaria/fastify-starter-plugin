const { test } = require('node:test')
const Fastify = require('fastify')
const { fastifyStarter } = require('../')

test('Methods', async (t) => {
  const app = Fastify()

  app.register(fastifyStarter)

  await app.ready()

  app.increment()

  app.increment()

  app.decrement()

  const counter = app.counter()

  t.assert.equal(counter, 1)
})
