class ExamplePlugin {
  middleware (config) {
    return async function (ctx, next) {
      ctx.body = 'Hello from lws!'
      await next()
    }
  }
}

export default ExamplePlugin
