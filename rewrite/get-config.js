class GetConfig {
  middleware (config) {
    return async function (ctx, next) {
      if (ctx.request.path === '/get-lws-config' && ctx.request.method === 'GET') {
        ctx.response.set('content-type', 'application/json')
        ctx.response.body = JSON.stringify(config.rewrite)
      }
      await next()
    }
  }
}

module.exports = GetConfig
