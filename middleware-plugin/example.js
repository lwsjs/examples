class ExamplePlugin {
  middleware (config, lws) {
    return function (ctx, next) {
      ctx.body = 'Hello from lws!'
    }
  }
}

module.exports = ExamplePlugin
