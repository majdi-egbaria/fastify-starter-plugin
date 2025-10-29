import fastify, { FastifyReply, FastifyRequest } from 'fastify'
// import { expectAssignable, expectError, expectType } from 'tsd'
import fastifyStarter, { FastifyStarterOptions } from '..'

const app = fastify()

const options: FastifyStarterOptions = {
  initialValue: 0
}

app.register(fastifyStarter, options)

app.get('/', function (request: FastifyRequest, reply: FastifyReply) {
  const counter = app.counter()
  return counter
})

app.post('/increment', function (request: FastifyRequest, reply: FastifyReply) {
  app.increment()
  reply.status(204).send({})
})

app.post('/decrement', function (request: FastifyRequest, reply: FastifyReply) {
  app.decrement()
  reply.status(204).send({})
})
