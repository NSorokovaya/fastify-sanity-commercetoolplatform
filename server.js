const fastify = require('fastify')({ logger: true });

const productsRoutes = require('./api');


fastify.register(productsRoutes);



const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log('Server is running on http://localhost:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
