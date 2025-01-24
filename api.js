
const client = require('./test/sanity.cli');


async function productsRoutes(fastify, options) {
  fastify.get('/products', async (request, reply) => {
      return { message: 'This is the products route!' };
  });

    fastify.get('/products', async (request, reply) => {
        try {
            const data = await client.fetch('*[_type == "product"]');
            reply.send(data);
        } catch (err) {
            fastify.log.error(err);
            reply.status(500).send({ error: 'Failed to fetch products from Sanity' });
        }
    });


}

module.exports = productsRoutes;