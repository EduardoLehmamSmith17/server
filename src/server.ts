import Fastify from 'fastify';

import cors from '@fastify/cors';
import jwt from '@fastify/jwt';

import { guessRouters } from './routes/guess';
import { poolRouters } from './routes/pool';
import { userRouters } from './routes/user';
import { authRouters } from './routes/auth';
import { gameRouters } from './routes/game';

const start = async () => {
    const fastify = Fastify({
        logger: true,
    })

    try {
        await fastify.register(cors, {
            origin: true,
        })
    
        await fastify.register(jwt, {
            secret: "nlwcopa",
        })
    
        await fastify.register(poolRouters)
        await fastify.register(authRouters)
        await fastify.register(gameRouters)
        await fastify.register(userRouters)
        await fastify.register(guessRouters)
    
        await fastify.listen({ port: 3333, host: '0.0.0.0' })
    } catch(err) {
        fastify.log.error(err)

        process.exit(1)
    }
}

start()