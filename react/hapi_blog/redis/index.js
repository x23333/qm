const { promisify } = require('util');

module.exports = (request) => {
  const { client } = request.server.plugin['hapi-redis'];
  const getAsync = promisify(client.GET).bind(client);
  const setAsunc = promisify(client.SET).bind(client);
  return {
    client,
    getAsync,
    setAsunc
  }
}