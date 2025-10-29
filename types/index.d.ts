/// <reference types='node' />

import { FastifyPluginAsync } from 'fastify'

declare module 'fastify' {
  interface FastifyInstance {
    counter(): number
    increment(): number
    decrement(): number
  }

  interface FastifyRequest {}

  interface FastifyReply {}
}

type FastifyStarter = FastifyPluginAsync<fastifyStarter.FastifyStarterOptions> & {}

declare namespace fastifyStarter {
  export type FastifyStarterOptions = {
    initialValue: number
  }

  export const fastifyStarter: FastifyStarter
  export { fastifyStarter as default }
}

declare function fastifyStarter (...params: Parameters<FastifyStarter>): ReturnType<FastifyStarter>
export = fastifyStarter
