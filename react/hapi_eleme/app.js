const Hapi = require('hapi');
const server = new Hapi.Server();
const routesHelloHapi = require('./routes/hello-hapi');
require('env2')('./.env');
const config = require('./config');
const pluginHapiSwagger = require('./plugins/hapi-swagger');
const routesShop = require('./routes/shop');

server.connection({
  port: config.port,
  host: config.host
});

const init = async () => {
  await server.register([
    ...pluginHapiSwagger
  ]);
  server.route([
    ...routesHelloHapi,
    ...routesShop
  ]);
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
}

init();