const { test } = require('node:test')
const Fastify = require('fastify')
const { fastifyStarter } = require('../')

test('Register plugin with default options', async (t) => {
  const app = Fastify()

  app.register(fastifyStarter)

  await app.ready()

  app.increment()
  app.increment()
  app.decrement()

  const counter = app.counter()

  t.assert.equal(counter, 1)
})

test('Register plugin with custom options', async (t) => {
  const app = Fastify()

  app.register(fastifyStarter, {
    initialValue: 7
  })

  await app.ready()

  app.increment()

  const counter = app.counter()

  t.assert.equal(counter, 8)
})
