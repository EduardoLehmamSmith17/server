import Fastify from 'fastify';
import cors from '@fastify/cors';
import jwt from '@fastify/jwt';
import { poolRouters } from './routes/pool';
import { authRouters } from './routes/auth';
import { gameRouters } from './routes/game';
import { guessRouters } from './routes/guess';
import { userRouters } from './routes/user';

async function bootstrap() {
    const fastify = Fastify({
        logger: true,
    })

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

    await fastify.listen({ port: 3333, /*shost: '0.0.0.0'*/ })

}

bootstrap()