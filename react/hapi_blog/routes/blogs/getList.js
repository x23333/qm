const redis = require('../../redis');

module.exports = (GROUP_NAME, options) => ({
  method: 'GET',
  path: `/${GROUP_NAME}`,
  handler: async (request, reply) => {
    const { limit, page } = request.query;
    const offset = (page -1) * limit;
    // reply(limit, page, offset);

    const {client, getAsync, setAsync} = redis(request);
    // mysql 有IO 压力， 用户一大不做缓存是不行的 
    // redis 或早期的memorycache 来做内存数据库， 读取速度快没有IO压力
    const redisResName = `postlimit${limit}offset${offset}list`;
    const reidsRes = await getAsync(redisResName);
    console.log(reidsRes);
    if(redisRes) {
      
    } else {

    }
    const { rows: results, count: totalCount } = await options.models.blogs.findAndCountAll({
      limit,
      offset
    });
    reply({ results, totalCount });
  },
  config: {
    tags: ['api', GROUP_NAME],
    description: '获取文章列表',
    validate: {
      query: {
        ...options.paginationDefine
      }
    }
  }
})
